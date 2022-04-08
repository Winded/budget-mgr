import { TestBed } from '@angular/core/testing';
import { BudgetData } from './budgetdata';

import { BudgetDataSourceService } from './budgetdatasource.service';

describe('BudgetDataSourceService', () => {
  let service: BudgetDataSourceService;

  beforeEach(() => {
    window.localStorage.removeItem('BudgetData');
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetDataSourceService);
  });

  it('should load default data', async () => {
    const data = await service.getOrLoad();
    expect(data).toEqual({
      balance: 2000,
      emergencyBuffer: 1000,
      income: [
        { name: "Salary", amount: 1000 },
      ],
      expenses: [
        { name: "Rent", amount: 750 },
        { name: "Groceries", amount: 400 },
      ],
    });
  });

  it('should load stored data', async () => {
    const expectedData: BudgetData = {
      balance: 4000,
      emergencyBuffer: 2000,
      income: [
        { name: "Salary", amount: 1 },
      ],
      expenses: [
        { name: "Rent", amount: 2 },
        { name: "Groceries", amount: 3 },
      ],
    };

    window.localStorage.setItem('BudgetData', JSON.stringify(expectedData));

    const data = await service.getOrLoad();
    expect(data).toEqual(expectedData);
  });

  it('should save data', async () => {
    expect(window.localStorage.getItem('BudgetData')).toBe(null);

    await service.getOrLoad();
    await service.save();

    expect(window.localStorage.getItem('BudgetData')).not.toBe(null);
  });
});
