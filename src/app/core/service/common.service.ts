import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from 'environments/environment';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  getShipService() {
    return this.http.post(`${environment.api}/getShipService`,{});
  }
}
