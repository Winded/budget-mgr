import { Component, OnInit, ViewChild } from '@angular/core';
import { BudgetEntry } from '../budgetdata';
import { ModalContainerComponent } from '../modalcontainer/modalcontainer.component';

@Component({
  selector: 'app-budgetentryeditor',
  templateUrl: './budgetentryeditor.component.html',
  styleUrls: ['./budgetentryeditor.component.css']
})
export class BudgetEntryEditorComponent {
  @ViewChild(ModalContainerComponent)
  private modalContainer!: ModalContainerComponent;

  entries: Array<BudgetEntry>|null = null;

  constructor() {}

  open(title: string, budgetEntryList: Array<BudgetEntry>): void {
    this.modalContainer.open(title);
    this.entries = budgetEntryList;
  }

  remove(index: number) {
    this.entries?.splice(index, 1);
  }

  addEntry(): void {
    this.entries?.push({
      name: "New entry",
      amount: 0,
    });
  }
}
