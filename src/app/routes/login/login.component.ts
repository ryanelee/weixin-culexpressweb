import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {};
  errMeg: string;
  constructor(
    private _user: UserService
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
    this._user.login(user).subscribe((result) => {
      console.log('result', result);
    })
  }
}
