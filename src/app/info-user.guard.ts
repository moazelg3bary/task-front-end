import { StateUserService } from './services/state-user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoUserGuard implements CanActivate {
  
  // init names & type vars
  token: string | any;
  state: boolean | any;

  constructor(private state_user: StateUserService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // init value vars
      this.state = false;
      // get token user
      this.token = localStorage.getItem('TOKEN_USER');

      // check if token true
      if (this.token) {
        this.state = true;
      } else {
        this.state = false;
        this.state_user.navigated('/login');
      }
      
      // guard return state user
      return this.state;
    }
  
}
