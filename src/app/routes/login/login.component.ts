import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/shared/user.service';
import { User } from 'app/models/user';
import { AuthService } from 'app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = {};
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
    this._user.login(user).subscribe({
      next: result => {
        const data: User = result.json();
        this._auth.setUser(data);
        this._router.navigate(['order']);
      },
      error: message => {
        message = message.json();
        this.errMeg = message.message;
      }
    })
  }

}
