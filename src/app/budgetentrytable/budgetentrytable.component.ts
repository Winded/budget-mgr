import { Component, Input, OnInit } from '@angular/core';
import { BudgetEntry, sum } from '../budgetdata';

@Component({
  selector: 'app-budgetentrytable',
  templateUrl: './budgetentrytable.component.html',
  styleUrls: ['./budgetentrytable.component.css']
})
export class BudgetEntryTableComponent implements OnInit {
  @Input() data : Array<BudgetEntry> = [];

  constructor() { }

  ngOnInit(): void {
  }

  getTotal(): number {
    return sum(this.data);
  }

}
