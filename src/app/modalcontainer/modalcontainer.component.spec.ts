import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { ModalContainerComponent } from './modalcontainer.component';

describe('ModalContainerComponent', () => {
  let component: ModalContainerComponent;
  let fixture: ComponentFixture<ModalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be hidden by default', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.modal')!.getAttribute('style')).toBe('display: none;');
  });

  it('should be shown when opened', () => {
    component.title = "Test";
    component.visible = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.modal')!.getAttribute('style')).toBe('display: block;');
    expect(compiled.querySelector('.modal-title')!.innerHTML).toBe('Test');
  });

  it('should close when close is pressed', () => {
    component.title = "Test";
    component.visible = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.modal')!.getAttribute('style')).toBe('display: block;');
    (compiled.querySelector('.btn-secondary') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(component.visible).toBe(false);
    expect(compiled.querySelector('.modal')!.getAttribute('style')).toBe('display: none;');
  });

  it('should call onSave when save is pressed', () => {
    fakeAsync(() => {
      component.onSave.subscribe(() => expect());
      component.title = "Test";
      component.visible = true;
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.modal')!.getAttribute('style')).toBe('display: block;');
      compiled.querySelector<HTMLButtonElement>('.btn-primary')!.click();
      fixture.detectChanges();
    });
  });
});
