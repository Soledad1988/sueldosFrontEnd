import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaLiquidacionComponent } from './nueva-liquidacion.component';

describe('NuevaLiquidacionComponent', () => {
  let component: NuevaLiquidacionComponent;
  let fixture: ComponentFixture<NuevaLiquidacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaLiquidacionComponent]
    });
    fixture = TestBed.createComponent(NuevaLiquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
