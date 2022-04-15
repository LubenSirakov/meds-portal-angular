import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { IMed } from 'src/app/core/interfaces/med';
import { IUser } from 'src/app/core/interfaces/user';
import { MedsService } from 'src/app/core/meds.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  medList: IMed[] = [];

  currentUser?: IUser;
  currentUserId?: string;

  medsAddedByCurrentUser: IMed[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private medService: MedsService,
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.user
    this.currentUserId = this.authService.currentUserId;
    console.log(this.currentUser?.email)
    this.medService.loadMedList().subscribe(medList => {
      let meds = Object.values(medList);
      this.medList = meds;
    })

  }

}
