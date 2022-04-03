import { Component, ViewChild } from '@angular/core';
import { BudgetData, copyList, sum } from './budgetdata';
import { BudgetDataSourceService } from './budgetdatasource.service';
import { BudgetEntryEditorComponent } from './budgetentryeditor/budgetentryeditor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(BudgetEntryEditorComponent)
  private budgetEntryEditor!: BudgetEntryEditorComponent;

  data : BudgetData|null = null;

  constructor(private dataService: BudgetDataSourceService) {
    this.dataService.getOrLoad().then(data => this.data = data);
  }

  getSurplus(): number {
    return sum(this.data!.income) - sum(this.data!.expenses);
  }

  openIncomeEditor() {
    this.budgetEntryEditor.open('Income editor', copyList(this.data!.income));
  }

  openExpensesEditor() {
    this.budgetEntryEditor.open('Expenses editor', copyList(this.data!.expenses));
  }
}
