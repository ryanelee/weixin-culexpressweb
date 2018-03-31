import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Order } from 'app/models/order';
import { TrackingHistory } from 'app/models/trackingHistory';
import { OrderService } from 'app/core/service/order.service';
import { Tool } from 'app/core/service/tool';
import { Warehouse } from '../../models/warehouse';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-order-forecast',
    templateUrl: './order-forecast.component.html',
    styleUrls: ['./order-forecast.component.css']
})
export class OrderForecastComponent implements OnInit {
    warehouses: Array<Warehouse> = [];
    form: FormGroup;
    data: any = {};
    constructor(
        private _route: ActivatedRoute,
        private _order: OrderService
    ) { }
    ngOnInit(): void {
        this.form = new FormGroup({
            warehouseNumber: new FormControl(),
            selectedshippingCarrier: new FormControl(),
            trackingNumber: new FormControl(),
            packageDescription: new FormControl(),
            packageWeight: new FormControl({ value: (new Date()), disabled: this.data.idForever === 'true' ? true : null }),
            packageNote: new FormControl()
          });
        // this._order.getWarehouses().subscribe((result) => {
        //     console.log('result', result);
        // })

    }
}
