import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { PrimeraparteComponent } from './primera-parte/tabla.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MiComponenteComponent, PrimeraparteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto_angular_saraguevara';
}
