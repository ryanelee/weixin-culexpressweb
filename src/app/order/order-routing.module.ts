import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent
  },
  {
    path: 'order-detail/:orderNumber',
    component: OrderDetailComponent
  },
  {
    path: 'tracking', component: OrderTrackingComponent
  },
  {
    path: 'tracking/:trackingNumber', component: OrderTrackingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
