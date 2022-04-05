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

  private onSave: CallableFunction = () => {};

  entries: Array<BudgetEntry> = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.modalContainer.onSave = () => this.save();
  }

  open(title: string, budgetEntryList: Array<BudgetEntry>, onSave: CallableFunction): void {
    this.modalContainer.open(title);
    this.entries = budgetEntryList;
    this.onSave = onSave;
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
