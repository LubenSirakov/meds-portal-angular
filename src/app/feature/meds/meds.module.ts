import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LatestMedsComponent } from './latest-meds/latest-meds.component';
import { MedsRoutingModule } from './meds-routing.module';



@NgModule({
  declarations: [
    LatestMedsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MedsRoutingModule
  ]
})
export class MedsModule { }
