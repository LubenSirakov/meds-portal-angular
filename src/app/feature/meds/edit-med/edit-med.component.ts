import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { IMed } from 'src/app/core/interfaces/med';
import { MedsService } from 'src/app/core/meds.service';
import * as uniqId from 'uniqid';

@Component({
  selector: 'app-edit-med',
  templateUrl: './edit-med.component.html',
  styleUrls: ['./edit-med.component.css']
})
export class EditMedComponent implements OnInit {
  @Input() med!: IMed;

  currentUserId = this.authService.currentUserId;
  medOwner: string = '';
  medId: string = '';

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private medService: MedsService, 
    private authService: AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const medId = params['medId'];

      this.medService.loadMedById(medId).subscribe(med => {
        this.med = med;
        this.medOwner = med.owner;
        this.medId = med.medId
      })
    })
  }

  submitEditedMed(editedMedForm: NgForm): void {
    let medForm = {...editedMedForm.value, owenr: this.medOwner, medId: this.medId}
    try {
      this.medService.editMed(medForm);

      this.router.navigate(['/all-meds'])
    } catch (error) {
      console.log(error)
    }
  }
}
