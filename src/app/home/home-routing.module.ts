import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChannelIntroComponent } from 'app/home/channel-intro/channel-intro.component';
import { EmbargoComponent } from 'app/home/embargo/embargo.component';

const routes: Routes = [
  {
    path: 'channel-intro', component: ChannelIntroComponent
  },
  {
    path: 'embargo', component: EmbargoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
