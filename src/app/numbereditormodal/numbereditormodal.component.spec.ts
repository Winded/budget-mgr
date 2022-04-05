import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberEditorModalComponent } from './numbereditormodal.component';

describe('NumbereditormodalComponent', () => {
  let component: NumberEditorModalComponent;
  let fixture: ComponentFixture<NumberEditorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberEditorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
