import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public username!: string;

    // constructor (private authService: AuthService) {
    //     this.authService.isLoggedInChanged
    //         .subscribe((loggedIn: boolean) => {
    //             if (loggedIn) {
    //                 this.username = this.authService.userName;
    //             }
    //         });
    // }
}
