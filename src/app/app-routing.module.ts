import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderTrackingComponent } from './order/order-tracking/order-tracking.component';
import { OrderTrackingDetailComponent } from './order/order-tracking-detail/order-tracking-detail.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: './routes/login/login.module#LoginModule'
    },
    {
        path: 'order',
        loadChildren: './order/order.module#OrderModule'
    },
    {
        path: 'order/tracking', component: OrderTrackingComponent
    },
    {
        path: 'order/tracking/:id', component: OrderTrackingDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})

export class AppRoutingModule { }
