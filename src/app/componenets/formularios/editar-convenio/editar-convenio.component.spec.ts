import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConvenioComponent } from './editar-convenio.component';

describe('EditarConvenioComponent', () => {
  let component: EditarConvenioComponent;
  let fixture: ComponentFixture<EditarConvenioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConvenioComponent]
    });
    fixture = TestBed.createComponent(EditarConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
