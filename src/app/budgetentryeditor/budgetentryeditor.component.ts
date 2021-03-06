import { Component, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BudgetEntry, copyList } from '../budgetdata';
import { ModalContainerComponent } from '../modalcontainer/modalcontainer.component';

@Component({
  selector: 'app-budgetentryeditor',
  templateUrl: './budgetentryeditor.component.html',
  styleUrls: ['./budgetentryeditor.component.css']
})
export class BudgetEntryEditorComponent {
  @ViewChild(ModalContainerComponent)
  private _modalContainer!: ModalContainerComponent;

  private _onSave?: Subject<Array<BudgetEntry>>;

  entries: Array<BudgetEntry> = [];

  constructor() {}

  open(title: string, budgetEntryList: ReadonlyArray<BudgetEntry>): Observable<Array<BudgetEntry>> {
    this._modalContainer.title = title;
    this._modalContainer.visible = true;
    this.entries = copyList(budgetEntryList);

    this._onSave?.complete();
    this._onSave = new Subject<Array<BudgetEntry>>();
    return this._onSave;
  }

  moveUp(index: number) {
    if (index <= 0) {
      return;
    }

    let otherEntry = this.entries[index - 1];
    this.entries[index - 1] = this.entries[index];
    this.entries[index] = otherEntry;
  }

  moveDown(index: number) {
    if (index >= this.entries.length - 1) {
      return;
    }

    let otherEntry = this.entries[index + 1];
    this.entries[index + 1] = this.entries[index];
    this.entries[index] = otherEntry;
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

  save() : void {
    this._modalContainer.visible = false;
    if (this._onSave) {
      this._onSave.next(copyList(this.entries));
      this._onSave.complete();
    }
  }
}
