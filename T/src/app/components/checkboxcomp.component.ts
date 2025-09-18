import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-comp',
    template: `
    <div class="card flex justify-content-center">
        <p-checkbox name="acepted" value="true" [(ngModel)]="checked" binary="true">
    
        </p-checkbox> ¡ Aceptar terminos y condiciones !
    </div>
    `,
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxComp {
    checked: boolean = false;
}