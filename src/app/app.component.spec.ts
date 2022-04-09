import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BudgetData } from './budgetdata';
import { BudgetDataSourceService } from './budgetdatasource.service';
import { CurrencyPipe } from './currency.pipe';

describe('AppComponent', () => {
  const budgetData: BudgetData = {
    balance: 2000,
    emergencyBuffer: 1000,
    income: [
      {
        name: "Test income",
        amount: 100,
      }
    ],
    expenses: [
      {
        name: "Test expense",
        amount: 90,
      }
    ]
  };
  const budgetDataSource = jasmine.createSpyObj<BudgetDataSourceService>([
    'getOrLoad',
    'save'
  ], []);

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    budgetDataSource.getOrLoad.and.returnValue(new Promise((resolve, reject) => resolve(budgetData)));
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CurrencyPipe
      ],
      providers: [
        { provide: BudgetDataSourceService, useValue: budgetDataSource },
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should load budget data when created', () => {
    expect(component.data).toEqual(budgetData);
  });

  it('should calculate correct surplus', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.row .col-sm-9')?.innerHTML).toEqual("$10");
  });
});
