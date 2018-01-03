import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TrackingHistory } from '../../models/trackingHistory';
import { OrderService } from '../order.service';
import { OrderTrackingComponent } from 'app/order/order-tracking/order-tracking.component';

@Component({
  selector: 'app-order-tracking-detail',
  templateUrl: './order-tracking-detail.component.html',
  styleUrls: ['./order-tracking-detail.component.css']
})
export class OrderTrackingDetailComponent implements OnInit {

  trackingHistory: TrackingHistory;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getTrackingHistory();
    console.log(this.trackingHistory);
  }

  getTrackingHistory(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderService.getTrackingHistory(id)
      .subscribe(result => {
        console.log('12345', result);
        this.trackingHistory = result
      });
  }
}
