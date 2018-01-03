import { TrackingHistory } from '../../../models/trackingHistory';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-tracking-detail',
  templateUrl: './order-tracking-detail.component.html',
  styleUrls: ['./order-tracking-detail.component.css']
})
export class OrderTrackingDetailComponent implements OnInit {

  @Input() trackingHistory: TrackingHistory;

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
