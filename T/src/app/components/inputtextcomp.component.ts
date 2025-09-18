import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
    selector: 'input-text-comp',
    template: `
    <p-floatlabel>
        <input pInputText id="over_label" [(ngModel)]="value" autocomplete="off" />
        <label for="over_label">{{ pInputText }}</label>
    </p-floatlabel>
    `,
    standalone: true,
    imports: [FormsModule, InputTextModule, FloatLabel]
})
export class InputTextComp {
    value: string = '';
    @Input() pInputText: string = '';
}