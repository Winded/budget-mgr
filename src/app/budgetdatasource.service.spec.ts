import { TestBed } from '@angular/core/testing';

import { BudgetDataSourceService } from './budgetdatasource.service';

describe('BudgetdatasourceService', () => {
  let service: BudgetDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
