import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class CommonService {
  public SpinnerShow: BehaviorSubject<Boolean> = new BehaviorSubject(false);
  constructor(private http: Http, private _authHttp: AuthHttp) { }
  show() {
    this.SpinnerShow.next(true);
  }
  hidden() {
    this.SpinnerShow.next(false);
  }
  getSpinnerShow() {
    return this.SpinnerShow;
  }
  post(url, data) {
    this.show();
    const observable = new Observable(observer => {
      return this.http.post(environment.api + url, data).subscribe({
        next: result => {
          this.hidden();
          // this.SpinnerShow.next(false);
          observer.next(result);
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

<<<<<<< HEAD
  authPost(url, data) {
    this.show();
    const observable = new Observable(observer => {
      return this.http.post(environment.api + url, data).subscribe({
        next: result => {
          this.hidden();
          // this.SpinnerShow.next(false);
          observer.next(result);
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


=======
  getShipService() {
    return this.http.post(`${environment.api}/getShipService`,{});
  }
>>>>>>> 480ed742e0c28ba1c8f3690bf869d8ee0496fe09
}
