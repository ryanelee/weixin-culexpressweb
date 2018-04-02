import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommonService } from '../core/service/common.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public AlertShow: BehaviorSubject<Boolean> = new BehaviorSubject(false);

  constructor(private _common: CommonService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this._common.getAlertShow().subscribe((data: any) => {
      // console.log('234...');
      this.snackBar.open(data.message, data.action, {
        duration: 2000,
      });
    })
  }


}
