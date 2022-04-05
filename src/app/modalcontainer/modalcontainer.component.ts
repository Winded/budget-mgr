import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalcontainer',
  templateUrl: './modalcontainer.component.html',
  styleUrls: ['./modalcontainer.component.css']
})
export class ModalContainerComponent {
  onSave : CallableFunction = () => {};

  private _visible: boolean = false;
  private _title: string = "Modal";

  constructor() { }

  get visible() {
    return this._visible;
  }
  get title() {
    return this._title;
  }

  open(title: string) {
    this._visible = true;
    this._title = title;
  }

  close() {
    this._visible = false;
  }

  save() {
    this.onSave();
  }

}
