import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Order } from '../../models/Order';
import { OrderService } from 'app/core/service/order.service';
import { Tool } from 'app/core/service/tool';

@Component({
    selector: 'app-order-detail',
    templateUrl: './order-detail.component.html',
    styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
    @Output() orderDetail: Order
    orderNumber: string;
    constructor(
        private _route: ActivatedRoute,
        private _order: OrderService
    ) {
        this._route.params.subscribe(
            params => {
                this.orderNumber = params['orderNumber'];
            }
        );
    }

    ngOnInit() {
        console.log('this.orderNumber', this.orderNumber);
        this._order.getOrderDetail(this.orderNumber).subscribe((order: any) => {
            console.log('order', order);
            if (!order.err) {
                this.orderDetail = order;
            }
        })
        // this.orderDetail = this._route.snapshot.params['order'];
        // console.log('this.orderDetail', this.orderDetail);
        // console.log('this.orderDetail', this.orderDetail.declareGoodsValue);
    }

    pkgStatus(status) {
        return Tool.pkgStatus(status);
    }

    pkgStatusClass(status) {
        return Tool.pkgStatusClass(status);
    }

}
