import { describe, it, expect } from 'vitest';
import { validateApplication, sanitizeApplication } from '../src/validators/applicationValidator.js';
import { validateUser, sanitizeUser, isEmailUnique } from '../src/validators/userValidator.js';
import { validateSubscription, sanitizeSubscription } from '../src/validators/subscriptionValidator.js';
import { validateExpense, sanitizeExpense } from '../src/validators/expenseValidator.js';
import { getMonthlyEquivalent, getAnnualEquivalent, formatCurrency, calculateDashboardStats } from '../src/utils/calculations.js';
import { generateId } from '../src/services/storage.js';

describe('applicationValidator', () => {
  it('rejects empty name', () => {
    const result = validateApplication({ name: '', vendor: 'Acme', category: 'Productivity' });
    expect(result.isValid).toBe(false);
    expect(result.errors.name).toBeTruthy();
  });

  it('accepts valid application', () => {
    const result = validateApplication({
      name: 'Slack',
      vendor: 'Salesforce',
      category: 'Communication',
      monthlyCost: 12.5,
      numberOfUsers: 10,
      status: 'Active',
    });
    expect(result.isValid).toBe(true);
  });

  it('sanitizes application data', () => {
    const clean = sanitizeApplication({
      name: '  Test App  ',
      vendor: ' Vendor ',
      category: 'Design',
      monthlyCost: '15.5',
      numberOfUsers: '3',
    });
    expect(clean.name).toBe('Test App');
    expect(clean.vendor).toBe('Vendor');
    expect(clean.monthlyCost).toBe(15.5);
    expect(clean.numberOfUsers).toBe(3);
  });
});

describe('userValidator', () => {
  it('requires valid email', () => {
    const result = validateUser({ name: 'John', email: 'not-an-email', role: 'Employee' });
    expect(result.isValid).toBe(false);
    expect(result.errors.email).toBeTruthy();
  });

  it('accepts valid user', () => {
    const result = validateUser({
      name: 'John Smith',
      email: 'john@company.com',
      role: 'Admin',
      status: 'Active',
    });
    expect(result.isValid).toBe(true);
  });

  it('checks email uniqueness', () => {
    const users = [{ id: '1', email: 'a@test.com' }];
    expect(isEmailUnique('a@test.com', users)).toBe(false);
    expect(isEmailUnique('b@test.com', users)).toBe(true);
    expect(isEmailUnique('a@test.com', users, '1')).toBe(true);
  });

  it('sanitizes user email to lowercase', () => {
    const clean = sanitizeUser({ name: ' Jane ', email: 'Jane@Company.COM', role: 'Manager' });
    expect(clean.email).toBe('jane@company.com');
    expect(clean.name).toBe('Jane');
  });
});

describe('subscriptionValidator', () => {
  it('requires cost greater than zero', () => {
    const result = validateSubscription({
      applicationId: 'app-1',
      planName: 'Pro',
      cost: 0,
      renewalDate: '2026-12-01',
    });
    expect(result.isValid).toBe(false);
    expect(result.errors.cost).toBeTruthy();
  });

  it('accepts valid subscription', () => {
    const result = validateSubscription({
      applicationId: 'app-1',
      planName: 'Business',
      cost: 100,
      billingCycle: 'Monthly',
      renewalDate: '2026-12-01',
      seats: 10,
      usedSeats: 5,
    });
    expect(result.isValid).toBe(true);
  });

  it('sanitizes subscription numbers', () => {
    const clean = sanitizeSubscription({
      applicationId: 'app-1',
      planName: ' Team ',
      cost: '99.5',
      seats: '20',
      usedSeats: '8',
      billingCycle: 'Yearly',
    });
    expect(clean.cost).toBe(99.5);
    expect(clean.seats).toBe(20);
    expect(clean.planName).toBe('Team');
  });
});

describe('expenseValidator', () => {
  it('requires positive amount', () => {
    const result = validateExpense({ applicationId: 'app-1', amount: -5, date: '2026-08-01' });
    expect(result.isValid).toBe(false);
  });

  it('accepts valid expense', () => {
    const result = validateExpense({
      applicationId: 'app-1',
      amount: 50,
      date: '2026-08-01',
      paymentStatus: 'Paid',
    });
    expect(result.isValid).toBe(true);
  });
});

describe('calculations', () => {
  it('computes monthly equivalent for yearly billing', () => {
    expect(getMonthlyEquivalent({ cost: 1200, billingCycle: 'Yearly' })).toBe(100);
  });

  it('computes annual equivalent for monthly billing', () => {
    expect(getAnnualEquivalent({ cost: 50, billingCycle: 'Monthly' })).toBe(600);
  });

  it('formats currency', () => {
    const formatted = formatCurrency(1234.5);
    expect(formatted).toContain('1,234.50');
  });

  it('calculates dashboard stats from data', () => {
    const apps = [{ id: '1', status: 'Active' }, { id: '2', status: 'Trial' }];
    const subs = [
      { id: 's1', status: 'Active', cost: 100, billingCycle: 'Monthly', renewalDate: '2026-09-15' },
      { id: 's2', status: 'Cancelled', cost: 50, billingCycle: 'Monthly', renewalDate: '2026-01-01' },
    ];
    const users = [{ id: 'u1', status: 'Active' }, { id: 'u2', status: 'Inactive' }];
    const stats = calculateDashboardStats(apps, subs, users);
    expect(stats.totalApplications).toBe(2);
    expect(stats.activeSubscriptions).toBe(1);
    expect(stats.totalUsers).toBe(1);
    expect(stats.monthlySpending).toBe(100);
  });
});

describe('storage helpers', () => {
  it('generates unique ids', () => {
    const a = generateId('app');
    const b = generateId('app');
    expect(a).not.toBe(b);
    expect(a.startsWith('app-')).toBe(true);
  });
});
