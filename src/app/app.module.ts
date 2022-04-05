import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BudgetEntryTableComponent } from './budgetentrytable/budgetentrytable.component';
import { ModalContainerComponent } from './modalcontainer/modalcontainer.component';
import { BudgetEntryEditorComponent } from './budgetentryeditor/budgetentryeditor.component';
import { FormsModule } from '@angular/forms';
import { NumberEditorModalComponent } from './numbereditormodal/numbereditormodal.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetEntryTableComponent,
    ModalContainerComponent,
    BudgetEntryEditorComponent,
    NumberEditorModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
