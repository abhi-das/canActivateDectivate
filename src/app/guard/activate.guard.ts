import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';

@Injectable()
export class ActivateGuard implements CanActivate {

  private isLogged: boolean = false;

  constructor(private loginServ: LoginService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let url: string = state.url;
    console.log(url);

    if (!this.isLogged) { 

      alert('Activation blocked from CanActivate Service!');

      // this._router.navigate(['']);
      return false; 
    
    }
    
    return true;

  }

  setCanActivate(can) {
    this.isLogged = can;
  }


}