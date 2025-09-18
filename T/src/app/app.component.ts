import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DatePickerComp } from './components/datepickercomp.component';
import { InputTextComp } from './components/inputtextcomp.component';
import {InputMaskTelComp} from './components/inputmaskcomp.component';
import { PasswordMeterComp } from './components/passwordcomp.component';
import { RadioButtonGeneroComp } from './components/radiobuttoncomp.component';
import { CheckboxComp } from './components/checkboxcomp.component';
import { ButtonComp } from './components/buttoncomp.component';
import { ToastComp } from './components/toastcomp.component';
import { MenubarTemplateComp } from './components/menucomponent.component';
import { SelectCityComp } from './components/selectcitycomp.component';

@Component({
  selector: 'app-root',

  imports: [RouterOutlet, 
    InputTextComp, 
    DatePickerComp, 
    InputMaskTelComp, 
    PasswordMeterComp, 
    RadioButtonGeneroComp,
    CheckboxComp,
    ButtonComp,
    ToastComp,
    MenubarTemplateComp,
    SelectCityComp

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'proyectoAngular';
  
}
