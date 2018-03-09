
import { Component, OnInit, Input, Output } from '@angular/core';
import { OrderService } from 'app/core/service/order.service';
import { OrderList } from 'app/models/orderList';
import { Tool } from 'app/core/service/tool';
// import MiniRefreshTools from 'minirefresh';
// import 'minirefresh/dist/debug/minirefresh.css'
// import { IScroll } from '../../../assets/js/iscroll-infinite';
declare var IScroll: any;

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
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    // this.loaded();
    // const miniRefresh = new MiniRefreshTools({
    //   container: '#minirefresh',
    //   down: {
    //     callback: function () {
    //       // 下拉事件
    //     }
    //   },
    //   up: {
    //     callback: function () {
    //       // 上拉事件
    //     }
    //   }
    // });
  }

  loaded() {
    let myScroll;
    myScroll = new IScroll('#wrapper', {
      mouseWheel: true,
      infiniteElements: '#wrapper mat-list-item',
      dataset: this.getOrderList,
      dataFiller: this.updateContent,
      cacheSize: 1000
    });
  }

  updateContent(el, data) {
    el.innerHTML = data;
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
