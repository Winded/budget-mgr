import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modalcontainer',
  templateUrl: './modalcontainer.component.html',
  styleUrls: []
})
export class ModalContainerComponent {
  @Input()
  visible: boolean = false;
  @Input()
  title: string = "Modal";

  @Output()
  onSave = new EventEmitter<void>();

  constructor() { }

  save() {
    this.onSave.emit();
  }

}
