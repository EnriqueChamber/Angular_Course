import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ServicioAuxiliarService{

    constructor(){}

    muestraMensaje(mensaje:string){
        alert(mensaje);
    }
}