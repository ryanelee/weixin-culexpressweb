import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map'
import * as CryptoJS from 'crypto-js';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { CommonService } from 'app/core/service/common.service';

@Injectable()
export class UserService {
  // public SpinnerShow: Subject<any> = new Subject<any>();
  constructor(private http: Http, private _common: CommonService) { }

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

  // SpinnerShow

  post(url, data) {
    this._common.show()
    const observable = new Observable(observer => {
      return this.http.post(environment.api + url, data).subscribe({
        next: result => {
          this._common.hidden()
          observer.next(data);
        },
        error: message => {
          this._common.hidden()
          observer.next({
            err: message.json().message,
          });
        }
      })
    });
    return observable;
  }

  login(user) {
    const key = CryptoJS.lib.WordArray.random(128 / 8);
    const data = {
      data: CryptoJS.AES.encrypt(JSON.stringify(user), key.toString()).toString(),
      key: key.toString()
    };
    // post()
    return this.post('/customer/login2', data);
  }


}


