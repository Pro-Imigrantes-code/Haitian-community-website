import { NgModule } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'; // Importe outros módulos que deseja usar

@NgModule({
  imports: [NzMenuModule, NzDropDownModule], // Importe os módulos que deseja usar
  exports: [NzMenuModule, NzDropDownModule] // Exporte-os para que possam ser usados em outros módulos que importam SharedModule
})
export class SharedModule { }
