import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-package-list',
  templateUrl: './order-package-list.component.html',
  styleUrls: ['./order-package-list.component.css']
})
export class OrderPackageListComponent implements OnInit {

  @Input() trackingNumberList: [string];
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  search(trackingNumber) {
    this.searchEvent.emit(trackingNumber);
  }
}
