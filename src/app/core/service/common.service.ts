import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';


declare var wx: any;
declare var $: any;


@Injectable()
export class CommonService {

  public SpinnerShow: BehaviorSubject<Boolean> = new BehaviorSubject(false);
  constructor(private http: Http, private _authHttp: AuthHttp, private _auth: AuthService) { }

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

  show() {
    this.SpinnerShow.next(true);
  }
  hidden() {
    this.SpinnerShow.next(false);
  }
  getSpinnerShow() {
    return this.SpinnerShow;
  }
  post(url, params, flag?) {
    if (flag) {
      this.show();
    }
    const observable = new Observable(observer => {
      return this.http.post(environment.api + url, params).subscribe({
        next: result => {
          this.hidden();
          const data: any = result.json();
          if (result.headers.toJSON().token) {
            data.token = result.headers.toJSON().token[0]
          };
          observer.next(data);
        },
        error: message => {
          this.hidden();
          observer.next({
            err: message.json().message,
          });
        }
      })
    });
    return observable;
  }

  get(url) {
    this.show();
    const observable = new Observable(observer => {
      return this.http.get(environment.api + url).subscribe({
        next: result => {
          this.hidden();
          observer.next(result);
        },
        error: message => {
          this.hidden();
          observer.next({
            err: message.json().message
          });
        }
      })
    });
    return observable;
  }



  authPost(url, data) {
    this.show();
    const observable = new Observable(observer => {
      data.token = this._auth.getJwtToken();
      return this.http.post(environment.api + url, data).subscribe({
        next: result => {
          this.hidden();
          observer.next(result.json());
        },
        error: message => {
          this.hidden();
          console.log('message.json()', message)
          // observer.next({
          //   err: message.json().message,
          // });
        }
      })
    });
    return observable;
  }

}
