import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMedsComponent } from './all-meds/all-meds.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllMedsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
