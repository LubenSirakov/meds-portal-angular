import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-meds',
  templateUrl: './latest-meds.component.html',
  styleUrls: ['./latest-meds.component.css']
})
export class LatestMedsComponent implements OnInit {

  isLoggedIn: boolean = true; //TODO add user service

  constructor() { }

  ngOnInit(): void {
  }

}
