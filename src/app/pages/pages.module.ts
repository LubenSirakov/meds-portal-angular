import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMedsComponent } from './all-meds/all-meds.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    AllMedsComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
