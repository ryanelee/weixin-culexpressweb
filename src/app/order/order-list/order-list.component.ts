
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
  param: {}

  constructor(
    private _order: OrderService
  ) { }

  ngOnInit() {
    this.param = {
      pageInfo: {
        pageSize: 10,
        pageIndex: 1
      }
    }
    this.getOrderList(this.param)
  }

  getOrderList(param) {
    this._order.getOrderList(param).subscribe((data: any) => {
      if (data.data && data.data[0]) {
        this.orderList = data.data;
        console.log('order list data', this.orderList);
      } else {
        this.noData = true;
      }
      console.log('order list data', this.orderList);
    })
  }

  orderStatus(status) {
    switch (status) {
      case 'Unpaid':
        return '待支付'
      case 'Processing':
        return '处理中'
      case 'WaybillUpdated':
        return '运单更新'
      case 'Void':
        return '已取消'
      case 'Arrears':
        return '运费不足'
      case 'Arrived':
        return '已送达'
      case 'Paid':
        return '已支付'
      case 'PartialShipped':
        return '部分出库'
      case 'Shipped':
        return '已出库'
      default:
        break;
    }
  }
  orderStatusClass(status) {
    switch (status) {
      case 'Unpaid':
        return 'label-warning'
      case 'Processing':
        return 'label-info'
      case 'WaybillUpdated':
        return 'label-info'
      case 'Void':
        return 'label-info'
      case 'Arrears':
        return 'label-danger'
      case 'Arrived':
        return 'label-success'
      case 'Paid':
        return 'label-success'
      case 'PartialShipped':
        return 'label-success'
      case 'Shipped':
        return 'label-success'
      default:
        break;
    }
  }
}
