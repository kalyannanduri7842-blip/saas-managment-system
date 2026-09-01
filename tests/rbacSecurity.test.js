import { describe, it, expect } from 'vitest';
import { allNavModules } from '../src/components/AleansSidebar';

describe('Aleans Enterprise ERP - Strict RBAC & Role-Based Navigation Matrix', () => {
  it('should contain all 16 core executive dashboards in master list', () => {
    expect(allNavModules.length).toBe(16);
  });

  it('should give Admin access to all 16 dashboards', () => {
    const adminModules = allNavModules.filter(m => m.roles.includes('Admin'));
    expect(adminModules.length).toBe(16);
  });

  it('should give Manager access to operational dashboards while restricting system governance', () => {
    const managerModules = allNavModules.filter(m => m.roles.includes('Manager'));
    const labels = managerModules.map(m => m.label);
    expect(labels).toContain('Dashboard');
    expect(labels).toContain('My Portal / Self Service');
    expect(labels).toContain('Finance & Accounts');
    expect(labels).toContain('Inventory & Stock');
    expect(labels).toContain('CRM & Sales');
    expect(labels).not.toContain('Users & Roles');
    expect(labels).not.toContain('Organization');
    expect(labels).not.toContain('Statutory Payroll');
  });

  it('should give Employee access strictly to Employee Self-Service and collaborative modules', () => {
    const employeeModules = allNavModules.filter(m => m.roles.includes('Employee'));
    const labels = employeeModules.map(m => m.label);
    expect(labels).toContain('Dashboard');
    expect(labels).toContain('My Portal / Self Service');
    expect(labels).toContain('HR & Attendance');
    expect(labels).toContain('Operations & Projects');
    expect(labels).toContain('Documents & DMS');
    expect(labels).not.toContain('Finance & Accounts');
    expect(labels).not.toContain('Procurement & POs');
    expect(labels).not.toContain('Statutory Payroll');
    expect(labels).not.toContain('Users & Roles');
  });
});
