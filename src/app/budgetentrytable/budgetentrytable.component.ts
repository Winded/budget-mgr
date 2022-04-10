import { Component, Input, OnInit } from '@angular/core';
import { BudgetEntry, sum } from '../budgetdata';

@Component({
  selector: 'app-budgetentrytable',
  templateUrl: './budgetentrytable.component.html',
  styleUrls: []
})
export class BudgetEntryTableComponent {
  @Input() data : Array<BudgetEntry> = [];

  constructor() { }

  getTotal(): number {
    return sum(this.data);
  }

}
