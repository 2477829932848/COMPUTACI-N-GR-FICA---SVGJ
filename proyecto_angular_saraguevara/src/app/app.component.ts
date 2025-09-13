import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { PrimeraparteComponent } from './primera-parte/tabla.component';
import { Punto2Component } from './segunda-parte/punto2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MiComponenteComponent, PrimeraparteComponent, Punto2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto_angular_saraguevara';
}
