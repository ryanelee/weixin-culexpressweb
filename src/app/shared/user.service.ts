import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import * as CryptoJS from 'crypto-js';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

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

  login(user) {
    const key = CryptoJS.lib.WordArray.random(128 / 8);

    const data = {
      data: CryptoJS.AES.encrypt(JSON.stringify(user), key.toString()).toString(),
      key: key.toString()
    };

    return this.http.post(environment.api + '/customer/login2', data);
  }


}


