export class Empleado{
    public nombre:string;
    public apellido:string; 
    public cargo:string;
    public salario:number; 
    public habilitado:boolean;

    constructor(
        nombre?:string, 
        apellido?:string, 
        cargo?:string, 
        salario?:number, 
        habilitado?:boolean){

            this.nombre = nombre? nombre : "";
            this.apellido = apellido? apellido : "";
            this.cargo = cargo? cargo : "";
            this.salario = salario? salario : 0;
            this.habilitado = habilitado? habilitado : false;
    }

}