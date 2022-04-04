import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IMed } from 'src/app/core/interfaces/med';
import { MedsService } from 'src/app/core/meds.service';

@Component({
  selector: 'app-meds-list',
  templateUrl: './meds-list.component.html',
  styleUrls: ['./meds-list.component.css']
})
export class MedsListComponent implements OnInit, AfterViewInit{

  medList: IMed[] = [];

  constructor(private medService: MedsService) { }

  ngOnInit(): void {
    this.medService.loadMedsList().subscribe(medList => {
      Object.values(medList)
      this.medList = medList;
      console.log(this.medList)
    })
  }

  ngAfterViewInit(): void {
    console.log('View was initialized');
  }
}
