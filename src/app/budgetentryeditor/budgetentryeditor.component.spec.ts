import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntryEditorComponent } from './budgetentryeditor.component';

describe('BudgetentryeditorComponent', () => {
  let component: BudgetEntryEditorComponent;
  let fixture: ComponentFixture<BudgetEntryEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEntryEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetEntryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
