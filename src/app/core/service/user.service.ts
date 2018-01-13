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



  login(user) {
    const key = CryptoJS.lib.WordArray.random(128 / 8);
    const data = {
      data: CryptoJS.AES.encrypt(JSON.stringify(user), key.toString()).toString(),
      key: key.toString()
    };
    // post()
    return this._common.post('/customer/login2', data)
  }

  getUserInfo(data){
    return this._common.post('/wx/getUserInfo', data)
  }
}


