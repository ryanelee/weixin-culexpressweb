import { Tracking } from '../../models/tracking';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/core/service/order.service';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {

  trackingNumber: string;
  trackings: Array<Tracking>;
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
          this.trackings = data.data;
        }
        console.log('trackings', this.trackings);
      },
      error: message => {
        message = message.json();
        // this.errMeg = message.message;
      }
    })
  }
}
