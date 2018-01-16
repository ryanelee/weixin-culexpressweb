import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Order } from '../../models/Order';
import { OrderService } from 'app/core/service/order.service';

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
        switch (status) {
            case 'Init':
                return '未打包'
            case 'Packaged':
                return '已打包'
            case 'Shipped':
                return '出库'
            case 'Send':
                return '送往机场'
            case 'Arrived':
                return '到达国内'
            default:
                break;
        }
    }

}
