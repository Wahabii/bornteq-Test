import { AuthenticatinService } from './authenticatin.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'
import { Router } from "@angular/router";


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router ,  private authService: AuthenticatinService) { }

  canActivate(){
      if(this.authService.isLoggedIn()) return true;

      this.router.navigate(['/login']);
      return false;

  }

}
