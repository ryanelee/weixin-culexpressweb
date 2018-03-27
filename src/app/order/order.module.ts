
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatExpansionPanel,
  MatTab,
  MatStepperModule,
  MatExpansionModule,
  MatTabsModule,
  MatGridListModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatSnackBarModule,
  MatCheckboxModule,
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
import { OrderForecastComponent } from './order-forecast/order-forecast.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule,
    MatStepperModule,
    MatExpansionModule,
    MatTabsModule,
    MatGridListModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatStepperModule,
    MatExpansionModule,
    MatTabsModule
  ],
  declarations: [
    OrderListComponent,
    OrderDetailComponent,
    OrderTrackingComponent,
    OrderTrackingDetailComponent,
    OrderNoTrackingComponent,
    OrderPackageListComponent,
    OrderComponent,
    OrderForecastComponent
  ]
})
export class OrderModule { }
