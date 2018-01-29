import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/core/service/user.service';
import { CommonService } from 'app/core/service/common.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  isSpinnerShow = false;
  constructor(private _common: CommonService) { }

  ngOnInit() {
    this._common.getSpinnerShow().subscribe((data: boolean) => {
      console.log('data', data)
      this.isSpinnerShow = data;
    })
    // this._order
  }

}
