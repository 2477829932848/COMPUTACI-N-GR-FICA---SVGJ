import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'datepicker-comp',
  template: `
    <div class="flex flex-col gap-3 p-4">

      <p-datepicker
        [(ngModel)]="date1"
        [showIcon]="true"
        inputId="buttondisplay"
        [showOnFocus]="false"
        placeholder="Selecciona una fecha"
      />

    </div>
  `,
  standalone: true,
  imports: [DatePickerModule, FormsModule, FluidModule, ButtonModule],
})
export class DatePickerComp {
  date1: Date | undefined;
}