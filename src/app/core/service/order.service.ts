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
  getTrackingListByOrderNumber(orderNumber) {
    return this._common.get(`/order/package/${orderNumber}`);
  }

  getOrderTrackingList(trackingNumber) {
    return this._common.get('/outboundpackage/track/' + trackingNumber);
  }

  getOrderList(param) {
    return this._common.post(environment.api + '/order/list', param);
  }

}


