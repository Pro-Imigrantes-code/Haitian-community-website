import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['menu.component.scss']
})
export class MenuComponent {

    @Input()
    public siderIsCollapsed: boolean = false;

    constructor(private readonly router: Router) { }


    public navigateTo(url: string): void {
        this.router.navigateByUrl(url);
    }

}
