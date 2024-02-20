import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-quienes-components',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quienes-components.component.html',
  styleUrl: './quienes-components.component.scss'
})
export class QuienesComponentsComponent {

  constructor(private router : Router){}

  volverHome(){
    this.router.navigate([''])
  }
}
