import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyMenuComponent } from './currencymenu.component';

describe('CurrencymenuComponent', () => {
  let component: CurrencyMenuComponent;
  let fixture: ComponentFixture<CurrencyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
