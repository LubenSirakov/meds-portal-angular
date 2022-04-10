import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';
import { PagesModule } from './feature/pages/pages.module';
import { LatestMedsComponent } from './feature/meds/latest-meds/latest-meds.component';
import { MedsModule } from './feature/meds/meds.module';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthModule } from './auth/auth.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MedsNewPageComponent } from './feature/meds/meds-new-page/meds-new-page.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    MedsModule,
    RouterModule,
    PagesModule,
    AuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireAuthModule,
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent,
    HeaderComponent
  ]
})
export class AppModule { }
