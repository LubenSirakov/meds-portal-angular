import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LatestMedsComponent } from './latest-meds/latest-meds.component';
import { MedsRoutingModule } from './meds-routing.module';
import { MedsListComponent } from './meds-list/meds-list.component';
import { MedsListLitemComponent } from './meds-list-litem/meds-list-litem.component';
import { MedsPageComponent } from './meds-page/meds-page.component';
import { FormsModule } from '@angular/forms';
import { MedsNewPageComponent } from './meds-new-page/meds-new-page.component';



@NgModule({
  declarations: [
    MedsPageComponent,
    MedsListComponent,
    MedsListLitemComponent,
    LatestMedsComponent,
    MedsPageComponent,
    MedsNewPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MedsRoutingModule,
    FormsModule
  ],
  exports: [
    MedsPageComponent,
    MedsListComponent,
    MedsListLitemComponent,
    LatestMedsComponent,
    MedsPageComponent,
  ]
})
export class MedsModule { }
