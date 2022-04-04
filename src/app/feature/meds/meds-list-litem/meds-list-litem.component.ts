import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IMed } from 'src/app/core/interfaces/med';

@Component({
  selector: 'app-meds-list-litem',
  templateUrl: './meds-list-litem.component.html',
  styleUrls: ['./meds-list-litem.component.css']
})
export class MedsListLitemComponent implements OnChanges, OnInit {

  @Input() med!: IMed;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.med.name)
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
