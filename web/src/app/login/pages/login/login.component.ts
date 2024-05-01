import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public loading: boolean = false;
    public userName!: string;
    public password!: string;

    constructor(private readonly router: Router) {}

    ngOnInit(): void {
        
    }

    public login(): void {
        // this.error = false;
        // this.authService.signIn(this.user, this.password)
        //     .then(() => {
        //         this.loading = false;
        //         this.router.navigate(['home']);
        //     })
        //     .catch((error: any) => {
        //         this.loading = false;
        //         this.error = true;
        //         console.log(error);
        //     });
    }
}
