import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../../model/empleado.model';
import { ServicioEmpleadosService } from '../../services/empleados/servicio-empleados.service';

@Component({
  selector: 'app-contacto-component',
  standalone: true,
  imports: [],
  templateUrl: './contacto-component.component.html',
  styleUrl: './contacto-component.component.scss',
  providers: [ServicioEmpleadosService]
})
export class ContactoComponentComponent implements OnInit {

  indice : Number;
  empleado : Empleado;
  constructor(private servicioEmpleado : ServicioEmpleadosService, private route : ActivatedRoute){ }

  ngOnInit(): void {
    
    this.indice = this.route.snapshot.params['id'];
    console.log("indice = " + this.indice);
    this.empleado = this.servicioEmpleado.empleados[this.indice.valueOf()];
  }
}
