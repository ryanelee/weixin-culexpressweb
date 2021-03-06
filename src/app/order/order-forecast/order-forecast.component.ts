import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Order } from 'app/models/order';
import { TrackingHistory } from 'app/models/trackingHistory';
import { OrderService } from 'app/core/service/order.service';
import { Tool } from 'app/core/service/tool';
import { Warehouse } from '../../models/warehouse';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../core/service/auth.service';
import { User } from '../../models/user';
import { CommonService } from '../../core/service/common.service';

@Component({
    selector: 'app-order-forecast',
    templateUrl: './order-forecast.component.html',
    styleUrls: ['./order-forecast.component.css']
})
export class OrderForecastComponent implements OnInit {
    warehouses: Array<Warehouse> = [];
    form: FormGroup;
    user: User
    data: any = {
        isFastShip: 0
    };
    shippingCarriers: Array<any>;
    constructor(
        private _route: ActivatedRoute,
        private _order: OrderService,
        private _auth: AuthService,
        private _common: CommonService,
    ) { }
    ngOnInit(): void {
        this.user = this._auth.getUser();
        this.data.customerNumber = this.user.customerNumber;
        this.shippingCarriers = this._order.getShippingCarriers();
        this._order.getWarehouses().subscribe((result: any) => {
            this.warehouses = result;
        })
    }
    submitOrder() {
        if (!this.data.warehouseNumber || !this.data.carrierName || !this.data.trackingNumber || !this.data.packageDescription) {
           return this._common.alert('提示', '请填写必填项');
        }
        this._order.inboundpackage(this.data).subscribe((result) => {
            this._common.alert('提示', '提交成功');
        })
    }
}
