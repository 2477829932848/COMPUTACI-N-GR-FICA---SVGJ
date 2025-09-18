
import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-tel-comp',
    template: `
        <div class="card flex justify-center">
            <p-inputMask [(ngModel)]="value" mask="999/999/9999" placeholder="Teléfono"></p-inputMask>
        </div>
    `,
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskTelComp {
    value: string | undefined;
}