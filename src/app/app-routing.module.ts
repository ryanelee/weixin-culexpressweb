import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'app/core/service/guards/auth-guard.service';


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
