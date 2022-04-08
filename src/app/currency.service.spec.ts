import { TestBed } from '@angular/core/testing';

import { CurrencyService, CurrencyType } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    window.localStorage.removeItem('Currency');
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyService);
  });

  it('should initially have no subscriptions', () => {
    expect(service.subscriptions.length).toBe(0);
  });

  it('should change currency type and invoke subscription', () => {
    let subscriptionCounter = 0;
    const subscriptionCallback = () => {
      subscriptionCounter++;
    };
    service.subscriptions.push(subscriptionCallback);

    expect(service.currencyType).toBe(CurrencyType.USD);
    service.currencyType = CurrencyType.EuroFinnish;
    expect(service.currencyType).toBe(CurrencyType.EuroFinnish);
    expect(subscriptionCounter).toBe(1);
  });

  it('should format amounts correctly', () => {
    expect(service.format(123)).toBe("$123");
    expect(service.format(1425156)).toBe("$1,425,156");
  });
});
