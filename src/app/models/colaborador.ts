import { ObraSocial } from "./ObraSocial";
import { Categoria } from "./categorias";

export class Colaborador{
    id?:number;
    nombre?:String;
    apellido?:String;
    dni?:String;
    cuit?:String;
    nacimiento?:Date;
    edad?:number;
    direccion?:String;
    fecha_ingreso?:Date;
    activo?:Boolean;
    categoria?:Categoria;
    obraSocial?: ObraSocial;
}