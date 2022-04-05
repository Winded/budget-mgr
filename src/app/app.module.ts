import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BudgetEntryTableComponent } from './budgetentrytable/budgetentrytable.component';
import { ModalContainerComponent } from './modalcontainer/modalcontainer.component';
import { BudgetEntryEditorComponent } from './budgetentryeditor/budgetentryeditor.component';
import { FormsModule } from '@angular/forms';
import { NumberEditorModalComponent } from './numbereditormodal/numbereditormodal.component';
import { CurrencyPipe } from './currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BudgetEntryTableComponent,
    ModalContainerComponent,
    BudgetEntryEditorComponent,
    NumberEditorModalComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
