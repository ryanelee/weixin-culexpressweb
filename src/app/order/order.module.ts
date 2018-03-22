
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatStepperModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatDividerModule,
  MatListModule,
  MatDialogModule
} from '@angular/material';


import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { OrderTrackingDetailComponent } from 'app/order/order-tracking/order-tracking-detail/order-tracking-detail.component';
import { OrderNoTrackingComponent } from 'app/order/order-tracking/order-no-tracking/order-no-tracking.component';
import { OrderPackageListComponent } from './order-tracking/order-package-list/order-package-list.component';
import { OrderComponent } from './order.component';
import { LayoutModule } from 'app/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    MatInputModule,
    OrderRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule
  ],
  declarations: [
    OrderListComponent,
    OrderDetailComponent,
    OrderTrackingComponent,
    OrderTrackingDetailComponent,
    OrderNoTrackingComponent,
    OrderPackageListComponent,
    OrderComponent]
})
export class OrderModule { }
