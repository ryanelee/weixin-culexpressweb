import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChannelIntroComponent } from 'app/home/channel-intro/channel-intro.component';
import { EmbargoComponent } from 'app/home/embargo/embargo.component';
import { HowtouseComponent } from 'app/home/howtouse/howtouse.component';
import { FaqComponent } from 'app/home/faq/faq.component';
import { AboutComponent } from 'app/home/about/about.component';
import { TermsComponent } from './terms/terms.component';
import { TermsEnComponent } from './terms/terms-en/terms-en.component';
import { AppendixLimitComponent } from './terms/appendix-limit/appendix-limit.component';
import { AppendixOrmdComponent } from './terms/appendix-ormd/appendix-ormd.component';
import { InsuranceIntroComponent } from './terms/insurance-intro/insurance-intro.component';

const routes: Routes = [
  {
    path: 'channel-intro', component: ChannelIntroComponent
  },
  {
    path: 'embargo', component: EmbargoComponent
  },
  {
    path: 'howtouse', component: HowtouseComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'terms', component: TermsComponent
  },
  {
    path: 'terms-en', component: TermsEnComponent
  },
  {
    path: 'appendix-limit', component: AppendixLimitComponent
  },
  {
    path: 'appendix-ormd', component: AppendixOrmdComponent
  },
  {
    path: 'insurance-intro', component: InsuranceIntroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
