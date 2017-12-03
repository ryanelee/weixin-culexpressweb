import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  toResult(res) {
    let body = res.json();
    if (body.code == '000') {
      return body.data
    }
    if (body.code == '999') {
      console.log(234)
      return { err: body.msg }
    }
  }

  createReqObject(to, data) {
    var obj: any = {};
    var now = new Date();
    obj.reqId = 'zm' + now.getTime();
    obj.version = '1';
    obj.from = 'zm';
    obj.to = to;
    obj.reqDate = now;
    obj.data = data;
    return obj;
  };

  login(data) {
    return this.http.post(environment.api + '/user/login', data).map((res: Response) => {
      return this.toResult(res);
    })
  }


}


