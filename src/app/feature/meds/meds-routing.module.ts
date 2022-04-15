import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LatestMedsComponent } from './latest-meds/latest-meds.component';
import { MedsListComponent } from './meds-list/meds-list.component';
import { MedsPageComponent } from './meds-page/meds-page.component';
import { MedsNewPageComponent } from './meds-new-page/meds-new-page.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { MedsDetailPageComponent } from './meds-detail-page/meds-detail-page.component';
import { EditMedComponent } from './edit-med/edit-med.component';
import { UserAddedMedsComponent } from './user-added-meds/user-added-meds.component';
import { MyMedsComponent } from './my-meds/my-meds.component';

const routes: Routes = [
  {
    path: 'all-meds',
    component: MedsPageComponent
  },
  {
    path: 'meds/new',
    canActivate: [AuthGuard],
    component: MedsNewPageComponent
  },
  {
    path: 'meds/:medId',
    component: MedsDetailPageComponent
  },
  {
    path: 'meds/edit/:medId',
    canActivate: [AuthGuard],
    component: EditMedComponent
  },
  {
    path: 'user-added/:userId',
    canActivate: [AuthGuard],
    component: UserAddedMedsComponent
  },
  {
    path: 'my-meds/:userId',
    canActivate: [AuthGuard],
    component: MyMedsComponent
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
