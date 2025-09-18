import { Component, OnInit } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'radio-button-genero',
  template: `<div class="card flex justify-center">
    <div class="flex flex-wrap gap-4">
        <div class="flex items-center">
            <p-radiobutton name="genero" value="Femenino" [(ngModel)]="genero" inputId="genero1" />
            <label for="genero1" class="ml-2">Femenino</label>
        </div>

        <div class="flex items-center">
            <p-radiobutton name="genero" value="Masculino" [(ngModel)]="genero" inputId="genero2" />
            <label for="genero2" class="ml-2">Masculino</label>
        </div>

    </div>
</div>
    
  `,
  standalone: true,
  imports: [FormsModule, RadioButton]
})
export class RadioButtonGeneroComp {
    genero!: string;
}