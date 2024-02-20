import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-ejemplo',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './ejemplo.component.html', // Predominante
  template:"<p>aquí iría un empleado</p>",
  styleUrl: './ejemplo.component.scss',
  styles:["p{background-color: coral; color:darkblue;}"] // Predominante
})

export class EjemploComponent {
  nombre = "Juan";
  apellido = "Díaz";
  private edad = 23;
  empresa = "CEDOCO";

  registro = false;

  // Otra forma de notación definiendo el tipo de dato. Ver documentación
  genero : number = 0;

  entradas;
  //entradas: object[];

  constructor(){
    this.entradas = [// Notación Json
      { titulo:"Python cada día más presente" },
      { titulo:"JAva presente desde hace tiempo" },
      { titulo:"Microsoft la chupa" },
      { titulo:"Ojalá Microsoft no monopolice" }
    ]
  }

  getEdad():number{
    return this.edad;
  }

  llamaEmpresa(value:string):void{

  }

  setRegistrado():void{
    alert("Acabas de registrarte");
    this.registro = true;
  }

  setGenero(event:MouseEvent):void{
    var tipo = parseInt((<HTMLInputElement>event.target).value)
    if(tipo == 1){
      this.registro = true;
    }
    else{
      this.registro = false;
    }
    alert("Acabas de cambiar de género a: " + tipo);
  }

  cambiaNombre(event:Event):void{
    this.nombre = (<HTMLInputElement>event.target).value;
  }

}
