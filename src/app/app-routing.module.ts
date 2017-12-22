import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: './routes/login/login.module#LoginModule'
    },
    {
        path: 'order',
        loadChildren: './order/order.module#OrderModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})

export class AppRoutingModule { }
