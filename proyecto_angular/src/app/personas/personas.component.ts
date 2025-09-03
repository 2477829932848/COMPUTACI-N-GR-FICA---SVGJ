import { Component} from "@angular/core";

@Component({
    selector:'personas-app',
    templateUrl:'./personas.component.html',
    styleUrls:['./personas.component.css']
    //template:`<h1>Este es el componente de personas</h1>
})
export class MiComponentePersona{
    public mensaje = "Mi mensaje";
    public otroMensaje = "Otro mensaje";
}