import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LatestMedsComponent } from './latest-meds/latest-meds.component';
import { MedsListComponent } from './meds-list/meds-list.component';

const routes: Routes = [
  {
    path: 'latest-meds',
    component: LatestMedsComponent
  },
  {
    path: 'meds-list',
    component: MedsListComponent
  }
]

export const MedsRoutingModule = RouterModule.forChild(routes);

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class MedsRoutingModule { }
