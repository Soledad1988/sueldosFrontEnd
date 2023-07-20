import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoColaboradorComponent } from './nuevo-colaborador.component';

describe('NuevoColaboradorComponent', () => {
  let component: NuevoColaboradorComponent;
  let fixture: ComponentFixture<NuevoColaboradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoColaboradorComponent]
    });
    fixture = TestBed.createComponent(NuevoColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
