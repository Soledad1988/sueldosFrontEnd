import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaNovedadComponent } from './nueva-novedad.component';

describe('NuevaNovedadComponent', () => {
  let component: NuevaNovedadComponent;
  let fixture: ComponentFixture<NuevaNovedadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaNovedadComponent]
    });
    fixture = TestBed.createComponent(NuevaNovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
