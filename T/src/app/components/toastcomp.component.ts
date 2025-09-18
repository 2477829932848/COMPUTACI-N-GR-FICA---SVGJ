import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'toast-comp',
  standalone: true,
  imports: [ToastModule, ButtonModule, RippleModule],
  providers: [MessageService],
  template: `
    <div class="card">
      <p-toast position="bottom-right" key="br" />
      <div class="botones">
        <p-button (onClick)="showRegistrar()" label="Registrar" />
        <p-button (onClick)="showAcercaDe()" label="Acerca de" />
      </div>
    </div>
  `,
  styles: [`
    .botones {
      display: flex;
      flex-direction: column;
      gap: 1rem; /* espacio entre botones */
      align-items: center;
    }
  `]
})
export class ToastComp {
  constructor(private messageService: MessageService) {}

  showRegistrar() {
    this.messageService.add({
      severity: 'success',
      summary: 'Usuario Registrado',
      detail: 'El usuario ha sido registrado con éxito',
      key: 'br',
      life: 3000
    });
  }

  showAcercaDe() {
    this.messageService.add({
      severity: 'info',
      summary: 'Acerca de',
      detail: 'Esta aplicación fue desarrollada con Angular y PrimeNG',
      key: 'br',
      life: 3000
    });
  }
}