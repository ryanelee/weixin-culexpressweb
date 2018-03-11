import { CoreModule } from 'app/core/core.module';
import { LoginModule } from 'app/routes/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './routes/user-profile/user-profile.component';
import { OrderModule } from 'app/order/order.module';
import { LayoutModule } from 'app/layout/layout.module';
import { HomeModule } from 'app/home/home.module';
import { CulTrackingnumberValidatorDirective } from './shared/cul-trackingnumber-validator.directive';
import { ValidateOnBlurDirective } from './shared/validate-on-blur.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatTabsModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatStepperModule,
  MatListModule
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
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
    CoreModule,
    LayoutModule,

    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatStepperModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
