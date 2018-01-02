import { AuthService } from '../auth.service';
import { UrlResolver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route
} from '@angular/router';


// import { window } from 'rxjs/operator/window';

@Injectable()
export class AuthGuardService implements CanLoad, CanActivate {
  constructor(private activatedRoute: ActivatedRoute, private _auth: AuthService, private _router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    const bool = this._auth.isLoggedIn();
    if (bool) {
      return true
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }



}
