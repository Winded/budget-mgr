import { ChangeDetectorRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CurrencyPipe } from './currency.pipe';
import { CurrencyChangeCallback, CurrencyService } from './currency.service';

describe('CurrencyPipe', () => {
  const currencyServiceSubs: Array<CurrencyChangeCallback> = [];
  const currencyService = jasmine.createSpyObj<CurrencyService>([
    'format',
  ], {
    subscriptions: currencyServiceSubs,
  });
  let pipe: CurrencyPipe;

  beforeEach(() => {
    while (currencyServiceSubs.length > 0) {
      currencyServiceSubs.pop();
    }
    TestBed.configureTestingModule({
      providers: [
        CurrencyPipe,
        { provide: CurrencyService, useValue: currencyService },
        ChangeDetectorRef
      ],
    });
    pipe = TestBed.inject(CurrencyPipe);
  });

  it('should have subscribed to currency change events', () => {
    expect(currencyServiceSubs.length).toBe(1);
  });

  it('should call format when pipe transform is invoked', () => {
    currencyService.format.and.callFake(amount => amount.toString());

    expect(pipe.transform(123)).toBe("123");
    expect(pipe.transform("123")).toBe("123");
  });
});
