import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntryTableComponent } from './budgetentrytable.component';

describe('BudgetEntryTableComponent', () => {
  let component: BudgetEntryTableComponent;
  let fixture: ComponentFixture<BudgetEntryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEntryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetEntryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
