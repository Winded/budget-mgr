import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BudgetData, copyList, sum } from './budgetdata';
import { BudgetDataSourceService } from './budgetdatasource.service';
import { BudgetEntryEditorComponent } from './budgetentryeditor/budgetentryeditor.component';

enum BudgetEditorType {
  Income,
  Expenses,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(BudgetEntryEditorComponent)
  private budgetEntryEditor!: BudgetEntryEditorComponent;

  data : BudgetData|null = null;

  private budgetEditorType: BudgetEditorType = BudgetEditorType.Income;

  constructor(private dataService: BudgetDataSourceService) {
    this.dataService.getOrLoad().then(data => this.data = data);
  }

  ngAfterViewInit(): void {
    this.budgetEntryEditor.onSave = () => this.onBudgetEditorSave();
  }

  getSurplus(): number {
    return sum(this.data!.income) - sum(this.data!.expenses);
  }

  openIncomeEditor() {
    this.budgetEntryEditor.open('Income editor', copyList(this.data!.income));
    this.budgetEditorType = BudgetEditorType.Income;
  }

  openExpensesEditor() {
    this.budgetEntryEditor.open('Expenses editor', copyList(this.data!.expenses));
    this.budgetEditorType = BudgetEditorType.Expenses;
  }

  private onBudgetEditorSave(): void {
    let entries = copyList(this.budgetEntryEditor.entries);
    if (this.budgetEditorType == BudgetEditorType.Income) {
      this.data!.income = entries;
    } else if (this.budgetEditorType == BudgetEditorType.Expenses) {
      this.data!.expenses = entries;
    }
    this.dataService.save();
  }
}
