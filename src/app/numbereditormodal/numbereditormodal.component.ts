import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalContainerComponent } from '../modalcontainer/modalcontainer.component';

@Component({
  selector: 'app-numbereditormodal',
  templateUrl: './numbereditormodal.component.html',
  styleUrls: []
})
export class NumberEditorModalComponent implements AfterViewInit {
  @ViewChild(ModalContainerComponent)
  private modalContainer!: ModalContainerComponent;

  private onSave: () => void = () => {};

  value: number = 0;

  constructor() { }

  ngAfterViewInit(): void {
    this.modalContainer.onSave = () => this.save();
  }

  open(title: string, value: number, onSave: () => void) {
    this.modalContainer.open(title);
    this.value = value;
    this.onSave = onSave;
  }

  private save() : void {
    this.modalContainer.close();
    this.onSave();
  }

}
