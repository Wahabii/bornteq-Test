
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticatinService } from '../services/authenticatin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthenticatinService) { }

  signIn(credentials) {
   if ( this.authService.login(credentials))
          this.router.navigate(['/']);
        else
          this.invalidLogin = true;
      }

}
