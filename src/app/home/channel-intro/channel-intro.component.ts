import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections'; 
import { Observable } from 'rxjs/Observable';
import { of as ObservableOf } from 'rxjs/observable/of';

import { CommonService } from 'app/core/service/common.service';

@Component({
  selector: 'app-channel-intro',
  templateUrl: './channel-intro.component.html',
  styleUrls: ['./channel-intro.component.css']
})

export class ChannelIntroComponent implements OnInit {

  panelOpenState: boolean = false;
  ELEMENT_DATA = [];

  constructor(private _service: CommonService) { 
    
  }

  ngOnInit() {
    this.loadDataSource();
  }

  loadDataSource() {

    // let ElementArray = [];

    this._service.getShipService().subscribe({
      next: result => {
        const data: any = result.json();

        if (data.data.data && data.data.data[0]) {
          data.data.data.forEach(item => {
            if(item.status == 0) return;
            this.ELEMENT_DATA.push({
              serviceName: item.shipServiceName,
              serviceSummary: item.serviceSummary,
              serviceLimitation: item.serviceDetail,
              tax: item.taxIncluded,
              maxWeight: item.maxWeight + '磅',
              idCard: item.needIDCard === 1 ? '需要身份证' : '无须身份证',
              firstWeightRate: item.shipFeeList.filter(i => i.isVip == '0')[0].firstWeight,
              continueWeightRate: item.shipFeeList.filter(i => i.isVip == '0')[0].continuedWeight
            });

          });

        }
      },
      error: message => {
        message = message.json();
      }
    });

    // this.dataSource = new ElementDataSource(ElementArray);
    console.log(this.ELEMENT_DATA);
  }
}

interface Element {
  serviceName: string;
  serviceSummary: string;
  serviceLimitation: string;
  tax: string;
  maxWeight: string;
  idCard: string;
  firstWeightRate: string;
  continueWeightRate: string
}

export class ElementDataSource extends DataSource<any> {

  constructor(private element: Element[]) {
    super();
  }

  connect(): Observable<Element[]> {
    return ObservableOf(this.element);
  }

  disconnect() {}
}
