import { AuthGuardService } from './service/guards/auth-guard.service';
import { UserService } from './service/user.service';
import { StorageService } from './service/storage.service';
import { AuthService } from './service/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { OrderService } from 'app/core/service/order.service';
// import { AuthGuard } from './guards/auth.guard';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [],
  providers: [
    AuthService,
    StorageService,
    UserService,
    AuthGuardService,
    OrderService
  ]
})
export class CoreModule { }