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
    username: "",
    password: "",
    agree:false
  }

  submitbtnStatus:boolean = true;

  constructor(private router: Router) { }
  ngOnInit() {
  }

  login() {
   
  }

  check(){
    console.log("user",this.user)
   if(this.user.username && this.user.password && this.user.agree){
     this.submitbtnStatus = false;
   }else{
    this.submitbtnStatus = true;
   }
    // if(this.user)
  }
}
