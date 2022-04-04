import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LatestMedsComponent } from './latest-meds/latest-meds.component';
import { MedsRoutingModule } from './meds-routing.module';
import { MedsListComponent } from './meds-list/meds-list.component';
import { MedsListLitemComponent } from './meds-list-litem/meds-list-litem.component';
import { MedsPageComponent } from './meds-page/meds-page.component';
import { provideDatabase,getDatabase } from '@angular/fire/database';



@NgModule({
  declarations: [
    MedsPageComponent,
    MedsListComponent,
    MedsListLitemComponent,
    LatestMedsComponent,
    MedsPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MedsRoutingModule,
    provideDatabase(() => getDatabase())
  ]
})
export class MedsModule { }
