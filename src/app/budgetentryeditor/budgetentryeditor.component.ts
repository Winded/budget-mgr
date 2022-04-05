import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BudgetEntry, copyList } from '../budgetdata';
import { ModalContainerComponent } from '../modalcontainer/modalcontainer.component';

@Component({
  selector: 'app-budgetentryeditor',
  templateUrl: './budgetentryeditor.component.html',
  styleUrls: ['./budgetentryeditor.component.css']
})
export class BudgetEntryEditorComponent implements AfterViewInit {
  @ViewChild(ModalContainerComponent)
  private modalContainer!: ModalContainerComponent;

  entries: Array<BudgetEntry> = [];

  onSave: CallableFunction = () => {};

  constructor() {}

  ngAfterViewInit(): void {
    this.modalContainer.onSave = () => this.save();
  }

  open(title: string, budgetEntryList: Array<BudgetEntry>): void {
    this.modalContainer.open(title);
    this.entries = budgetEntryList;
  }

  remove(index: number) {
    this.entries.splice(index, 1);
  }

  addEntry(): void {
    this.entries.push({
      name: "New entry",
      amount: 0,
    });
  }

  private save() : void {
    this.modalContainer.close();
    this.onSave();
  }
}
