import { Colaborador } from "./colaborador";

export class Novedad {
  idNovedad?: number;
  vacaciones?: number;
  feriado?: number;
  inasistenciaJustificada?: number;
  inasistenciaInjustificada?: number;
  colaborador?: Colaborador;
}