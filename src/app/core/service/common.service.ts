import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';


declare var wx: any;
declare var $: any;


@Injectable()
export class CommonService {

  public SpinnerShow: BehaviorSubject<Boolean> = new BehaviorSubject(false);
  public AlertShow: BehaviorSubject<Object> = new BehaviorSubject({ message: '' });
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
  getAlertShow() {
    return this.AlertShow;
  }
  hidden() {
    this.SpinnerShow.next(false);
  }
  getSpinnerShow() {
    return this.SpinnerShow;
  }

  alert(message, action?) {
    return this.AlertShow.next({ message, action });
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
          console.log('message', message);
          this.hidden();
          if (message.status === 0) {
            observer.next({
              err: '网络错误'
            });
          } else {
            observer.next({
              err: message.json().message,
            });
          }

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
      const token: string = this._auth.getJwtToken();
      const headers = new Headers();
      headers.append('Token', token);
      const options = new RequestOptions({ headers: headers });
      return this.http.post(environment.api + url, data, options).subscribe({
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

  authGet(url) {
    this.show();
    const token: string = this._auth.getJwtToken();
    const headers = new Headers();
    headers.append('Token', token);
    const options = new RequestOptions({ headers: headers });
    const observable = new Observable(observer => {
      return this.http.get(environment.api + url, options).subscribe({
        next: result => {
          this.hidden();
          observer.next(result.json());
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

}
