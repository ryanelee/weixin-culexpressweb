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
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { TermsEnComponent } from './terms/terms-en/terms-en.component';
import { AppendixLimitComponent } from './terms/appendix-limit/appendix-limit.component';
import { AppendixOrmdComponent } from './terms/appendix-ormd/appendix-ormd.component';
import { InsuranceIntroComponent } from './terms/insurance-intro/insurance-intro.component';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    MatExpansionModule,
    MatTabsModule,
    MatGridListModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    ChannelIntroComponent,
    AddValueIntroComponent,
    EmbargoComponent,
    HowtouseComponent,
    FaqComponent,
    AboutComponent,
    TermsComponent,
    TermsEnComponent,
    AppendixLimitComponent,
    AppendixOrmdComponent,
    InsuranceIntroComponent
  ]
})
export class HomeModule { }
