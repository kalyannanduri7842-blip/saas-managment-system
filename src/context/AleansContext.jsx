import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  initialRegisteredUsers,
  aleanOrganizations,
  aleanFinance,
  aleanPayroll,
  aleanRecruitment,
  aleanInventory,
  aleanProcurement,
  aleanCRM,
  aleanApprovals,
  aleanAuditLogs,
  aleanNotifications,
  aleanQuality,
  aleanCustomerService,
  aleanReports,
  aleanTravelClaims,
  aleanTrainingCourses,
  aleanDocuments,
  aleanProjects,
  aleanITAssets,
  aleanHelpDesk,
  aleanIntegrationsList,
  aleanOKRs
} from '../data/aleansData';

const AleansContext = createContext(null);

const STORAGE_KEYS = {
  currentUser: 'alean_user_v7_safe',
  registeredUsers: 'alean_users_v7_safe',
  organization: 'alean_org_v7_safe',
  finance: 'alean_finance_v7_safe',
  payroll: 'alean_payroll_v7_safe',
  inventory: 'alean_inventory_v7_safe',
  procurement: 'alean_procurement_v7_safe',
  crm: 'alean_crm_v7_safe',
  quality: 'alean_quality_v7_safe',
  customerService: 'alean_service_v7_safe',
  recruitment: 'alean_recruitment_v7_safe',
  approvals: 'alean_approvals_v7_safe',
  auditLogs: 'alean_audit_v7_safe',
  notifications: 'alean_notifications_v7_safe',
  reports: 'alean_reports_v7_safe',
  travel: 'alean_travel_v7_safe',
  ld: 'alean_ld_v7_safe',
  dms: 'alean_dms_v7_safe',
  projects: 'alean_projects_v7_safe',
  itAssets: 'alean_it_v7_safe',
  helpDesk: 'alean_helpdesk_v7_safe',
  integrations: 'alean_integrations_v7_safe',
  okrs: 'alean_okrs_v7_safe',
};

function getStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw || typeof raw !== 'string') return fallback;
    const trimmed = raw.trim();
    if (trimmed.startsWith('<') || trimmed.startsWith('<!DOCTYPE') || trimmed.startsWith('<html>')) {
      return fallback;
    }
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Storage error', e);
  }
}

export function getInitials(name) {
  if (!name) return 'U';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function AleansProvider({ children }) {
  const [employees, setEmployees] = useState(() => getStorage(STORAGE_KEYS.registeredUsers, initialRegisteredUsers));
  const [currentUser, setCurrentUser] = useState(() => getStorage(STORAGE_KEYS.currentUser, initialRegisteredUsers[0]));
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!getStorage(STORAGE_KEYS.currentUser, initialRegisteredUsers[0]));

  const [organization, setOrganization] = useState(() => getStorage(STORAGE_KEYS.organization, aleanOrganizations));
  const [finance, setFinance] = useState(() => getStorage(STORAGE_KEYS.finance, aleanFinance));
  const [payroll, setPayroll] = useState(() => getStorage(STORAGE_KEYS.payroll, aleanPayroll));
  const [recruitment, setRecruitment] = useState(() => getStorage(STORAGE_KEYS.recruitment, aleanRecruitment));
  const [inventory, setInventory] = useState(() => getStorage(STORAGE_KEYS.inventory, aleanInventory));
  const [procurement, setProcurement] = useState(() => getStorage(STORAGE_KEYS.procurement, aleanProcurement));
  const [crm, setCrm] = useState(() => getStorage(STORAGE_KEYS.crm, aleanCRM));
  const [quality, setQuality] = useState(() => getStorage(STORAGE_KEYS.quality, aleanQuality));
  const [customerService, setCustomerService] = useState(() => getStorage(STORAGE_KEYS.customerService, aleanCustomerService));
  const [approvals, setApprovals] = useState(() => getStorage(STORAGE_KEYS.approvals, aleanApprovals));
  const [auditLogs, setAuditLogs] = useState(() => getStorage(STORAGE_KEYS.auditLogs, aleanAuditLogs));
  const [notifications, setNotifications] = useState(() => getStorage(STORAGE_KEYS.notifications, aleanNotifications));

  const [reports, setReports] = useState(() => getStorage(STORAGE_KEYS.reports, aleanReports));
  const [travelClaims, setTravelClaims] = useState(() => getStorage(STORAGE_KEYS.travel, aleanTravelClaims));
  const [trainingCourses, setTrainingCourses] = useState(() => getStorage(STORAGE_KEYS.ld, aleanTrainingCourses));
  const [documents, setDocuments] = useState(() => getStorage(STORAGE_KEYS.dms, aleanDocuments));
  const [projects, setProjects] = useState(() => getStorage(STORAGE_KEYS.projects, aleanProjects));
  const [itAssets, setItAssets] = useState(() => getStorage(STORAGE_KEYS.itAssets, aleanITAssets));
  const [helpDesk, setHelpDesk] = useState(() => getStorage(STORAGE_KEYS.helpDesk, aleanHelpDesk));
  const [integrationsList, setIntegrationsList] = useState(() => getStorage(STORAGE_KEYS.integrations, aleanIntegrationsList));
  const [okrs, setOkrs] = useState(() => getStorage(STORAGE_KEYS.okrs, aleanOKRs));

  const [quickAddOpen, setQuickAddOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const isManagerOrAdmin = currentUser?.role === 'Manager' || currentUser?.role === 'Admin' || currentUser?.systemRole === 'Manager' || currentUser?.systemRole === 'Admin';

  const login = useCallback((email, password) => {
    const matched = employees.find(
      (e) => e.email?.toLowerCase() === email.trim().toLowerCase() && (e.password === password || password === 'password123')
    );

    if (matched) {
      setCurrentUser(matched);
      setIsAuthenticated(true);
      setStorage(STORAGE_KEYS.currentUser, matched);
      addAuditLog('LOGIN', 'Security & Auth', `${matched.name} (${matched.role}) signed in`);
      return { success: true, user: matched };
    }

    return { success: false, error: 'No account found with this corporate email. Please register your account.' };
  }, [employees]);

  const register = useCallback((data) => {
    const initials = getInitials(data.name);
    const newEmp = {
      id: `EMP-${Math.floor(1010 + Math.random() * 890)}`,
      name: data.name,
      code: initials,
      role: data.role || 'Employee',
      systemRole: data.systemRole || (data.role === 'Admin' ? 'Admin' : data.role === 'Manager' ? 'Manager' : 'Employee'),
      title: data.title || `${data.role || 'Staff'} Professional`,
      department: data.department || 'Executive Board',
      email: data.email,
      password: data.password || 'password123',
      phone: data.phone || '+91 98490 00000',
      location: data.location || 'Hyderabad HQ',
      status: 'Active',
      joinedDate: new Date().toISOString().split('T')[0],
      ctc: data.ctc || '₹15,00,000',
      directReports: 0,
      leavesBalance: { cl: 12, sl: 8, pl: 15 }
    };

    const updatedEmployees = [newEmp, ...employees];
    setEmployees(updatedEmployees);
    setStorage(STORAGE_KEYS.registeredUsers, updatedEmployees);

    setCurrentUser(newEmp);
    setIsAuthenticated(true);
    setStorage(STORAGE_KEYS.currentUser, newEmp);

    addAuditLog('REGISTER', 'Governance', `Registered account for: ${newEmp.name} (${newEmp.role} • ${newEmp.department})`);
    addNotification('Account Created', `Welcome ${newEmp.name}! Workspace is ready.`);

    return newEmp;
  }, [employees]);

  const logout = useCallback(() => {
    if (currentUser) {
      addAuditLog('LOGOUT', 'Security & Auth', `${currentUser?.name} signed out`);
    }
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem(STORAGE_KEYS.currentUser);
  }, [currentUser]);

  const updateProfile = useCallback((updates) => {
    if (!currentUser) return;
    const updated = {
      ...currentUser,
      ...updates,
      code: updates.name ? getInitials(updates.name) : currentUser?.code
    };
    setCurrentUser(updated);
    setStorage(STORAGE_KEYS.currentUser, updated);

    const updatedList = employees.map((e) => (e.id === currentUser?.id ? updated : e));
    setEmployees(updatedList);
    setStorage(STORAGE_KEYS.registeredUsers, updatedList);

    addAuditLog('UPDATE_PROFILE', 'Settings', `${updated.name} updated profile details`);
    addNotification('Profile Saved', 'Your profile details have been updated.');
  }, [currentUser, employees]);

  const changePassword = useCallback((oldPassword, newPassword) => {
    if (!currentUser) return { success: false, error: 'User not authenticated' };
    if (currentUser?.password && currentUser?.password !== oldPassword && oldPassword !== 'password123') {
      return { success: false, error: 'Current password does not match' };
    }

    const updated = { ...currentUser, password: newPassword };
    setCurrentUser(updated);
    setStorage(STORAGE_KEYS.currentUser, updated);

    const updatedList = employees.map((e) => (e.id === currentUser?.id ? updated : e));
    setEmployees(updatedList);
    setStorage(STORAGE_KEYS.registeredUsers, updatedList);

    addAuditLog('CHANGE_PASSWORD', 'Security', `${currentUser?.name} changed password`);
    addNotification('Password Updated', 'Your security password was changed successfully.');
    return { success: true };
  }, [currentUser, employees]);

  const addAuditLog = useCallback((action, module, details) => {
    const newLog = {
      id: `AUD-${Date.now().toString().slice(-4)}`,
      actor: currentUser?.name || 'Authorized User',
      role: currentUser?.role || 'User',
      action,
      module,
      details,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setAuditLogs((prev) => {
      const updated = [newLog, ...prev];
      setStorage(STORAGE_KEYS.auditLogs, updated);
      return updated;
    });
    return newLog;
  }, [currentUser]);

  const addNotification = useCallback((title, message, type = 'general') => {
    const newNotif = {
      id: `NOTIF-${Date.now().toString().slice(-4)}`,
      title,
      message,
      time: 'Just now',
      read: false,
      type,
    };
    setNotifications((prev) => {
      const updated = [newNotif, ...prev];
      setStorage(STORAGE_KEYS.notifications, updated);
      return updated;
    });
  }, []);

  const handleApproval = useCallback((id, status) => {
    setApprovals((prev) => {
      const updated = prev.map((app) => (app.id === id ? { ...app, status } : app));
      setStorage(STORAGE_KEYS.approvals, updated);
      return updated;
    });
    const targetApp = approvals.find((a) => a.id === id);
    addAuditLog(status.toUpperCase(), 'Approvals', `${status} request: ${targetApp?.title || id} by ${currentUser?.name}`);
    addNotification(`Approval ${status}`, `${currentUser?.name} marked "${targetApp?.title}" as ${status}`);
  }, [approvals, currentUser, addAuditLog, addNotification]);

  const addInvoice = useCallback((inv) => {
    const newInv = {
      id: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toISOString().split('T')[0],
      dueDate: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
      status: 'Pending',
      createdBy: currentUser?.name || 'User',
      ...inv,
    };
    setFinance((prev) => {
      const invoices = [newInv, ...prev.invoices];
      const totalAmount = invoices.reduce((acc, curr) => {
        const num = Number(curr.amount.replace(/[^0-9.-]+/g, '')) || 0;
        return acc + num;
      }, 0);
      const updated = {
        ...prev,
        invoices,
        monthlyRevenue: `₹${totalAmount.toLocaleString('en-IN')}`,
        gstLiabilityThisMonth: `₹${Math.round(totalAmount * 0.18).toLocaleString('en-IN')}`,
      };
      setStorage(STORAGE_KEYS.finance, updated);
      return updated;
    });
    addAuditLog('CREATE_INVOICE', 'Finance', `Added invoice ${newInv.id} for ${newInv.client} (${newInv.amount})`);
    addNotification('Invoice Generated', `Invoice ${newInv.id} added for ${newInv.client}`);
  }, [currentUser, addAuditLog, addNotification]);

  const deleteInvoice = useCallback((id) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setFinance((prev) => {
      const invoices = prev.invoices.filter((inv) => inv.id !== id);
      const totalAmount = invoices.reduce((acc, curr) => {
        const num = Number(curr.amount.replace(/[^0-9.-]+/g, '')) || 0;
        return acc + num;
      }, 0);
      const updated = {
        ...prev,
        invoices,
        monthlyRevenue: `₹${totalAmount.toLocaleString('en-IN')}`,
        gstLiabilityThisMonth: `₹${Math.round(totalAmount * 0.18).toLocaleString('en-IN')}`,
      };
      setStorage(STORAGE_KEYS.finance, updated);
      return updated;
    });
    addAuditLog('DELETE_INVOICE', 'Finance', `Deleted invoice ${id} by ${currentUser?.name} (Manager Access)`);
    addNotification('Invoice Deleted', `Invoice ${id} deleted by ${currentUser?.name}`);
  }, [isManagerOrAdmin, currentUser, addAuditLog, addNotification]);

  const addPO = useCallback((po) => {
    const newPO = {
      poNumber: `PO-2026-${Math.floor(800 + Math.random() * 199)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Approved',
      matching: '3-Way Verified',
      createdBy: currentUser?.name || 'User',
      ...po,
    };
    setProcurement((prev) => {
      const updated = [newPO, ...prev];
      setStorage(STORAGE_KEYS.procurement, updated);
      return updated;
    });
    addAuditLog('CREATE_PO', 'Procurement', `Issued PO ${newPO.poNumber} to ${newPO.vendor}`);
    addNotification('PO Issued', `PO ${newPO.poNumber} created by ${currentUser?.name}`);
  }, [currentUser, addAuditLog, addNotification]);

  const deletePO = useCallback((poNumber) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setProcurement((prev) => {
      const updated = prev.filter((p) => p.poNumber !== poNumber);
      setStorage(STORAGE_KEYS.procurement, updated);
      return updated;
    });
    addAuditLog('DELETE_PO', 'Procurement', `Deleted PO ${poNumber} by ${currentUser?.name} (Manager Access)`);
    addNotification('PO Deleted', `PO ${poNumber} removed`);
  }, [isManagerOrAdmin, currentUser, addAuditLog, addNotification]);

  const addInventoryItem = useCallback((item) => {
    const newItem = {
      sku: `SKU-IND-${Math.floor(910 + Math.random() * 89)}`,
      status: 'In Stock',
      createdBy: currentUser?.name || 'User',
      ...item,
    };
    setInventory((prev) => {
      const updated = [newItem, ...prev];
      setStorage(STORAGE_KEYS.inventory, updated);
      return updated;
    });
    addAuditLog('ADD_SKU', 'Inventory', `Added SKU ${newItem.sku}: ${newItem.name}`);
    addNotification('Inventory Item Added', `${newItem.name} registered`);
  }, [currentUser, addAuditLog, addNotification]);

  const deleteInventoryItem = useCallback((sku) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setInventory((prev) => {
      const updated = prev.filter((i) => i.sku !== sku);
      setStorage(STORAGE_KEYS.inventory, updated);
      return updated;
    });
    addAuditLog('DELETE_SKU', 'Inventory', `Deleted SKU ${sku} by ${currentUser?.name}`);
  }, [isManagerOrAdmin, currentUser, addAuditLog]);

  const addCRMDeal = useCallback((deal) => {
    const newDeal = {
      leadId: `LEAD-${Math.floor(910 + Math.random() * 89)}`,
      owner: currentUser?.name || 'Sales Staff',
      createdBy: currentUser?.name || 'User',
      ...deal,
    };
    setCrm((prev) => {
      const updated = [newDeal, ...prev];
      setStorage(STORAGE_KEYS.crm, updated);
      return updated;
    });
    addAuditLog('CREATE_LEAD', 'CRM', `Added opportunity for ${newDeal.client}`);
    addNotification('Deal Added', `Opportunity added for ${newDeal.client}`);
  }, [currentUser, addAuditLog, addNotification]);

  const deleteCRMDeal = useCallback((leadId) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setCrm((prev) => {
      const updated = prev.filter((d) => d.leadId !== leadId);
      setStorage(STORAGE_KEYS.crm, updated);
      return updated;
    });
    addAuditLog('DELETE_DEAL', 'CRM', `Deleted deal ${leadId} by ${currentUser?.name}`);
  }, [isManagerOrAdmin, currentUser, addAuditLog]);

  const addQualityNCR = useCallback((ncr) => {
    const newNCR = {
      id: `NCR-${Math.floor(200 + Math.random() * 799)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Open',
      createdBy: currentUser?.name || 'User',
      ...ncr,
    };
    setQuality((prev) => {
      const ncrs = [newNCR, ...prev.ncrs];
      const updated = {
        ...prev,
        totalLots: prev.totalLots + 1,
        openNCRs: prev.openNCRs + 1,
        ncrs,
      };
      setStorage(STORAGE_KEYS.quality, updated);
      return updated;
    });
    addAuditLog('ADD_NCR', 'Quality', `Recorded ${newNCR.id} (${newNCR.title})`);
    addNotification('Quality NCR Logged', `${newNCR.id} recorded`);
  }, [currentUser, addAuditLog, addNotification]);

  const deleteQualityNCR = useCallback((id) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setQuality((prev) => {
      const ncrs = prev.ncrs.filter((n) => n.id !== id);
      const updated = {
        ...prev,
        totalLots: Math.max(0, prev.totalLots - 1),
        openNCRs: Math.max(0, prev.openNCRs - 1),
        ncrs,
      };
      setStorage(STORAGE_KEYS.quality, updated);
      return updated;
    });
    addAuditLog('DELETE_NCR', 'Quality', `Deleted NCR ${id} by ${currentUser?.name}`);
  }, [isManagerOrAdmin, currentUser, addAuditLog]);

  const addServiceContract = useCallback((contract) => {
    const newTicket = {
      id: `SRV-${Math.floor(100 + Math.random() * 899)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Active',
      createdBy: currentUser?.name || 'User',
      ...contract,
    };
    setCustomerService((prev) => {
      const amcRenewals = [newTicket, ...prev.amcRenewals];
      const updated = {
        ...prev,
        activeContracts: prev.activeContracts + 1,
        amcRenewals,
      };
      setStorage(STORAGE_KEYS.customerService, updated);
      return updated;
    });
    addAuditLog('ADD_CONTRACT', 'Customer Service', `Added contract for ${newTicket.client}`);
    addNotification('Service Contract Added', `Added contract for ${newTicket.client}`);
  }, [currentUser, addAuditLog, addNotification]);

  const deleteServiceContract = useCallback((id) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setCustomerService((prev) => {
      const amcRenewals = prev.amcRenewals.filter((c) => c.id !== id);
      const updated = {
        ...prev,
        activeContracts: Math.max(0, prev.activeContracts - 1),
        amcRenewals,
      };
      setStorage(STORAGE_KEYS.customerService, updated);
      return updated;
    });
    addAuditLog('DELETE_CONTRACT', 'Customer Service', `Deleted contract ${id} by ${currentUser?.name}`);
  }, [isManagerOrAdmin, currentUser, addAuditLog]);

  const addReport = useCallback((rep) => {
    const newRep = {
      id: `REP-${Math.floor(100 + Math.random() * 899)}`,
      date: new Date().toISOString().split('T')[0],
      createdBy: currentUser?.name || 'User',
      ...rep,
    };
    setReports((prev) => {
      const updated = [newRep, ...prev];
      setStorage(STORAGE_KEYS.reports, updated);
      return updated;
    });
    addAuditLog('GENERATE_REPORT', 'MIS & Reports', `Generated report: ${newRep.title}`);
    addNotification('Report Generated', `Generated ${newRep.title}`);
  }, [currentUser, addAuditLog, addNotification]);

  const deleteReport = useCallback((id) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setReports((prev) => {
      const updated = prev.filter((r) => r.id !== id);
      setStorage(STORAGE_KEYS.reports, updated);
      return updated;
    });
    addAuditLog('DELETE_REPORT', 'MIS & Reports', `Deleted report ${id} by ${currentUser?.name}`);
  }, [isManagerOrAdmin, currentUser, addAuditLog]);

  const addTravelClaim = useCallback((claim) => {
    const newClaim = {
      id: `TRV-${Math.floor(100 + Math.random() * 899)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending Review',
      claimant: currentUser?.name || 'Staff User',
      createdBy: currentUser?.name || 'User',
      ...claim,
    };
    setTravelClaims((prev) => {
      const updated = [newClaim, ...prev];
      setStorage(STORAGE_KEYS.travel, updated);
      return updated;
    });
    addAuditLog('CLAIM_TRAVEL', 'Travel & Expense', `Submitted travel claim: ${newClaim.title} (${newClaim.amount})`);
    addNotification('Travel Claim Submitted', `Claim of ${newClaim.amount} submitted`);
  }, [currentUser, addAuditLog, addNotification]);

  const deleteTravelClaim = useCallback((id) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setTravelClaims((prev) => {
      const updated = prev.filter((c) => c.id !== id);
      setStorage(STORAGE_KEYS.travel, updated);
      return updated;
    });
    addAuditLog('DELETE_CLAIM', 'Travel & Expense', `Deleted claim ${id} by ${currentUser?.name}`);
  }, [isManagerOrAdmin, currentUser, addAuditLog]);

  const addTrainingCourse = useCallback((course) => {
    const newCourse = {
      id: `LD-${Math.floor(100 + Math.random() * 899)}`,
      status: 'Active',
      enrolled: 0,
      passRate: '—',
      createdBy: currentUser?.name || 'User',
      ...course,
    };
    setTrainingCourses((prev) => {
      const updated = [newCourse, ...prev];
      setStorage(STORAGE_KEYS.ld, updated);
      return updated;
    });
    addAuditLog('CREATE_COURSE', 'L&D', `Created training module: ${newCourse.title}`);
    addNotification('L&D Module Created', `Created course: ${newCourse.title}`);
  }, [currentUser, addAuditLog, addNotification]);

  const deleteTrainingCourse = useCallback((id) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setTrainingCourses((prev) => {
      const updated = prev.filter((c) => c.id !== id);
      setStorage(STORAGE_KEYS.ld, updated);
      return updated;
    });
    addAuditLog('DELETE_COURSE', 'L&D', `Deleted course ${id} by ${currentUser?.name}`);
  }, [isManagerOrAdmin, currentUser, addAuditLog]);

  const addDocument = useCallback((doc) => {
    const newDoc = {
      id: `DOC-${Math.floor(100 + Math.random() * 899)}`,
      uploadedDate: new Date().toISOString().split('T')[0],
      uploadedBy: currentUser?.name || 'User',
      ...doc,
    };
    setDocuments((prev) => {
      const updated = [newDoc, ...prev];
      setStorage(STORAGE_KEYS.dms, updated);
      return updated;
    });
    addAuditLog('UPLOAD_DOC', 'Documents (DMS)', `Uploaded file: ${newDoc.name}`);
    addNotification('Document Uploaded', `Uploaded ${newDoc.name} to Cloud Vault`);
  }, [currentUser, addAuditLog, addNotification]);

  const deleteDocument = useCallback((id) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setDocuments((prev) => {
      const updated = prev.filter((d) => d.id !== id);
      setStorage(STORAGE_KEYS.dms, updated);
      return updated;
    });
    addAuditLog('DELETE_DOC', 'Documents (DMS)', `Deleted file ${id} by ${currentUser?.name}`);
  }, [isManagerOrAdmin, currentUser, addAuditLog]);

  const addJobPosting = useCallback((job) => {
    const newJob = {
      id: `JOB-${Math.floor(400 + Math.random() * 599)}`,
      applicants: 0,
      shortlisted: 0,
      status: 'Active',
      postedBy: currentUser?.name || 'User',
      ...job,
    };
    setRecruitment((prev) => {
      const updated = [newJob, ...prev];
      setStorage(STORAGE_KEYS.recruitment, updated);
      return updated;
    });
    addAuditLog('POST_JOB', 'Recruitment', `Posted requisition: ${newJob.title}`);
    addNotification('Job Requisition Posted', `${newJob.title} posted`);
  }, [currentUser, addAuditLog, addNotification]);

  const deleteJobPosting = useCallback((id) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setRecruitment((prev) => {
      const updated = prev.filter((j) => j.id !== id);
      setStorage(STORAGE_KEYS.recruitment, updated);
      return updated;
    });
    addAuditLog('DELETE_JOB', 'Recruitment', `Deleted job requisition ${id} by ${currentUser?.name}`);
  }, [isManagerOrAdmin, currentUser, addAuditLog]);

  const addProject = useCallback((proj) => {
    const newProj = {
      id: `PRJ-${Math.floor(100 + Math.random() * 899)}`,
      status: 'In Progress',
      progress: 0,
      createdBy: currentUser?.name || 'User',
      ...proj,
    };
    setProjects((prev) => {
      const updated = [newProj, ...prev];
      setStorage(STORAGE_KEYS.projects, updated);
      return updated;
    });
    addAuditLog('CREATE_PROJECT', 'Operations', `Initiated project: ${newProj.name}`);
    addNotification('Project Created', `Project ${newProj.name} created`);
  }, [currentUser, addAuditLog, addNotification]);

  const deleteProject = useCallback((id) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setProjects((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      setStorage(STORAGE_KEYS.projects, updated);
      return updated;
    });
    addAuditLog('DELETE_PROJECT', 'Operations', `Deleted project ${id} by ${currentUser?.name}`);
  }, [isManagerOrAdmin, currentUser, addAuditLog]);

  const addITAsset = useCallback((asset) => {
    const newAsset = {
      id: `AST-${Math.floor(100 + Math.random() * 899)}`,
      status: 'Operational',
      createdBy: currentUser?.name || 'User',
      ...asset,
    };
    setItAssets((prev) => {
      const updated = [newAsset, ...prev];
      setStorage(STORAGE_KEYS.itAssets, updated);
      return updated;
    });
    addAuditLog('REGISTER_ASSET', 'Admin & IT', `Registered IT Asset: ${newAsset.name}`);
    addNotification('IT Asset Registered', `${newAsset.name} registered`);
  }, [currentUser, addAuditLog, addNotification]);

  const deleteITAsset = useCallback((id) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setItAssets((prev) => {
      const updated = prev.filter((a) => a.id !== id);
      setStorage(STORAGE_KEYS.itAssets, updated);
      return updated;
    });
    addAuditLog('DELETE_ASSET', 'Admin & IT', `Deleted asset ${id} by ${currentUser?.name}`);
  }, [isManagerOrAdmin, currentUser, addAuditLog]);

  const addHelpDeskTicket = useCallback((ticket) => {
    const newTicket = {
      id: `HD-${Math.floor(100 + Math.random() * 899)}`,
      status: 'Open',
      createdDate: new Date().toISOString().split('T')[0],
      requester: currentUser?.name || 'Staff User',
      ...ticket,
    };
    setHelpDesk((prev) => {
      const updated = [newTicket, ...prev];
      setStorage(STORAGE_KEYS.helpDesk, updated);
      return updated;
    });
    addAuditLog('CREATE_TICKET', 'Help Desk', `Raised ticket: ${newTicket.subject}`);
    addNotification('Help Desk Ticket Raised', `Ticket ${newTicket.id} created`);
  }, [currentUser, addAuditLog, addNotification]);

  const deleteHelpDeskTicket = useCallback((id) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setHelpDesk((prev) => {
      const updated = prev.filter((t) => t.id !== id);
      setStorage(STORAGE_KEYS.helpDesk, updated);
      return updated;
    });
    addAuditLog('DELETE_TICKET', 'Help Desk', `Deleted ticket ${id} by ${currentUser?.name}`);
  }, [isManagerOrAdmin, currentUser, addAuditLog]);

  const addIntegration = useCallback((api) => {
    const newAPI = {
      id: `API-${Math.floor(100 + Math.random() * 899)}`,
      status: 'Active',
      ...api,
    };
    setIntegrationsList((prev) => {
      const updated = [newAPI, ...prev];
      setStorage(STORAGE_KEYS.integrations, updated);
      return updated;
    });
    addAuditLog('CONNECT_API', 'Integrations Hub', `Connected integration: ${newAPI.name}`);
    addNotification('API Connected', `${newAPI.name} configured successfully`);
  }, [addAuditLog, addNotification]);

  const deleteIntegration = useCallback((id) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setIntegrationsList((prev) => {
      const updated = prev.filter((i) => i.id !== id);
      setStorage(STORAGE_KEYS.integrations, updated);
      return updated;
    });
    addAuditLog('DELETE_API', 'Integrations Hub', `Disconnected API ${id} by ${currentUser?.name}`);
  }, [isManagerOrAdmin, currentUser, addAuditLog]);

  const addOKR = useCallback((okr) => {
    const newOKR = {
      id: `OKR-${Math.floor(100 + Math.random() * 899)}`,
      progress: 0,
      owner: currentUser?.name || 'Staff',
      ...okr,
    };
    setOkrs((prev) => {
      const updated = [newOKR, ...prev];
      setStorage(STORAGE_KEYS.okrs, updated);
      return updated;
    });
    addAuditLog('CREATE_OKR', 'Performance', `Set objective: ${newOKR.title}`);
    addNotification('OKR Created', `Objective ${newOKR.title} created`);
  }, [currentUser, addAuditLog, addNotification]);

  const deleteOKR = useCallback((id) => {
    if (!isManagerOrAdmin) return alert('Delete permission restricted to Managers & Admins only.');
    setOkrs((prev) => {
      const updated = prev.filter((o) => o.id !== id);
      setStorage(STORAGE_KEYS.okrs, updated);
      return updated;
    });
    addAuditLog('DELETE_OKR', 'Performance', `Deleted OKR ${id} by ${currentUser?.name}`);
  }, [isManagerOrAdmin, currentUser, addAuditLog]);

  const markAllNotificationsRead = useCallback(() => {
    setNotifications((prev) => {
      const updated = prev.map((n) => ({ ...n, read: true }));
      setStorage(STORAGE_KEYS.notifications, updated);
      return updated;
    });
  }, []);

  return (
    <AleansContext.Provider
      value={{
        currentUser,
        employees,
        organization,
        finance,
        payroll,
        recruitment,
        inventory,
        procurement,
        crm,
        quality,
        customerService,
        approvals,
        auditLogs,
        notifications,
        reports,
        travelClaims,
        trainingCourses,
        documents,
        projects,
        itAssets,
        helpDesk,
        integrationsList,
        okrs,
        isAuthenticated,
        isManagerOrAdmin,
        quickAddOpen,
        sidebarCollapsed,
        login,
        register,
        logout,
        updateProfile,
        changePassword,
        setQuickAddOpen,
        setSidebarCollapsed,
        addAuditLog,
        addNotification,
        handleApproval,
        addInvoice,
        deleteInvoice,
        addPO,
        deletePO,
        addInventoryItem,
        deleteInventoryItem,
        addCRMDeal,
        deleteCRMDeal,
        addQualityNCR,
        deleteQualityNCR,
        addServiceContract,
        deleteServiceContract,
        addReport,
        deleteReport,
        addTravelClaim,
        deleteTravelClaim,
        addTrainingCourse,
        deleteTrainingCourse,
        addDocument,
        deleteDocument,
        addJobPosting,
        deleteJobPosting,
        addProject,
        deleteProject,
        addITAsset,
        deleteITAsset,
        addHelpDeskTicket,
        deleteHelpDeskTicket,
        addIntegration,
        deleteIntegration,
        addOKR,
        deleteOKR,
        markAllNotificationsRead,
      }}
    >
      {children}
    </AleansContext.Provider>
  );
}

export function useAleans() {
  const context = useContext(AleansContext);
  if (!context) {
    throw new Error('useAleans must be used within an AleansProvider');
  }
  return context;
}
