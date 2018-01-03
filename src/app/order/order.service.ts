import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { TrackingHistory } from '../models/trackingHistory';
import { TrackingHistoryMocks } from '../models/mock-tracking';

@Injectable()
export class OrderService {

  constructor() { }

  getTrackingHistory(trackingNumber: string): Observable<TrackingHistory>{
    return of(TrackingHistoryMocks.find((i) => i.trackingNumber === trackingNumber));
  }
}
