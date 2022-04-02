import { Component, ViewChild } from '@angular/core';
import { BudgetData, sum } from './budgetdata';
import { BudgetDataSourceService } from './budgetdatasource.service';
import { ModalContainerComponent } from './modalcontainer/modalcontainer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ModalContainerComponent)
  private modalContainer!: ModalContainerComponent;

  data : BudgetData|null = null;

  constructor(private dataService: BudgetDataSourceService) {
    this.dataService.getOrLoad().then(data => this.data = data);
  }

  getSurplus(): number {
    return sum(this.data!.income) - sum(this.data!.expenses);
  }

  openIncomeEditor() {
    this.modalContainer.open('Income editor');
  }
}
