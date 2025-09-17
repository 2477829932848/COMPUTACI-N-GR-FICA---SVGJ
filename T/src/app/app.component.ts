import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { MiComponenteComponent } from "./micomponente/micomponente.component";
import { MenuComponent } from './micomponente/menucomponent.component';
import { SplitButtonBasicDemo } from './micomponente/splittbuttoncomponente.component';


@Component({
  selector: 'app-root',

  imports: [RouterOutlet, Toast, ButtonModule, MiComponenteComponent, MenuComponent, SplitButtonBasicDemo],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'proyectoAngular';
  constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
    }
}
