import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BudgetData, copyList, sum } from './budgetdata';
import { BudgetDataSourceService } from './budgetdatasource.service';
import { BudgetEntryEditorComponent } from './budgetentryeditor/budgetentryeditor.component';
import { CurrencyService } from './currency.service';
import { NumberEditorModalComponent } from './numbereditormodal/numbereditormodal.component';

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
  @ViewChild(NumberEditorModalComponent)
  private numberEditor!: NumberEditorModalComponent;

  data : BudgetData|null = null;

  constructor(private dataService: BudgetDataSourceService) {
    this.dataService.getOrLoad().then(data => this.data = data);
  }

  ngAfterViewInit(): void {
  }

  getSurplus(): number {
    return sum(this.data!.income) - sum(this.data!.expenses);
  }

  openIncomeEditor() {
    this.budgetEntryEditor.open(
      'Income editor',
      copyList(this.data!.income),
      () => this.onBudgetEditorSave(BudgetEditorType.Income)
    );
  }

  openExpensesEditor() {
    this.budgetEntryEditor.open(
      'Expenses editor',
      copyList(this.data!.expenses),
      () => this.onBudgetEditorSave(BudgetEditorType.Expenses)
    );
  }

  openBalanceEditor() {
    this.numberEditor.open(
      'Edit balance',
      this.data!.balance,
      () => {
        this.data!.balance = this.numberEditor.value;
        this.dataService.save();
      }
    );
  }

  openEmergencyBufferEditor() {
    this.numberEditor.open(
      'Edit emergency buffer',
      this.data!.emergencyBuffer,
      () => {
        this.data!.emergencyBuffer = this.numberEditor.value;
        this.dataService.save();
      }
    );
  }

  private onBudgetEditorSave(editorType: BudgetEditorType): void {
    let entries = copyList(this.budgetEntryEditor.entries);
    if (editorType == BudgetEditorType.Income) {
      this.data!.income = entries;
    } else if (editorType == BudgetEditorType.Expenses) {
      this.data!.expenses = entries;
    }
    this.dataService.save();
  }
}
