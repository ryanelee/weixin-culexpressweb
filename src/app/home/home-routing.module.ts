import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChannelIntroComponent } from 'app/home/channel-intro/channel-intro.component';
import { EmbargoComponent } from 'app/home/embargo/embargo.component';
import { HowtouseComponent } from 'app/home/howtouse/howtouse.component';

const routes: Routes = [
  {
    path: 'channel-intro', component: ChannelIntroComponent
  },
  {
    path: 'embargo', component: EmbargoComponent
  },
  {
    path: 'howtouse', component: HowtouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
