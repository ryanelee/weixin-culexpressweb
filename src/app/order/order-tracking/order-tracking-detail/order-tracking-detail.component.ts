import { TrackingHistory } from 'app/models/trackingHistory';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Tool } from 'app/core/service/tool';

@Component({
  selector: 'app-order-tracking-detail',
  templateUrl: './order-tracking-detail.component.html',
  styleUrls: ['./order-tracking-detail.component.css']
})
export class OrderTrackingDetailComponent implements OnInit {

  @Input() trackingHistory: TrackingHistory;
  @Output() active = true;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  getPkgStatus(status) {
    return Tool.pkgStatus(status);
  }
}
