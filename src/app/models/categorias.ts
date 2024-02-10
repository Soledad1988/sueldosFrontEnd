import { Convenio } from "./Convenio";

export class Categoria {
  idCategoria?: number;
  nombre?: string;
  monto?: number;
  descripcion?: string;
  convenio?: Convenio; // Relaciona Categoria con Convenio
}
