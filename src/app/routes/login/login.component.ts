import { AuthService } from '../../core/service/auth.service';
import { UserService } from '../../core/service/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';

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
        const data: User = result
        this._auth.setUser(result);
        this._router.navigate(['order']);
      }
    })
  }
}
