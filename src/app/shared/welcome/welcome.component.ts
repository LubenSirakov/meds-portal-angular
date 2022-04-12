import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  // isLoggedIn: boolean = true; //todo: app proper user service

  constructor() { }

  ngOnInit(): void {
  }

}
