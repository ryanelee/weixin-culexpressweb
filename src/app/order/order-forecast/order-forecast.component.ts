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
        this._order.inboundpackage(this.data).subscribe((result) => {
            console.log('123456', result);
        })
    }
}
