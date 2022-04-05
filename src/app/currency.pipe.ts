import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from './currency.service';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  constructor(private currencyService: CurrencyService) {
  }

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.currencyService.format(value as number);
  }

}
