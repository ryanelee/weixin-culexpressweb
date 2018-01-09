import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommonService {
  public SpinnerShow: BehaviorSubject<Boolean> = new BehaviorSubject(false);
  constructor() { }
  show() {
    this.SpinnerShow.next(true);
  }
  hidden() {
    this.SpinnerShow.next(false);
  }
  getSpinnerShow() {
    return this.SpinnerShow;
  }

}
