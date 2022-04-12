import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IUser } from 'src/app/core/interfaces/user';
import { MedsService } from 'src/app/core/meds.service';
import * as uniqId from 'uniqid';

@Component({
  selector: 'app-meds-new-page',
  templateUrl: './meds-new-page.component.html',
  styleUrls: ['./meds-new-page.component.css']
})
export class MedsNewPageComponent implements OnInit {

  // currentUser$: Observable<IUser> = this.authService.currentUser$;
  currentUserId = this.authService.currentUserId;

  constructor(private router: Router, private medService: MedsService, private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.currentUserId)

  }

  submitNewMed(newMedForm: NgForm): void {
    console.log(this.currentUserId)
    let medForm = {... newMedForm.value, owner: this.currentUserId, medId: uniqId() }
    console.log(medForm.medId)
    try {
      this.medService.addMed(medForm)
      
      this.router.navigate(['/all-meds'])
    } catch (error) {
      console.log(error)
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
