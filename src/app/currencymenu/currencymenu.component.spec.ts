import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyService, CurrencyType } from '../currency.service';

import { CurrencyMenuComponent } from './currencymenu.component';

describe('CurrencymenuComponent', () => {
  const currencyService = jasmine.createSpyObj<CurrencyService>([], {
    currencyType: CurrencyType.USD,
  });

  let component: CurrencyMenuComponent;
  let fixture: ComponentFixture<CurrencyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyMenuComponent ],
      providers: [
        { provide: CurrencyService, useValue: currencyService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have initial currency type text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')!.innerHTML.trim()).toBe('USD');
  });

  it('should open dropdown when clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.dropdown-menu')).toBe(null);
    compiled.querySelector<HTMLLinkElement>('a')!.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.dropdown-menu')).not.toBe(null);
  });

  it('should change currency when menu option is clicked', () => {
    let currencyType = CurrencyType.USD;
    const descriptor = Object.getOwnPropertyDescriptor(currencyService, 'currencyType')!;
    (descriptor.get as jasmine.Spy<() => CurrencyType>).and.callFake(() => currencyType);
    (descriptor.set as jasmine.Spy<(currency: CurrencyType) => void>).and.callFake((currency) => currencyType = currency);

    expect(currencyService.currencyType).toBe(CurrencyType.USD);
    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelector<HTMLLinkElement>('a')!.click();
    fixture.detectChanges();
    compiled.querySelectorAll<HTMLLinkElement>('a')[2]!.click();
    fixture.detectChanges();
    expect(component.visible).toBe(false);
    expect(currencyService.currencyType).toBe(CurrencyType.EuroFinnish);
  });
});
