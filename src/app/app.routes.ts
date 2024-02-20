import { Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { QuienesComponentsComponent } from './components/quienes-components/quienes-components.component';
import { ContactoComponentComponent } from './components/contacto-component/contacto-component.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:'', component:HomeComponentComponent},
    {path:'empleados', component:EmpleadosComponent},
    {path:'quienes', component:QuienesComponentsComponent},
    {path:'contacto', component:ContactoComponentComponent},
    {path:'contacto/:id', component:ContactoComponentComponent},
    {path:'**', component:NotFoundComponent},
    {path:'login', component:LoginComponent}
];
