import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({

    selector: 'menu-componente',
    template: `
        <div class="card flex justify-center">
    <p-button label="Submit" />
</div>`,
    standalone: true,
    imports: [ButtonModule]

})
    

export class MenuComponent {

}