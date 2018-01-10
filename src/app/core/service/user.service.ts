import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { CommonService } from 'app/core/service/common.service';

@Injectable()
export class UserService {
  // public SpinnerShow: Subject<any> = new Subject<any>();
  constructor(private _common: CommonService) { }

  toResult(body) {
    if (body.code.toString() === '000') {
      return body.data;
    } else if (body.code.toString() === '999') {
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



  login(user) {
    const key = CryptoJS.lib.WordArray.random(128 / 8);
    const data = {
      data: CryptoJS.AES.encrypt(JSON.stringify(user), key.toString()).toString(),
      key: key.toString()
    };
    // post()
    return this._common.post('/customer/login2', data)
  }
}


