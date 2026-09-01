import { describe, it, expect } from 'vitest';
import { getInitials } from '../src/context/AleansContext';
import {
  aleanFinance,
  aleanPayroll,
  aleanInventory,
  aleanProcurement,
  aleanCRM,
  aleanQuality,
  aleanCustomerService,
  aleanReports,
  aleanTravelClaims,
  aleanTrainingCourses,
  aleanDocuments
} from '../src/data/aleansData';

describe('Aleans Enterprise ERP - Zero-Default Data Model', () => {
  it('should initialize all transaction datasets to empty arrays by default', () => {
    expect(aleanFinance.invoices).toEqual([]);
    expect(aleanInventory).toEqual([]);
    expect(aleanProcurement).toEqual([]);
    expect(aleanCRM).toEqual([]);
    expect(aleanReports).toEqual([]);
    expect(aleanTravelClaims).toEqual([]);
    expect(aleanTrainingCourses).toEqual([]);
    expect(aleanDocuments).toEqual([]);
  });

  it('should initialize all counters and metrics to zero by default', () => {
    expect(aleanFinance.monthlyRevenue).toBe('₹0');
    expect(aleanFinance.gstLiabilityThisMonth).toBe('₹0');
    expect(aleanPayroll.totalDisbursed).toBe('₹0');
    expect(aleanQuality.totalLots).toBe(0);
    expect(aleanQuality.openNCRs).toBe(0);
    expect(aleanCustomerService.activeContracts).toBe(0);
    expect(aleanCustomerService.openCalls).toBe(0);
  });

  it('should generate accurate 2-letter human initials badges from full names', () => {
    expect(getInitials('Kalyan Reddy')).toBe('KR');
    expect(getInitials('Anand Kumar')).toBe('AK');
    expect(getInitials('Sarah')).toBe('SA');
    expect(getInitials('John Doe Smith')).toBe('JS');
    expect(getInitials('')).toBe('U');
  });
});
