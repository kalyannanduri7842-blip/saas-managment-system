import { describe, it, expect } from 'vitest';
import { aggregateSum1, aggregateCount1, aggregateGroupBy1 } from '../src/lib/aggregationUtils.js';
import { calculateMonthlyCost1, calculateAnnualCost1, calculateSeatUtilization1 } from '../src/lib/costUtils.js';
import { uniqueBy1, groupBy1, paginate1, chunk1 } from '../src/lib/arrayUtils.js';
import { sortByField1 } from '../src/lib/sortUtils.js';
import { truncate1, capitalize1, slugify1, initials1 } from '../src/lib/stringUtils.js';
import { applyFilter1, buildSearchPredicate1 } from '../src/lib/filterUtils.js';

describe('aggregationUtils', () => {
  const items = [{ amount: 10 }, { amount: 20 }, { amount: 30 }];

  it('sums by key', () => {
    expect(aggregateSum1(items, 'amount')).toBe(60);
  });

  it('counts items', () => {
    expect(aggregateCount1(items)).toBe(3);
    expect(aggregateCount1(items, (i) => i.amount > 15)).toBe(2);
  });

  it('groups by key', () => {
    const data = [{ status: 'Active' }, { status: 'Active' }, { status: 'Trial' }];
    const groups = aggregateGroupBy1(data, 'status');
    expect(groups.Active).toBe(2);
    expect(groups.Trial).toBe(1);
  });
});

describe('costUtils', () => {
  it('converts yearly to monthly', () => {
    expect(calculateMonthlyCost1(1200, 'Yearly')).toBe(100);
  });

  it('converts monthly to annual', () => {
    expect(calculateAnnualCost1(50, 'Monthly')).toBe(600);
  });

  it('calculates seat utilization', () => {
    expect(calculateSeatUtilization1(8, 10)).toBe(80);
    expect(calculateSeatUtilization1(0, 0)).toBe(0);
  });
});

describe('arrayUtils', () => {
  it('uniques by key', () => {
    const items = [{ id: 1 }, { id: 2 }, { id: 1 }];
    expect(uniqueBy1(items, 'id')).toHaveLength(2);
  });

  it('groups by key', () => {
    const items = [{ cat: 'A' }, { cat: 'B' }, { cat: 'A' }];
    const g = groupBy1(items, 'cat');
    expect(g.A).toHaveLength(2);
    expect(g.B).toHaveLength(1);
  });

  it('paginates', () => {
    const items = Array.from({ length: 25 }, (_, i) => ({ id: i }));
    const page = paginate1(items, 2, 10);
    expect(page.items).toHaveLength(10);
    expect(page.page).toBe(2);
    expect(page.totalPages).toBe(3);
  });

  it('chunks arrays', () => {
    expect(chunk1([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
});

describe('sortUtils', () => {
  it('sorts by field ascending', () => {
    const items = [{ name: 'c' }, { name: 'a' }, { name: 'b' }];
    const sorted = sortByField1(items, 'name', 'asc');
    expect(sorted.map((i) => i.name)).toEqual(['a', 'b', 'c']);
  });
});

describe('stringUtils', () => {
  it('truncates long strings', () => {
    expect(truncate1('hello world', 8)).toBe('hello...');
  });

  it('capitalizes', () => {
    expect(capitalize1('HELLO')).toBe('Hello');
  });

  it('slugifies', () => {
    expect(slugify1('Hello World!')).toBe('hello-world');
  });

  it('builds initials', () => {
    expect(initials1('John Smith')).toBe('JS');
  });
});

describe('filterUtils', () => {
  it('filters with predicate', () => {
    const items = [{ status: 'Active' }, { status: 'Trial' }];
    const result = applyFilter1(items, (i) => i.status === 'Active');
    expect(result).toHaveLength(1);
  });

  it('builds search predicate', () => {
    const pred = buildSearchPredicate1('slack', ['name']);
    expect(pred({ name: 'Slack App' })).toBe(true);
    expect(pred({ name: 'GitHub' })).toBe(false);
  });
});
