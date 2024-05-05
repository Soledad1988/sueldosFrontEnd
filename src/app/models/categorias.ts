import { Convenio } from "./Convenio";

export class Categoria {
  idCategoria?: number;
  nombre?: string;
  sueldoBasico?: number;
  descripcion?: string;
  convenio?: Convenio; // Relaciona Categoria con Convenio
}
