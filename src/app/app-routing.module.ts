import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'app/core/service/guards/auth-guard.service';

import { OrderTrackingComponent } from './order/order-tracking/order-tracking.component';
import { OrderTrackingDetailComponent } from './order/order-tracking-detail/order-tracking-detail.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: './routes/login/login.module#LoginModule'
    },
    {
        path: 'order',
        canLoad: [AuthGuardService],
        loadChildren: './order/order.module#OrderModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})

export class AppRoutingModule { }
