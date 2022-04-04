import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LatestMedsComponent } from './latest-meds/latest-meds.component';
import { MedsListComponent } from './meds-list/meds-list.component';
import { MedsPageComponent } from './meds-page/meds-page.component';

const routes: Routes = [
  {
    path: 'meds-list',
    component: MedsPageComponent
  },
  // {
  //   path: 'latest-meds',
  //   component: LatestMedsComponent
  // },
]

export const MedsRoutingModule = RouterModule.forChild(routes);

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class MedsRoutingModule { }
