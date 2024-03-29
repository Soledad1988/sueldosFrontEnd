export interface Liquidacion {
  idLiquidacion?: number;
  fecha?: string;
  antiguedad?: number;
  otros?: number;
  sueldoBruto?: number;
  sueldoNeto?: number;
  colaborador?: {
    id?: number; // Asegúrate de que coincida con el campo 'id' del colaborador
    nombre?: string;
    apellido?: string; // Agrega el campo 'apellido' si es necesario
    dni?: string;
    cuit?: string;
    nacimiento?: string;
    edad?: number;
    direccion?: string;
    fecha_ingreso?: string;
    activo?: boolean;
    categoria?: {
      idCategoria?: number;
      nombre?: string;
      sueldoBasico?: number;
      descripcion?: string;
      convenio?: {
        idConvenio?: number;
        numero?: string;
        nombre?: string;
      };
    };
    obraSocial?: {
      idObraSocial?: number;
      nombre?: string;
      codigo?: number;
    };
  };

}
