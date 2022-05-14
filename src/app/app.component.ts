import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BudgetData, sum } from './budgetdata';
import { BudgetDataSourceService } from './budgetdatasource.service';
import { BudgetEntryEditorComponent } from './budgetentryeditor/budgetentryeditor.component';
import { NumberEditorModalComponent } from './numbereditormodal/numbereditormodal.component';

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
    this.budgetEntryEditor.open('Income editor', this.data!.income).subscribe(data => {
      this.data!.income = data;
      this.dataService.save();
    });
  }

  openExpensesEditor() {
    this.budgetEntryEditor.open('Expenses editor', this.data!.expenses).subscribe(data => {
      this.data!.expenses = data;
      this.dataService.save();
    });
  }

  openBalanceEditor() {
    this.numberEditor.open('Edit balance', this.data!.balance).subscribe(value => {
      this.data!.balance = value;
      this.dataService.save();
    });
  }

  openEmergencyBufferEditor() {
    this.numberEditor.open('Edit emergency buffer', this.data!.emergencyBuffer).subscribe(value => {
      this.data!.emergencyBuffer = value;
      this.dataService.save();
    });
  }
}
