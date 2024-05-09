import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarObrasocialComponent } from './editar-obrasocial.component';

describe('EditarObrasocialComponent', () => {
  let component: EditarObrasocialComponent;
  let fixture: ComponentFixture<EditarObrasocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarObrasocialComponent]
    });
    fixture = TestBed.createComponent(EditarObrasocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
