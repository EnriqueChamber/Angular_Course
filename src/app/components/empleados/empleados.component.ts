import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { EjemploComponent } from "../ejemplo/ejemplo.component";
import { Empleado } from "../../model/empleado.model";
import { EmpleadoComponent } from "../empleado/empleado.component";
import { ServicioEmpleadosService } from "../../services/empleados/servicio-empleados.service";

@Component({
    selector: 'empleados',
    standalone: true,
    templateUrl: './empleados.component.html',
    template: "<p>aquí iría un empleado</p>",
    styles: '',
    imports: [CommonModule, RouterOutlet, EjemploComponent, FormsModule, EmpleadoComponent],
    providers: [ServicioEmpleadosService]
})

export class EmpleadosComponent implements OnInit{

    empleadosAux : Empleado[] = [];

    constructor(private miServicio:ServicioEmpleadosService){ }

    ngOnInit(): void {
        this.empleadosAux = this.miServicio.empleados;
    }

    arrayCaracteristicas : string[] = [];

    agregaCaracteristica(nuevaCaracteristica: string) {
        this.arrayCaracteristicas.push(nuevaCaracteristica);
        //this.miServicio.muestraMensaje(nuevaCaracteristica);
        this.miServicio.agregarEmpreado(new Empleado("Nombre", nuevaCaracteristica, "cargoooo", 1234, false));
        this.empleadosAux = this.miServicio.empleados;
    }
}