import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule, MatExpansionPanel, MatExpansionModule, MatTab, MatTabsModule } from '@angular/material';
import { MatGridListModule, MatGridList } from '@angular/material';

import { HomeComponent } from 'app/home/home.component';
import { ChannelIntroComponent } from 'app/home/channel-intro/channel-intro.component';
import { HomeRoutingModule } from 'app/home/home-routing.module';
import { AddValueIntroComponent } from './channel-intro/add-value-intro/add-value-intro.component';
import { EmbargoComponent } from './embargo/embargo.component';
import { HowtouseComponent } from './howtouse/howtouse.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    MatExpansionModule,
    MatTabsModule,
    MatGridListModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, ChannelIntroComponent, AddValueIntroComponent, EmbargoComponent, HowtouseComponent, FaqComponent]
})
export class HomeModule { }
