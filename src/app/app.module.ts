import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BudgetEntryTableComponent } from './budgetentrytable/budgetentrytable.component';
import { ModalContainerComponent } from './modalcontainer/modalcontainer.component';
import { BudgetEntryEditorComponent } from './budgetentryeditor/budgetentryeditor.component';
import { FormsModule } from '@angular/forms';
import { NumberEditorModalComponent } from './numbereditormodal/numbereditormodal.component';
import { CurrencyPipe } from './currency.pipe';
import { CurrencyMenuComponent } from './currencymenu/currencymenu.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BudgetEntryTableComponent,
    ModalContainerComponent,
    BudgetEntryEditorComponent,
    NumberEditorModalComponent,
    CurrencyPipe,
    CurrencyMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/budget-mgr/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
