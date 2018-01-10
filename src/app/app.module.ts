import { CoreModule } from './core/core.module';
import { LoginModule } from './routes/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { MatExpansionPanel, MatExpansionModule } from '@angular/material';

import { OrderModule } from './order/order.module';
import { HomeComponent } from './home/home.component';
import { ChannelIntroComponent } from './home/channel-intro/channel-intro.component';
import { LayoutModule } from 'app/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChannelIntroComponent
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
    MatExpansionModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
