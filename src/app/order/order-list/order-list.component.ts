
import { Component, OnInit, Input, Output } from '@angular/core';
import { OrderService } from 'app/core/service/order.service';
import { OrderList } from '../../models/orderList';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  @Output() orderList: OrderList;
  noData: boolean;

  constructor(
    private _order: OrderService
  ) { }

  ngOnInit() {
    this.getOrderList({})
  }

  getOrderList(param) {
    this._order.getOrderList(param).subscribe({
      next: result => {
        const data: any = result.json();
        if (data.data && data.data[0]) {
          this.orderList = data;
        } else {
          this.noData = true;
        }
      },
      error: message => {
        message = message.json();
        // this.errMeg = message.message;
      }
    })
  }

}
