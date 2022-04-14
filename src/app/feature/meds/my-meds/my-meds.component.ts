import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { IMed } from 'src/app/core/interfaces/med';
import { MedsService } from 'src/app/core/meds.service';

@Component({
  selector: 'app-my-meds',
  templateUrl: './my-meds.component.html',
  styleUrls: ['./my-meds.component.css']
})
export class MyMedsComponent implements OnInit {

  myMedsListString: string[] = [];
  myMedsList: IMed[] = [];
  currentUserId?: string = this.authService.currentUserId;

  constructor(private medService: MedsService, private authService: AuthService) { }

  ngOnInit(): void {
    let medsArray: any;;
    this.medService.getUserMeds(this.currentUserId).subscribe(medList => {
      medsArray = Object.values(medList)[0];
    })

    this.medService.loadMedList().subscribe(medList => {
      let meds = Object.values(medList);
      meds.filter(med => {
        if(medsArray.includes(med.medId)){
          this.myMedsList.push(med);
        }
      });
    }) 
  }
}
