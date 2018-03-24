import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CommonService } from '../../core/service/common.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  constructor(private _common: CommonService, public snackBar: MatSnackBar) { }
  ngOnInit() {
    setTimeout(() => {
      this._common.getAlertShow().subscribe((data: any) => {
        if (data.message) {
          this.snackBar.open(data.message, data.action, {
            duration: 2000,
            panelClass: 'btn-success'
          });
        }

      })
    }, 3000)

  }


}
