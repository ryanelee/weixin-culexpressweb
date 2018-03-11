import { UserProfileComponent } from './routes/user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'app/core/service/guards/auth-guard.service';
import { ChannelIntroComponent } from 'app/home/channel-intro/channel-intro.component';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './routes/login/login.module#LoginModule'
    },
    {
        path: '',
        loadChildren: './routes/login/login.module#LoginModule'
    },
    {
        path: 'order',
        canLoad: [AuthGuardService],
        loadChildren: './order/order.module#OrderModule'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'user-profile',
        canActivate: [AuthGuardService],
        component: UserProfileComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})

export class AppRoutingModule { }
