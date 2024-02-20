import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from "../empleados/empleados.component";
import { HomeComponentComponent } from '../home-component/home-component.component';
import { QuienesComponentsComponent } from '../quienes-components/quienes-components.component';
import { ContactoComponentComponent } from '../contacto-component/contacto-component.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component2.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, EmpleadosComponent, HomeComponentComponent, QuienesComponentsComponent, ContactoComponentComponent]
})
export class AppComponent implements OnInit{
  title = 'my-app';
  saludo = "Hola que tal";


  ngOnInit(): void {
    let apikey = 'askjdfhsdljfghjdsñoifj';
    let authDomain = 'urlFirebase o del servicio de autenticación'
    //inicializar app
  }
}
