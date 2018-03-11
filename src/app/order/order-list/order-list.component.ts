
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
          setInterval(() => {
            const { scrollHeight, scrollTop, clientHeight } = this._scrollPane.children[0];
            if (scrollHeight - scrollTop <= clientHeight * 2) {
              this.initMiniRefresh()
            }
          }, 3000);
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
            console.log('this.loadedCount:', that.loadedCount)
            console.log('this.totalCount:', that.totalCount)
            console.log('this.pageIndex:', that.pageIndex)
          } else {
            console.log('pull up end!!!!!!!')
             that.miniRefresh.endUpLoading(true);
          }
        }
      })
    }))

    // that.miniRefresh = new MiniRefreshTools.theme.defaults({
    //   container: '#minirefresh',
    //   down: {
    //     callback: function () {
    //       console.log('down!!')
    //       // 下拉事件

    //       // that.miniRefresh.endDownLoading();
    //     }
    //   },
    //   up: {
    //     callback: function () {
    //       console.log('up!!')
    //       // 上拉事件

    //       // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
    //       // that.miniRefresh.endUpLoading(true);
    //     }
    //   }
    // });
  }

  triggerDownLoading(isShowLoading) {
    this.miniRefresh.triggerDownLoading(isShowLoading)
  }

  triggerUpLoading(isShowLoading) {
    this.miniRefresh.triggerUpLoading(isShowLoading)
  }

  endDownLoading(isSuccess, successTips) {
    this.miniRefresh.endDownLoading(isSuccess, successTips)
  }

  endUpLoading(isFinishUp) {
    this.miniRefresh.endUpLoading(isFinishUp)
  }

  resetUpLoading() {
    this.miniRefresh.resetUpLoading()
  }

  scrollTo(y, duration) {
    this.miniRefresh.scrollTo(y, duration)
  }

  refreshOptions(options) {
    this.miniRefresh.refreshOptions(options)
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
    this._order.getOrderList(this.param).subscribe((data: any) => {
      this.totalCount = data.pageInfo.totalCount;
      if (data.data && data.data[0]) {
        data.data.forEach((e) => {
          this.orderList.push(e);
        });
        console.log(this.orderList)
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
}
