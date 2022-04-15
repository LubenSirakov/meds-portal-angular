import { Injectable, NgZone } from '@angular/core';
import { IUser } from './core/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<any>;
  errorMessage: string = '';

  private _currentUser = new BehaviorSubject<any>(undefined);

  currentUser$ = this._currentUser.asObservable();
  isLoggedIn$ = this.currentUser$.pipe(map(userData => !!userData));

  user: any;
  currentUserId?: string = '';
  isLoggedIn = false;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState
  }

  register(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.currentUserId = res.user?.uid;
        localStorage.setItem('userId', this.currentUserId!)
        this.isLoggedIn = true;
        console.log('Successfully registered!', res);
      })
      .catch(error => {
        this.errorMessage = error.message;
        console.log('Something went wrong', this.errorMessage)
      })
  }

  login(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.user = res.user
        this.handleLogin(this.user)
        this.currentUserId = res.user?.uid;
        localStorage.setItem('userId', this.currentUserId!)
        this.isLoggedIn = true;
        console.log('Successfuly logged in!', res)
      })
      .catch(error => {
        this.errorMessage = error.message;
        console.log('Something went wrong', this.errorMessage);
      })
  }

  logout() {
    localStorage.clear();
    this.angularFireAuth.signOut();
  }

  handleLogin(newUser: IUser) {
    this._currentUser.next(newUser);
    console.log(this._currentUser);
    console.log(this.isLoggedIn$)
  }

  handleLogout() {
    this._currentUser.next(undefined)
  }


}
