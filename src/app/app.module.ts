import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BudgetEntryTableComponent } from './budgetentrytable/budgetentrytable.component';
import { ModalContainerComponent } from './modalcontainer/modalcontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetEntryTableComponent,
    ModalContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
