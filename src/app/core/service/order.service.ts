import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
const shippingCarriers = [{
  id: 1,
  name: 'DHL'
}, {
  id: 2,
  name: 'EMS'
}, {
  id: 3,
  name: 'FEDEX'
}, {
  id: 4,
  name: 'UPS'
}, {
  id: 5,
  name: 'USPS'
}, {
  id: 6,
  name: '其他快递'
}];
@Injectable()
export class OrderService {
  constructor(private _common: CommonService) { }

  toResult(res) {
    const body = res.json();
    if (body.code === '000') {
      return body.data;
    }
    if (body.code === '999') {
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

  getOrderList(param, noLoading?) {
    return this._common.authPost('/order/list', param, noLoading);
  }

  inboundpackage(param) {
    return this._common.authPost('/inboundpackage', param);
  }

  getOrderDetail(param) {
    return this._common.authGet('/order/' + param);
  }


  getWarehouses() {
    return this._common.authGet('/warehouse');
  }

  getShippingCarriers() {
    return shippingCarriers;
  }

}


