import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionPanel, MatExpansionModule, MatTab, MatTabsModule } from '@angular/material';

import { HomeComponent } from 'app/home/home.component';
import { ChannelIntroComponent } from 'app/home/channel-intro/channel-intro.component';
import { HomeRoutingModule } from 'app/home/home-routing.module';
import { AddValueIntroComponent } from './channel-intro/add-value-intro/add-value-intro.component';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatTabsModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, ChannelIntroComponent, AddValueIntroComponent]
})
export class HomeModule { }
