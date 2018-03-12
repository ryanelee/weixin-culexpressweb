
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
  private _temList: Array<OrderList>;
  private noData: boolean;
  private param: {};
  private totalCount: number;
  private loadedCount: number;
  private pageSize: 15;
  private pageIndex: 1;
  private miniRefresh: any;
  private _scrollPane: HTMLElement;
  private _interval: any;
  private _loaded: boolean;

  constructor(
    private _order: OrderService,
    private _element: ElementRef
  ) { }

  ngOnInit() {
    this.getFirstList().then((data: any) => {
      if (data && data[0]) {
        this._temList = data;
        this._loaded = true;
        this.initMiniRefresh()
        setTimeout(() => {
          this._scrollPane = this._element.nativeElement;
          this._interval = setInterval(() => {
            const { scrollHeight, scrollTop, clientHeight } = this._scrollPane.children[0];
            if (this._loaded && (scrollHeight - scrollTop <= clientHeight * 2)) {
              this.initMiniRefresh()
            }
          }, 2000);
        }, 2000);
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
        }
      }),
      up: Object.assign(options.up || {}, {
        callback: () => {
          if (that.loadedCount < that.totalCount) {
            if (that.pageIndex !== 1) {
              that.getOrderList(that.pageIndex);
            } else {
              this.orderList = this._temList
            }
            that.loadedCount += 15;
            that.pageIndex++;
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
        pageSize: 15,
        pageIndex: pageIndex
      },
      orderStatus: '',
      searchKeyName: 'orderNumber'
    }
    this._loaded = false
    this._order.getOrderList(this.param).subscribe((data: any) => {
      this._loaded = true
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
        pageSize: 20,
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
    clearInterval(this._interval);
  }
}
