import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { IMed } from 'src/app/core/interfaces/med';
import { MedsService } from 'src/app/core/meds.service';

@Component({
  selector: 'app-user-added-meds',
  templateUrl: './user-added-meds.component.html',
  styleUrls: ['./user-added-meds.component.css']
})
export class UserAddedMedsComponent implements OnInit {

  medList: IMed[] = [];
  cuerrentUserId?: string = this.authService.currentUserId;

  constructor(private medService: MedsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.medService.loadMedList().subscribe(medList => {
      let meds = Object.values(medList);
      this.medList = meds.filter(med => med.owner === this.cuerrentUserId);
      console.log(this.medList)
    })    
  }

}
