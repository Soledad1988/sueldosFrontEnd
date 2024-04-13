import { Colaborador } from "./colaborador";

export class Novedad {
  idNovedad?: number;
  periodo?: Date;
  vacaciones?: number;
  feriado?: number;
  inasistenciaJustificada?: number;
  inasistenciaInjustificada?: number;
  colaborador?: Colaborador;
}