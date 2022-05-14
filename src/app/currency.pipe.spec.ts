import { ChangeDetectorRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { CurrencyPipe } from './currency.pipe';
import { CurrencyChangeCallback, CurrencyService, CurrencyType } from './currency.service';

describe('CurrencyPipe', () => {
  let changeInvoked = false;
  let currencyService: Partial<CurrencyService>;
  let changeDetectorRef: Partial<ChangeDetectorRef>;
  let pipe: CurrencyPipe;

  beforeEach(() => {
    changeInvoked = false;
    currencyService = <Partial<CurrencyService>>{
      format(amount) {
        return amount.toString();
      },
      onCurrencyChange: new Subject<CurrencyType>(),
    };
    changeDetectorRef = <Partial<ChangeDetectorRef>>{
      markForCheck: () => changeInvoked = true,
    };
    TestBed.configureTestingModule({
      providers: [
        CurrencyPipe,
        { provide: CurrencyService, useValue: currencyService },
        { provide: ChangeDetectorRef, useValue: changeDetectorRef },
      ],
    });
    pipe = TestBed.inject(CurrencyPipe);
  });

  it('should have subscribed to currency change events', () => {
    expect(changeInvoked).toBe(false);
    (<Subject<CurrencyType>>currencyService.onCurrencyChange).next(CurrencyType.USD);
    expect(changeInvoked).toBe(true);
  });

  it('should call format when pipe transform is invoked', () => {
    expect(pipe.transform(123)).toBe("123");
    expect(pipe.transform("123")).toBe("123");
  });
});
