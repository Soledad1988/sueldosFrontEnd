import { Convenio } from "./Convenio";

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
    convenio?:Convenio;
}