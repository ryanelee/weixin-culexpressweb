import { AuthService } from '../../core/service/auth.service';
import { UserService } from '../../core/service/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { WxUser } from 'app/models/wx-user';
import { StorageService } from 'app/core/service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = { emailAddress: '', password: '' };
  errMeg: string;
  constructor(
    private _user: UserService,
    private _auth: AuthService,
    private _router: Router,
    private _storage: StorageService
  ) { }

  ngOnInit() {
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
  }

  clearMsg() {
    this.errMeg = ''
  }
  login(user) {
    const wxuser: WxUser = this._auth.getWxUser();
    if (wxuser) {
      user.openid = wxuser.openid;
    }
    if (!user.emailAddress ||
      !user.password) {
      return this.errMeg = '用户名和密码不能为空';
    }
    this._user.login(user).subscribe((result: any) => {
      if (result.err) {
        this.errMeg = result.err;
      } else {
        this._router.navigate(['user-profile']);
        if (wxuser) {
          this._user.updateWxUserInfo({ email: result.emailAddress, openid: wxuser.openid }).subscribe((update_result: any) => {
            if (update_result.err) {
              alert('err' + update_result.err);
            } else {
              const data: User = result;
              this._auth.setUser(result);
              this._auth.setJwtToken(result.token);
              // this._user
              this._router.navigate(['user-profile']);
            }
            ;
          })
        } else {
          this._auth.setUser(result);
          this._auth.setJwtToken(result.token);
          // this._user
          this._router.navigate(['user-profile']);
        }


      }
    })
  }
}
