import { Component, OnInit } from '@angular/core';
import { CurrencyService, CurrencyType } from '../currency.service';

interface CurrencyOption {
  name: string;
  value: CurrencyType;
}

@Component({
  selector: 'app-currencymenu',
  templateUrl: './currencymenu.component.html',
  styleUrls: []
})
export class CurrencyMenuComponent {
  currencyOptions: Array<CurrencyOption> = [
    {
      name: "USD",
      value: CurrencyType.USD,
    },
    {
      name: "Euro (Finnish)",
      value: CurrencyType.EuroFinnish,
    },
  ];

  visible: boolean = false;

  constructor(public currencyService: CurrencyService) {
  }

  get currentCurrency(): string {
    let currencyType = this.currencyService.currencyType;
    for (let option of this.currencyOptions) {
      if (option.value == currencyType) {
        return option.name;
      }
    }

    return '(Select currency)';
  }

  select(currency: CurrencyType) {
    this.currencyService.currencyType = currency;
    this.visible = false;
  }
}
