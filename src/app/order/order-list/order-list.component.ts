
import { Component, OnInit, Input, Output, AfterViewInit, ElementRef} from '@angular/core';
import { OrderService } from 'app/core/service/order.service';
import { OrderList } from 'app/models/orderList';
import { Tool } from 'app/core/service/tool';
declare var IScroll: any;
declare var MiniRefreshTools: any;

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, AfterViewInit {

  @Output() orderList: Array<OrderList>;
  private noData: boolean;
  private param: {};
  private totalCount: number;
  private loadedCount: number;
  private pageSize: 15;
  private pageIndex: 1;
  private miniRefresh: any;
  private _scrollPane: HTMLElement;

  constructor(
    private _order: OrderService,
    private _element: ElementRef
  ) { }

  ngOnInit() {
    this.getFirstList().then((data: any) => {
      if (data && data[0]) {
        this.orderList = data;
        setTimeout(() => {
          this._scrollPane = this._element.nativeElement;
          const interval = setInterval(() => {
            const { scrollHeight, scrollTop, clientHeight } = this._scrollPane.children[0];
            if (scrollHeight - scrollTop <= clientHeight * 2) {
              this.initMiniRefresh()
            }
          }, 2000);
        }, 20);
      } else {
        this.noData = true;
      }
    });
  }

  ngAfterViewInit () {
  }

  initMiniRefresh() {
    const that = this
    const options = {
      container: '#minirefresh',
      down: {},
      up: {
        isAuto: true,
        loadFull: {
          isEnable: true
        }
      }
    }
    that.miniRefresh = new MiniRefreshTools.theme.defaults(Object.assign(options, {
      down: Object.assign(options.down || {}, {
        callback: () => {
          if (that.loadedCount < that.totalCount) {
            that.loadedCount += that.pageSize;
            that.getOrderList(that.pageIndex);
            that.pageIndex++;
          } else {
            that.miniRefresh.endDownLoading(true);
          }
        }
      }),
      up: Object.assign(options.up || {}, {
        callback: () => {
          if (that.loadedCount < that.totalCount) {
            that.loadedCount += 15;
            that.pageIndex++;
            that.getOrderList(that.pageIndex);
          } else {
             that.miniRefresh.endUpLoading(true);
          }
        }
      })
    }))
  }

  getOrderList(pageIndex) {
    this.param = {
      pageInfo: {
        pageSize: 10,
        pageIndex: pageIndex
      },
      orderStatus: '',
      searchKeyName: 'orderNumber'
    }
    this._order.getOrderList(this.param).subscribe((data: any) => {
      this.totalCount = data.pageInfo.totalCount;
      if (data.data && data.data[0]) {
        data.data.forEach((e) => {
          this.orderList.push(e);
        });
      } else {
        this.noData = true;
      }
    })
  }

  getFirstList () {
    this.param = {
      pageInfo: {
        pageSize: 15,
        pageIndex: 1
      },
      orderStatus: '',
      searchKeyName: 'orderNumber'
    }
    return new Promise((resolve, reject) => {
      this._order.getOrderList(this.param).subscribe((data: any) => {
        this.totalCount = data.pageInfo.totalCount;
        this.loadedCount = data.pageInfo.pageSize;
        this.pageIndex = data.pageInfo.pageIndex;
        if (data.data) {
          resolve(data.data)
        } else {
          reject('error')
        }
      })
    })
  }

  orderStatus(status) {
    return Tool.orderStatus(status);
  }
  orderStatusClass(status) {
    return Tool.orderStatusClass(status);
  }

  detail () {
    console.log('detail')
    clearInterval(interval);
  }
}
