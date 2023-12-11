import { Convenio } from "./Convenio";

export class Colaborador{
    id?:number;
    nombre?:String;
    apellido?:String;
    dni?:String;
    nacimiento?:String;
    edad?:number;
    direccion?:String;
    activo?:Boolean;
    convenio?:Convenio;
}