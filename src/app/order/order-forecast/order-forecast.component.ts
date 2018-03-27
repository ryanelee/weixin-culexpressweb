import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Order } from 'app/models/order';
import { TrackingHistory } from 'app/models/trackingHistory';
import { OrderService } from 'app/core/service/order.service';
import { Tool } from 'app/core/service/tool';
import { Warehouse } from '../../models/warehouse';

@Component({
    selector: 'app-order-forecast',
    templateUrl: './order-forecast.component.html',
    styleUrls: ['./order-forecast.component.css']
})
export class OrderForecastComponent implements OnInit {
    warehouses: Array<Warehouse> = [];
    constructor(
        private _route: ActivatedRoute,
        private _order: OrderService
    ) { }
    ngOnInit(): void {
        this._order.getWarehouses().subscribe((result) => {
            console.log('result', result);
        })

    }
}
