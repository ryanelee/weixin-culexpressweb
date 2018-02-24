import { Tool } from '../tool';
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
  Route,
  Params
} from '@angular/router';
import { UserService } from 'app/core/service/user.service';
import { StorageService } from 'app/core/service/storage.service';


// import { window } from 'rxjs/operator/window';

@Injectable()
export class AuthGuardService implements CanLoad, CanActivate {
  constructor(
    private activatedRoute: ActivatedRoute,
    private _auth: AuthService,
    private _user: UserService,
    private _router: Router,
    private _storage: StorageService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canLoad(route: Route): boolean {
    console.log('route', route);
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    const routeUrl = window.location.href;
    if (routeUrl.includes('tracking')) {
      return true
    }
    /**
     * get wx user info
     */
    if (!this._auth.ifWxUser() && this._storage.get('wxObj')) {
      const obj = this._storage.get('wxObj');
      this._storage.remove('wxObj');
      this._user.getUserInfo(obj).subscribe((user: any) => {
        if (!user.err) {
          this._auth.setWxUser(user);
        } else {
          alert(user.err);
        }
      })
    }

    /**
     * check login status
     */
    const bool = this._auth.isLoggedIn();
    if (bool) {
      return true
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }



}
