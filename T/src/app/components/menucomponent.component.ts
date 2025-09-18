
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
    selector: 'menubar-template-comp',
    template: `
    <div class="card">
        <p-menubar [model]="items">
        <ng-template pTemplate="start">
            <img src="assets/corazon.png" alt="Logo" width="40" height="40" class="mr-2" />
            <span class="font-bold">MiApp</span>
        </ng-template>
        </p-menubar>
    </div>
  `,
    standalone: true,
    imports: [Menubar]
})
export class MenubarTemplateComp implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [

            {
                label: 'Inicio',
                icon: 'pi pi-search',
            },
            {
                label: 'Registro',
                icon: 'pi pi-briefcase',
            },
            {
                label: 'Contacto',
                icon: 'pi pi-envelope',
            },
            {
                label: 'Acerca de',
                icon: 'pi pi-envelope',
            }
        ];
    }
}

// Export the component for use in other modules
export default MenubarTemplateComp;