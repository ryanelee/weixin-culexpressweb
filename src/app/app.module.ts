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
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { ChannelIntroComponent } from './home/channel-intro/channel-intro.component';
=======
import { LayoutModule } from 'app/layout/layout.module';
>>>>>>> dc076db9ea4aace36064d6f764157ea15a674da7

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
<<<<<<< HEAD
    MatExpansionModule
=======
    LayoutModule
>>>>>>> dc076db9ea4aace36064d6f764157ea15a674da7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
