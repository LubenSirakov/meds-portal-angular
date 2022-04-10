import { Injectable, NgZone } from '@angular/core';
import { User } from '../core/interfaces/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestoreDocument} from '@angular/fire/compat/firestore'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  constructor(
    public afAuth: AngularFireAuth,
    public ngZone: NgZone,
    public router: Router
  ) { 
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      }else{
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    })
  }
 // Sign in with email/password
 login(email: string, password: string){
   return this.afAuth
    .signInWithEmailAndPassword(email, password)
    .then(result => {
      this.ngZone.run(() => {
        this.router.navigate(['meds'])
      });
      this.setUserData(result.user);
    })
    .catch(err => {
      console.log(err.message)
    })
 }
// Sign up with email/password
register(email: string, password: string){
  return this.afAuth
    .createUserWithEmailAndPassword(email, password)
    .then(result => {
      this.setUserData(result.user)
    })
    .catch(err => {
      console.log(err.message)
    })
}

get isLoggedIn(): boolean {
  const user = JSON.parse(localStorage.getItem('user')!);
  return user !== null && user.emailVerified !== false ? true : false; //not sure about this
}

setUserData(user: any){

}


}
