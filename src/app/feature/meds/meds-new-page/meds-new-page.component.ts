import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MedsService } from 'src/app/core/meds.service';

@Component({
  selector: 'app-meds-new-page',
  templateUrl: './meds-new-page.component.html',
  styleUrls: ['./meds-new-page.component.css']
})
export class MedsNewPageComponent implements OnInit {

  constructor(private router: Router, private medService: MedsService) { }

  ngOnInit(): void {
  }

  submitNewMed(newMedForm: NgForm): void {
    this.medService.addMed$(newMedForm.value).subscribe({
      next: (med) => {
        this.router.navigate(['/meds']);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
