import { UserService } from '../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

declare var $: any;
declare var weui: any;
// declare var wx: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//  "../node_modules/weui/dist/style/weui.min.css"

export class LoginComponent implements OnInit {
  user: any = {
    emailAddress: "",
    password: "",
    agree: false
  }

  submitbtnStatus: boolean = true;

  constructor(private router: Router, private userService: UserService) { }
  ngOnInit() {
  }

  login() {
    this.userService.login(this.user).subscribe(function (result) {
      
    })
  }

  check() {
    console.log("user", this.user)
    if (this.user.emailAddress && this.user.password && !this.user.agree) {
      this.submitbtnStatus = false;
    } else {
      this.submitbtnStatus = true;
    }
    // if(this.user)
  }
}
