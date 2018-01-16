import { AuthService } from '../../core/service/auth.service';
import { UserService } from '../../core/service/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { WxUser } from 'app/models/wx-user';

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

  ) { }

  ngOnInit() {
  }

  clearMsg() {
    this.errMeg = ''
  }
  login(user) {
    if (!user.emailAddress ||
      !user.password) {
      return this.errMeg = '用户名和密码不能为空';
    }
    this._user.login(user).subscribe((result: any) => {
      if (result.err) {
        this.errMeg = result.err;
      } else {

        console.log('result', result);
        console.log('email', result.emailAddress);
        const wxuser: WxUser = this._auth.getWxUser();
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
