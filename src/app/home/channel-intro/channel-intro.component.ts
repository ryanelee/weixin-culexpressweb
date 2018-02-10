import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { of as ObservableOf } from 'rxjs/observable/of';

import { CommonService } from 'app/core/service/common.service';
import { CommonApiService } from 'app/core/service/common-api.service';

@Component({
  selector: 'app-channel-intro',
  templateUrl: './channel-intro.component.html',
  styleUrls: ['./channel-intro.component.css']
})

export class ChannelIntroComponent implements OnInit {

  panelOpenState = false;
  ELEMENT_DATA = [];

  constructor(private _commonApi: CommonApiService) { }

  ngOnInit() {
    this.loadDataSource();
  }

  loadDataSource() {

    this._commonApi.getShipService({}).subscribe((data: any) => {
      if (data.data.data && data.data.data[0]) {
        data.data.data.forEach(item => {
          if (item.status === 0) {
            return;
          }

          this.ELEMENT_DATA.push({
            serviceName: item.shipServiceName,
            serviceSummary: item.serviceSummary,
            serviceLimitation: item.serviceDetail,
            tax: item.taxIncluded,
            maxWeight: item.maxWeight + '磅',
            idCard: item.needIDCard === 1 ? '需要身份证' : '无须身份证',
            firstWeightRate: item.shipFeeList.filter(i => i.isVip === '0' || i.isVip === 0)[0].firstWeight,
            continueWeightRate: item.shipFeeList.filter(i => i.isVip === '0' || i.isVip === 0)[0].continuedWeight
          });

        })
      }
    })
  }
}
