import { NgModule } from "@angular/core";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzResultModule } from 'ng-zorro-antd/result';
import { ForbiddenComponent } from "./forbidden.component";

@NgModule({
    imports: [
        NzResultModule,
        NzLayoutModule
    ],
    declarations: [ForbiddenComponent],
    exports: [ForbiddenComponent]
})
export class ForbiddenModule {

}
