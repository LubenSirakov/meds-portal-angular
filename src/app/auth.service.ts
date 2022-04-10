import { Injectable, NgZone } from '@angular/core';
import { IUser } from './core/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<any>;
  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState
  }

  register(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully registered!', res);
      })
      .catch(error => {
        console.log('Something went wrong', error.message)
      })
  }

  login(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfuly logged in!', res)
      })
      .catch(error => {
        console.log('Something went wrong', error.message);
      })
  }

  logout() {
    this.angularFireAuth
      .signOut();
  }


}
