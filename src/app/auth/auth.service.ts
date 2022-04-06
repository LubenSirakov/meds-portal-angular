import { Injectable } from '@angular/core';
import { User } from '../core/interfaces/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  constructor(
    public afAuth: AngularFireAuth,
  ) { }
}
