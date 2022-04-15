import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { MedsModule } from '../meds/meds.module';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MedsModule
  ]
})
export class PagesModule { }
