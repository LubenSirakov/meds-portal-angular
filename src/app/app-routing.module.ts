import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMedsComponent } from './pages/all-meds/all-meds.component';

const routes: Routes = [
  {
    path: 'all-meds',
    component: AllMedsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
