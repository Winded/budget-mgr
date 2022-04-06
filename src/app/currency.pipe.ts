import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from './currency.service';

@Pipe({
  name: 'currency',
  pure: false
})
export class CurrencyPipe implements PipeTransform {

  constructor(private _ref: ChangeDetectorRef, private currencyService: CurrencyService) {
    this.currencyService.subscriptions.push(() => this._ref.markForCheck());
  }

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.currencyService.format(value as number);
  }

}
