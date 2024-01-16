import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularLiquidacionComponent } from './calcular-liquidacion.component';

describe('CalcularLiquidacionComponent', () => {
  let component: CalcularLiquidacionComponent;
  let fixture: ComponentFixture<CalcularLiquidacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcularLiquidacionComponent]
    });
    fixture = TestBed.createComponent(CalcularLiquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
