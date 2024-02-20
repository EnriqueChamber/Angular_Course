import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../../model/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient) { }

  actualizaEmpleados(empleado:Empleado){
    this.httpClient.post('url', empleado) // devuelve un observable
    .subscribe( {
      next: (value) => console.log("Se han guardado los empleados: " + value),
      error: (error) => console.error("Error: " + error),
      complete: () => console.info('complete') 
    })
  }

  insertaEmpleado(empleado:Empleado){
    return this.httpClient.put("url", empleado);
  }
  
  obtenerEmpleados(empleados:Empleado[]) : Empleado{
    let result : Empleado = new Empleado();
    let observable = this.httpClient.get('url')// devuelve un observable
    observable.subscribe(
        empleados=>{
          Object.assign(result, empleados);
        }
      )
    return result;
  }
}
