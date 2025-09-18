import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-meter-comp',
    template: ` 
        <div class="card flex justify-center">
            <p-password [(ngModel)]="value" [toggleMask]="true" placeholder="Contraseña"></p-password>
        </div>
    `,
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordMeterComp {
    value!: string;
}