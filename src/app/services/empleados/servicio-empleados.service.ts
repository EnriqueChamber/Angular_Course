import { Injectable } from '@angular/core';
import { Empleado } from '../../model/empleado.model';
import { ServicioAuxiliarService } from '../auxiliar/servicio-auxiliar.service';

@Injectable() // sin providedIn definido, hay que definir el provider en los @NgModule, @Component o @Directive
export class ServicioEmpleadosService {

  empleados : Empleado[] = [

    new Empleado("Juan", "Días", "Presidente", 7500, true),
    new Empleado("Yolanda", "Díaz Mejor", "VicePresidenta", 500, false),
    new Empleado("Gimena", "Semanas", "ViceAlgo", 6000, false),
    new Empleado("Raul", "Meses", "Algo", 5300, true),
    new Empleado("hola")
  ];

  constructor(private servicioAuxiliar : ServicioAuxiliarService) { }

  agregarEmpreado(empleado:Empleado){
    this.empleados.push(empleado);
    this.servicioAuxiliar.muestraMensaje(empleado.apellido.toString());
  }

}
