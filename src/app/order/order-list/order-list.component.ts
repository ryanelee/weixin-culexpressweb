
import { Component, OnInit, Input, Output } from '@angular/core';
import { OrderService } from 'app/core/service/order.service';
import { OrderList } from '../../models/orderList';
import { Tool } from 'app/core/service/tool';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  @Output() orderList: OrderList;
  noData: boolean;
  param: {}

  constructor(
    private _order: OrderService
  ) { }

  ngOnInit() {
    this.param = {
      pageInfo: {
        pageSize: 99,
        pageIndex: 1
      },
      orderStatus: '',
      searchKeyName: 'orderNumber'
    }
    this.getOrderList(this.param);
  }

  getOrderList(param) {
    this._order.getOrderList(param).subscribe((data: any) => {
      if (data.data && data.data[0]) {
        this.orderList = data.data;
        console.log('order list data', this.orderList);
      } else {
        this.noData = true;
      }
    })
  }

  orderStatus(status) {
    return Tool.orderStatus(status);
  }
  orderStatusClass(status) {
    return Tool.orderStatusClass(status);
  }
}
