
import { Component, OnInit, Input, Output, AfterViewInit, ElementRef} from '@angular/core';
import { DatePipe } from '@angular/common';
import { OrderService } from 'app/core/service/order.service';
import { OrderList } from 'app/models/orderList';
import { Tool } from 'app/core/service/tool';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';

declare var IScroll: any;
declare var MiniRefreshTools: any;

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, AfterViewInit {

  private customerNunber: Observable<string>;
  @Output() orderList: Array<OrderList>;
  private _temList: Array<OrderList>;
  private noData: boolean;
  private param: {};
  private totalCount: number;
  private loadedCount: number;
  private pageSize: 10;
  private pageIndex: 1;
  private orderStatus: string;
  private miniRefresh: any;
  private _scrollPane: HTMLElement;
  private _interval: any;
  private _loaded: boolean;
  private _allLoaded: boolean;
  private _popDialog: boolean;

  constructor(
    private _order: OrderService,
    private _element: ElementRef,
    private _route: ActivatedRoute
  ) {
    _route.params.subscribe( params => this.customerNunber = params['customerNumber']);
  }

  ngOnInit() {
    this._popDialog = false;
    this.orderStatus = '';
    console.log('****ngOnInit*****');
    this.onInit();
  }

  ngAfterViewInit () {
  }

  onInit () {
    this.orderList = [];
    this._temList = [];
    this.miniRefresh = null;
    this._loaded = true;
    this._allLoaded = false;
    this.getFirstList().then((data: any) => {
      if (data && data[0]) {
        this._temList = data;
        // this.initMiniRefresh()
        setTimeout(() => {
          this._scrollPane = this._element.nativeElement;
          this._interval = setInterval(() => {
            const { scrollHeight, scrollTop, clientHeight } = this._scrollPane.children[0];
            if (this._loaded && !this._allLoaded && this.loadedCount < this.totalCount && (scrollHeight - scrollTop <= clientHeight * 2)) {
              this.initMiniRefresh()
              clearInterval(this._interval);
            }
          }, 2000);
        }, 2000);
      } else {
        this.noData = true;
      }
    });
  }

  initMiniRefresh() {
    this.miniRefresh = null
    console.log('****initMiniRefresh****');
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
    this.miniRefresh = new MiniRefreshTools.theme.defaults(Object.assign(options, {
      // down: Object.assign(options.down || {}, {
      //   callback: () => {
      //     this.miniRefresh.endDownLoading(true);
      //   }
      // }),
      up: Object.assign(options.up || {}, {
        callback: () => {
          if (this._loaded && this.loadedCount < this.totalCount) {
            if (this.pageIndex !== 1) {
              this.getOrderList(this.pageIndex);
              this.loadedCount += 10;
              this.pageIndex++;
            } else {
              this.pageIndex++;
              this.orderList = this._temList
            }
            // console.log('this.loadedCount');
            // console.log(this.loadedCount);
            // console.log(this.totalCount);
            if (this.loadedCount >= this.totalCount) {
              console.log('endloading!!!!')
              this._allLoaded = true;
              // this.miniRefresh.endUpLoading(true);
            }
          }
          this.miniRefresh.endUpLoading(this.loadedCount >= this.totalCount);
          console.log(this.miniRefresh);
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
      customerNumber: this.customerNunber,
      orderStatus: this.orderStatus,
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
        pageSize: 15,
        pageIndex: 1
      },
      customerNumber: this.customerNunber,
      orderStatus: this.orderStatus,
      searchKeyName: 'orderNumber'
    }
    return new Promise((resolve, reject) => {
      this._order.getOrderList(this.param).subscribe((data: any) => {
        this.totalCount = data.pageInfo.totalCount;
        this.loadedCount = data.pageInfo.pageSize;
        this.pageIndex = data.pageInfo.pageIndex;
        console.log(this.loadedCount);
        if (data.data) {
          resolve(data.data)
        } else {
          reject('error');
        }
      })
    })
  }

  getOrderStatus(status) {
    return Tool.orderStatus(status);
  }
  orderStatusClass(status) {
    return Tool.orderStatusClass(status);
  }

  detail () {
    clearInterval(this._interval);
  }

  pop () {
    this._popDialog = true;
  }

  changeQueryStaus(status) {
    this._popDialog = false;
    this.orderStatus = status || '';
    console.log('****changeQueryStaus*****');
    this.onInit();
  }
}
