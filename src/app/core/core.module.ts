import { CommonwxService } from './service/commonwx.service';
import { CommonService } from './service/common.service';
import { PipesModule } from './service/pipes/pipes.module';
import { AuthGuardService } from './service/guards/auth-guard.service';
import { UserService } from './service/user.service';
import { StorageService } from './service/storage.service';
import { AuthService } from './service/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from 'app/core/service/order.service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, HttpModule, JsonpModule, RequestOptions } from '@angular/http';
import { CommonApiService } from 'app/core/service/common-api.service';


const storage = new StorageService();
export function authFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    // headerPrefix: 'Bearer',
    noTokenScheme: true ,
    noJwtError: true,
    globalHeaders: [{ 'Accept': 'application/json' }],
    tokenGetter: (() => storage.getValue('jwtToken')),
  }), http, options);
}

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    PipesModule
  ],
  declarations: [],
  providers: [
    AuthService,
    StorageService,
    UserService,
    AuthGuardService,
    OrderService,
    CommonService,
    CommonwxService,
    CommonApiService,
    {
      provide: AuthHttp,
      useFactory: authFactory,
      deps: [Http, RequestOptions]
    }
    // provide: AuthHttp, useFactory: authFactory, deps: [Http, RequestOptions]
  ]
})
export class CoreModule { }


