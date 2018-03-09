import { CoreModule } from 'app/core/core.module';
import { LoginModule } from 'app/routes/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { OrderModule } from 'app/order/order.module';
import { LayoutModule } from 'app/layout/layout.module';
import { HomeModule } from 'app/home/home.module';
import { MatCardModule } from '@angular/material';
import { CulTrackingnumberValidatorDirective } from './shared/cul-trackingnumber-validator.directive';
import { ValidateOnBlurDirective } from './shared/validate-on-blur.directive';

@NgModule({
  declarations: [
    AppComponent,
    CulTrackingnumberValidatorDirective,
    ValidateOnBlurDirective
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    LoginModule,
    OrderModule,
    CoreModule,
    LayoutModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
