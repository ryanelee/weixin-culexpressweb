import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { OrderTrackingDetailComponent } from './order-tracking-detail/order-tracking-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule
  ],
  declarations: [OrderListComponent, OrderDetailComponent, OrderTrackingComponent, OrderTrackingDetailComponent]
})
export class OrderModule { }
