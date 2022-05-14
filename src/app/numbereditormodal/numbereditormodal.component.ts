import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalContainerComponent } from '../modalcontainer/modalcontainer.component';

@Component({
  selector: 'app-numbereditormodal',
  templateUrl: './numbereditormodal.component.html',
  styleUrls: []
})
export class NumberEditorModalComponent {
  private _title = "";
  private _visible = false;

  private _onSave?: Subject<number>;

  value: number = 0;

  constructor() { }

  get visible(): boolean {
    return this._visible;
  }

  get title(): string {
    return this._title;
  }

  open(title: string, value: number): Observable<number> {
    this._title = title;
    this._visible = true;
    this.value = value;

    this._onSave?.complete();
    this._onSave = new Subject<number>();
    return this._onSave;
  }

  save() : void {
    this._visible = false;
    if (this._onSave) {
      this._onSave.next(this.value);
      this._onSave.complete();
    }
  }

}
