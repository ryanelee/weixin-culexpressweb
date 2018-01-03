import { OrderTrackingDetailComponent } from './order-tracking-detail/order-tracking-detail.component';
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
    path: 'order-detail',
    component: OrderDetailComponent
  },
  {
    path: 'tracking', component: OrderTrackingComponent
  },
  {
    path: 'tracking/:id', component: OrderTrackingDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
