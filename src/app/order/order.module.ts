import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatStepperModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';

import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { OrderTrackingDetailComponent } from 'app/order/order-tracking/order-tracking-detail/order-tracking-detail.component';
import { OrderNoTrackingComponent } from 'app/order/order-tracking/order-no-tracking/order-no-tracking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    OrderRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  declarations: [OrderListComponent, OrderDetailComponent, OrderTrackingComponent, OrderTrackingDetailComponent, OrderNoTrackingComponent]
})
export class OrderModule { }
