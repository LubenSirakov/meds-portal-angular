import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IMed } from 'src/app/core/interfaces/med';
import { MedsService } from 'src/app/core/meds.service';
import { environment } from 'src/environments/environment.prod';

const apiUrl = environment.firebase.databaseURL

@Component({
  selector: 'app-meds-list',
  templateUrl: './meds-list.component.html',
  styleUrls: ['./meds-list.component.css']
})
export class MedsListComponent implements OnInit, AfterViewInit{

  medList: IMed[] = [];

  constructor(private medService: MedsService) { }

  ngOnInit(): void {
    this.medService.loadMedList().subscribe(medList => {
      let meds = Object.values(medList);
      console.log(meds)
      this.medList = meds;
    })
  }
  
  ngAfterViewInit(): void {
    console.log('View was initialized');
  }
}
