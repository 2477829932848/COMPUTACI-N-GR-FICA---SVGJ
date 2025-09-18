
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-comp',
    template: `
        <div class="card flex justify-content-center">
            <p-button label="Registrar" [raised]="true" severity="success" />
        </div>
    `,
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonComp { }