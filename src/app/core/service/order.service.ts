import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as CryptoJS from 'crypto-js';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class OrderService {
  SpinnerShow: BehaviorSubject<Boolean> = new BehaviorSubject(false);
  constructor(private http: Http, private _common: CommonService) { }

  toResult(res) {
    const body = res.json();
    if (body.code === '000') {
      return body.data
    }
    if (body.code === '999') {
      console.log(234)
      return { err: body.msg }
    }
  }

  createReqObject(to, data) {
    const obj: any = {};
    const now = new Date();
    obj.reqId = 'zm' + now.getTime();
    obj.version = '1';
    obj.from = 'zm';
    obj.to = to;
    obj.reqDate = now;
    obj.data = data;
    return obj;
  };
  post(url, data) {
    this._common.show();
    const observable = new Observable(observer => {
      return this.http.post(environment.api + url, data).subscribe({
        next: result => {
          this._common.hidden();
          // this.SpinnerShow.next(false);
          observer.next(result);
        },
        error: message => {
          this._common.hidden();
          observer.next({
            err: message.json().message,
          });
        }
      })
    });
    return observable;
  }

  get(url) {
    console.log('12', 12);
    this._common.show();
    const observable = new Observable(observer => {
      return this.http.get(environment.api + url).subscribe({
        next: result => {
          this._common.hidden();
          observer.next(result);
        },
        error: message => {
           this._common.hidden();
          observer.next({
            err: message.json().message,
          });
        }
      })
    });
    return observable;
  }

  getTrackingListByOrderNumber(orderNumber) {
    return this.get(`/order/package/${orderNumber}`);
  }

  getOrderTrackingList(trackingNumber) {
    return this.get('/outboundpackage/track/' + trackingNumber);
  }

}


