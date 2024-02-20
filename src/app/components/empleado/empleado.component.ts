import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from '../../model/empleado.model';

@Component({
  selector: 'empleado',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './empleado.component.html',
  styles: 
  `
  .paraDirectores{
    color: red;
    font-weight: bold;
    text-decoration: underline;
  }
  `
})

export class EmpleadoComponent{
  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;
  
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregaCaracteristicas(value: string) {
    this.caracteristicasEmpleados.emit(value);
  }
}
