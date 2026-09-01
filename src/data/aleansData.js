// Default Root Admin account provided so the app loads immediately without blank screen
export const initialRegisteredUsers = [
  {
    id: 'EMP-1001',
    name: 'Kalyan Reddy',
    code: 'KR',
    role: 'Admin',
    systemRole: 'Admin',
    title: 'Managing Director & CEO',
    department: 'Executive Board',
    email: 'kalyan@aleanserp.com',
    password: 'password123',
    phone: '+91 98490 12345',
    location: 'Hyderabad HQ',
    status: 'Active',
    joinedDate: '2026-01-10',
    ctc: '₹45,00,000',
    directReports: 0,
    leavesBalance: { cl: 12, sl: 8, pl: 15 }
  }
];

export const aleanOrganizations = {
  name: 'Alea Enterprise ERP',
  cin: 'U72200TG2021PTC148892',
  gstin: '36AABCA1234F1Z8',
  pan: 'AABCA1234F',
  headquarters: 'Cyber Towers, Hitec City, Hyderabad - 500081',
  branches: [
    { id: 'BR-1', name: 'Hyderabad HQ (Hitec City)', employees: 1, type: 'Corporate Headquarters' },
    { id: 'BR-2', name: 'Bengaluru Tech Center', employees: 0, type: 'R&D & Sales Tech Center' },
    { id: 'BR-3', name: 'Mumbai Financial Hub', employees: 0, type: 'Regional Financial Office' },
    { id: 'BR-4', name: 'Chennai Plant & Depot', employees: 0, type: 'Manufacturing & Warehouse' },
    { id: 'BR-5', name: 'Delhi NCR Office', employees: 0, type: 'Sales & Govt Relations' }
  ],
  departments: [
    { name: 'Executive Board', head: 'Kalyan Reddy', budget: '₹0', count: 1 },
    { name: 'Engineering & R&D', head: '—', budget: '₹0', count: 0 },
    { name: 'Finance & Accounts', head: '—', budget: '₹0', count: 0 },
    { name: 'Sales & Growth', head: '—', budget: '₹0', count: 0 },
    { name: 'Operations & Procurement', head: '—', budget: '₹0', count: 0 },
    { name: 'Human Resources & L&D', head: '—', budget: '₹0', count: 0 }
  ]
};

export const aleanFinance = {
  monthlyRevenue: '₹0',
  monthlyExpenses: '₹0',
  netProfitMargin: '0%',
  outstandingReceivables: '₹0',
  accountsPayable: '₹0',
  gstLiabilityThisMonth: '₹0',
  invoices: []
};

export const aleanPayroll = {
  currentCycle: 'September 2026',
  totalDisbursed: '₹0',
  statutoryDeductions: {
    pfTotal: '₹0',
    esiTotal: '₹0',
    tdsTax: '₹0',
    ptax: '₹0'
  },
  processedEmployees: 1,
  pendingApprovals: 0,
  disbursalStatus: 'No payroll processed yet'
};

export const aleanRecruitment = [];
export const aleanInventory = [];
export const aleanProcurement = [];
export const aleanCRM = [];
export const aleanApprovals = [];
export const aleanAuditLogs = [];
export const aleanNotifications = [];

export const aleanQuality = {
  totalLots: 0,
  pendingLots: 0,
  rejectedLots: 0,
  acceptedLots: 0,
  openNCRs: 0,
  criticalNCRs: 0,
  overdueCAPAs: 0,
  totalOpenCAPAs: 0,
  ncrs: [],
  scorecards: []
};

export const aleanCustomerService = {
  activeContracts: 0,
  expiringContracts: 0,
  expiredContracts: 0,
  openCalls: 0,
  inProgressCalls: 0,
  slaBreaches: 0,
  resolvedCalls: 0,
  activeWarranties: 0,
  avgCSAT: '—',
  amcRenewals: [],
  tickets: []
};

export const aleanReports = [];
export const aleanTravelClaims = [];
export const aleanTrainingCourses = [];
export const aleanDocuments = [];
export const aleanProjects = [];
export const aleanITAssets = [];
export const aleanHelpDesk = [];
export const aleanIntegrationsList = [];
export const aleanOKRs = [];
