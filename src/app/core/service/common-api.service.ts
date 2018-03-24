import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment';
import { CommonwxService } from './commonwx.service';

@Injectable()
export class CommonApiService {
  constructor(
    private _common: CommonService,
    private _commonWx: CommonwxService,
  ) { }

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

  getShipService(param) {
    return this._common.post('/getShipService', param);
  }

  uploadIDCard(param) {
    return this._common.post('/customermessage/uploadIdCard', param)
  }

  base64Upload(param) {
    return this._commonWx.authPost('/api/base64ToImage', param)
  }

  uploadTaobaoIDCard(param) {
    return this._common.post('/addReceiveAddressTw', param);
  }


  verifyCULPackageNumber(param) {
    return this._common.post('/customermessage/checkTrackingNumber', param);
  }
}


