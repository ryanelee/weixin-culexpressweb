import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Order } from '../../models/Order';

@Component({
    selector: 'app-order-detail',
    templateUrl: './order-detail.component.html',
    styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
    @Output() orderDetail: Order

    constructor(
        private _route: ActivatedRoute
    ) {}

    ngOnInit() {
         this.orderDetail = this._route.snapshot.params['order'];
        console.log('this.orderDetail', this.orderDetail);
        console.log('this.orderDetail', this.orderDetail.declareGoodsValue);
    }

}
