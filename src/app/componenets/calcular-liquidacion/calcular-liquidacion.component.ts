import { Component, OnInit } from '@angular/core';
import { Liquidacion } from 'src/app/models/liquidacion';
import { LiquidacionService } from 'src/app/service/liquidacion.service';


@Component({
  selector: 'app-calcular-liquidacion',
  templateUrl: './calcular-liquidacion.component.html',
  styleUrls: ['./calcular-liquidacion.component.css']
})
export class CalcularLiquidacionComponent implements OnInit{

  liquidaciones: Liquidacion[] | undefined;

  constructor(private liquidacionService: LiquidacionService) { }

  ngOnInit(): void {
    this.obtenerLiquidaciones();
  }

  obtenerLiquidaciones(): void {
    this.liquidacionService.obtenerLiquidaciones()
      .subscribe(liquidaciones => this.liquidaciones = liquidaciones);
  }
  



}

function navigateToPreviousReceipt() {
  // Lógica para ir al recibo anterior
}

function navigateToNextReceipt() {
  // Lógica para ir al siguiente recibo
}

function acceptLiquidation() {
  // Lógica para aceptar la liquidación
}