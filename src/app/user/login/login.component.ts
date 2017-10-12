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
    email: "",
    password: ""
  }

  constructor(private router: Router) { }
  ngOnInit() {
  }
  login() {

  }
}
