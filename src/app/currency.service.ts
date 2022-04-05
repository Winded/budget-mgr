import { Injectable } from '@angular/core';

export enum CurrencyType {
  USD,
  EuroFinnish,
}

export const currencyTypeNames = {
  [CurrencyType.USD]: "USD",
  [CurrencyType.EuroFinnish]: "Euro (Finnish)",
};

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private _currencyType: CurrencyType = CurrencyType.USD;

  constructor() {
    const savedCurrencyType = window.localStorage.getItem('Currency');
    if (savedCurrencyType) {
      this._currencyType = parseInt(savedCurrencyType);
    }
  }

  get currencyType(): CurrencyType {
    return this._currencyType;
  }

  set currencyType(newType: CurrencyType) {
    this._currencyType = newType;
    window.localStorage.setItem('Currency', this._currencyType.toString());
  }

  format(amount: number): string {
    switch (this._currencyType) {
      case CurrencyType.USD:
        return "$" + this.addThousandSeparator(amount, ',');
      case CurrencyType.EuroFinnish:
        return this.addThousandSeparator(amount, ' ') + " €";
      default:
        return amount.toString();
    }
  }

  private addThousandSeparator(value: number, separator: string): string {
    let strValue = value.toString();
    let result = '';
    for (let i = 0; i < strValue.length; i++) {
      result += strValue[i];
      let charactersLeft = (strValue.length - i - 1);
      if (charactersLeft > 0 && charactersLeft % 3 == 0) {
        result += separator;
      }
    }
    return result;
  }
}
