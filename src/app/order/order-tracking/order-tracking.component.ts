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

  trackingNumber: string;
  // trackingHistory: TrackingHistory;
  @Output() trackingHistory: TrackingHistory;


  constructor(
    private _order: OrderService
  ) { }

  ngOnInit() {

  }
  search(trackingNumber) {
    this._order.getOrderTrackingList(trackingNumber).subscribe({
      next: result => {
        const data: any = result.json();
        if (data.data && data.data[0]) {
          this.trackingHistory = data;
          console.log('this.trackingHistory', this.trackingHistory);
        }
      },
      error: message => {
        message = message.json();
        // this.errMeg = message.message;
      }
    })
  }
}
