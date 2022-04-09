import { Injectable } from '@angular/core';
import { BudgetData } from './budgetdata';

@Injectable({
  providedIn: 'root'
})
export class BudgetDataSourceService {
  private data : BudgetData|null = null;

  constructor() {
  }

  public async getOrLoad() : Promise<BudgetData> {
    if (this.data != null) {
      return this.data;
    }

    let json = window.localStorage.getItem('BudgetData');
    if (json == null) {
      this.data = {
        balance: 2000,
        emergencyBuffer: 1000,
        income: [
          { name: "Salary", amount: 1000 },
        ],
        expenses: [
          { name: "Rent", amount: 750 },
          { name: "Groceries", amount: 400 },
        ],
      };
      return this.data;
    }

    this.data = JSON.parse(json);
    return this.data!;
  }

  public async save() : Promise<void> {
    let json = JSON.stringify(this.data);
    window.localStorage.setItem('BudgetData', json);
  }
}
