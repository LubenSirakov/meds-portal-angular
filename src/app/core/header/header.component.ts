import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  currentUser$: Observable<IUser> = this.authService.currentUser$;
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  // currentUser = '';
  // isLoggedIn = false;

  private isLoggingOut: boolean = false;

  // private subscription: Subscription;

  constructor(
    public authService: AuthService,
    private router: Router,

  ) {

  }

  ngOnInit(): void {
    console.log(this.currentUser$)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.currentUser = this.authService.currentUser$;
    // this.isLoggedIn = this.authService.isLoggedIn$;

    console.log(this.currentUser$)
  }

  logoutHandler(): void {

    if (this.isLoggingOut) {
      return;
    }

    try {
      this.authService.logout();

      this.router.navigate(['/home']);
    } catch (error) {
      this.isLoggingOut = false;
      console.log(error)
    }

  }

}
