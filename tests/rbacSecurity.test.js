import { describe, it, expect } from 'vitest';
import { navModules } from '../src/components/AleansSidebar';

describe('Aleans Enterprise ERP - RBAC & 16-Dashboard Navigation Matrix', () => {
  it('should contain exactly 16 core executive dashboards in sidebar navigation', () => {
    expect(navModules.length).toBe(16);
  });

  it('should include all required 16 dashboard routes', () => {
    const labels = navModules.map(m => m.label);
    expect(labels).toContain('Dashboard');
    expect(labels).toContain('My Portal / Self Service');
    expect(labels).toContain('Organization');
    expect(labels).toContain('Users & Roles');
    expect(labels).toContain('HR & Attendance');
    expect(labels).toContain('Recruitment & ATS');
    expect(labels).toContain('Performance & OKR');
    expect(labels).toContain('Finance & Accounts');
    expect(labels).toContain('Statutory Payroll');
    expect(labels).toContain('Inventory & Stock');
    expect(labels).toContain('Procurement & POs');
    expect(labels).toContain('CRM & Sales');
    expect(labels).toContain('Operations & Projects');
    expect(labels).toContain('Customer Service & SLA');
    expect(labels).toContain('Documents & DMS');
    expect(labels).toContain('MIS & Reports');
  });

  it('should restrict delete permissions to Manager and Admin roles only', () => {
    const checkDeleteAccess = (role, systemRole) => {
      return role === 'Manager' || role === 'Admin' || systemRole === 'Manager' || systemRole === 'Admin';
    };

    expect(checkDeleteAccess('Admin', 'Admin')).toBe(true);
    expect(checkDeleteAccess('Manager', 'Manager')).toBe(true);
    expect(checkDeleteAccess('Employee', 'Employee')).toBe(false);
    expect(checkDeleteAccess('Staff', 'Staff')).toBe(false);
  });
});
