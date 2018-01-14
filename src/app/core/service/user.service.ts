import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { CommonService } from 'app/core/service/common.service';
import { CommonwxService } from 'app/core/service/commonwx.service';

@Injectable()
export class UserService {
  // public SpinnerShow: Subject<any> = new Subject<any>();
  constructor(private _common: CommonService, private _commonwx: CommonwxService) { }

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

  getUserInfo(data) {
    return this._commonwx.authPost('/user/getUserInfo', data)
  }
}


