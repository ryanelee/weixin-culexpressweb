import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Tracking } from '../../models/tracking';
import { OrderService } from 'app/core/service/order.service';
import { TrackingHistory } from 'app/models/trackingHistory';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {

  trackingNumber: string;
  @Output() trackingNumberList: [string];
  // trackingHistory: TrackingHistory;
  @Output() trackingHistory: TrackingHistory;
  noData = false;


  constructor(
    private _route: ActivatedRoute,
    private _order: OrderService
  ) {
    this._route.params.subscribe(
      params => {
        if (params['trackingNumber']) {
          this.trackingNumber = params['trackingNumber'];
          this.search(this.trackingNumber);
        }
      }
    );
   }

  ngOnInit() {

  }
  search(trackingNumber) {
    this.trackingNumberList = null;
    this.trackingHistory = null;
    this.noData = false;

    if (trackingNumber && !trackingNumber.toUpperCase().startsWith('CUL')) {
      this._order.getTrackingListByOrderNumber(trackingNumber).subscribe((data: any) => {
        if (data && data[0]) {
          this.trackingNumberList = data;
          console.log(this.trackingNumberList);
        } else {
          this.noData = true;
        }
      })
      return;
    }
    this._order.getOrderTrackingList(trackingNumber).subscribe((data: any) => {
      if (data.data && data.data[0]) {
        this.trackingHistory = data;
        this.trackingHistory.trackingNumber = trackingNumber
        console.log('this.trackingHistory', this.trackingHistory);
      } else {
        this.noData = true;
      }
    })
  }
}
