import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/core/service/user.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  isSpinnerShow = true;
  constructor(private _user: UserService) { }

  ngOnInit() {
    this._user.SpinnerShow.subscribe((data) => {
      console.log('data', data)
    })
    // this._order
  }

}
