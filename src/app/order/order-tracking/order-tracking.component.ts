import { Tracking } from '../../models/tracking';
import { Component, OnInit, Output } from '@angular/core';
import { OrderService } from 'app/core/service/order.service';
import { TrackingHistory } from 'app/models/trackingHistory';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {

  trackingNumber = 'CUL100004903';
  @Output() trackingNumberList: [string];
  // trackingHistory: TrackingHistory;
  @Output() trackingHistory: TrackingHistory;
  noData = false;


  constructor(
    private _order: OrderService
  ) { }

  ngOnInit() {

  }
  search(trackingNumber) {
    this.trackingNumberList = null;
    this.trackingHistory = null;
    this.noData = false;

    if (trackingNumber && !trackingNumber.toUpperCase().startsWith('CUL')) {

      this._order.getTrackingListByOrderNumber(trackingNumber).subscribe({
        next: result => {
          const data: any = result.json();
          if (data && data[0]) {
            this.trackingNumberList = data;
          } else {
            this.noData = true;
          }
        },
        error: message => {
          message = message.json();
        }
      });

      return;
    }

    this._order.getOrderTrackingList(trackingNumber).subscribe({
      next: result => {
        const data: any = result.json();
        if (data.data && data.data[0]) {
          this.trackingHistory = data;
          this.trackingHistory.trackingNumber = trackingNumber
          console.log('this.trackingHistory', this.trackingHistory);
        } else {
          this.noData = true;
        }
      },
      error: message => {
        message = message.json();
        // this.errMeg = message.message;
      }
    })
  }
}
