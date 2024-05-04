import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { MenuComponent } from "./menu.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        NzMenuModule,
        NzIconModule,
        RouterModule
    ],
    exports: [MenuComponent],
    declarations: [MenuComponent]
})
export class MenuModule {

}
