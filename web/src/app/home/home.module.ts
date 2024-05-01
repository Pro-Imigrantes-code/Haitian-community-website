import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HomeComponent } from "./pages/home.component";

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NzGridModule,
        NzLayoutModule
    ],
    exports: [
        HomeComponent
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {

}
