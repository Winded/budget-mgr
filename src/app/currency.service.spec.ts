import { fakeAsync, TestBed } from '@angular/core/testing';

import { CurrencyService, CurrencyType } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyService);
  });

  afterEach(() => {
    window.localStorage.removeItem('Currency');
  });

  it('should change currency type and invoke subscription', () => {
    fakeAsync(() => {
      service.onCurrencyChange.subscribe(type => expect(type).toBe(CurrencyType.EuroFinnish));
      expect(service.currencyType).toBe(CurrencyType.USD);
      service.currencyType = CurrencyType.EuroFinnish;
      expect(service.currencyType).toBe(CurrencyType.EuroFinnish);
    });
  });

  it('should format amounts correctly', () => {
    expect(service.format(123)).toBe("$123");
    expect(service.format(1425156)).toBe("$1,425,156");
  });
});
