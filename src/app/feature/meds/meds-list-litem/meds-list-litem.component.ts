import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IMed } from 'src/app/core/interfaces/med';

@Component({
  selector: 'app-meds-list-litem',
  templateUrl: './meds-list-litem.component.html',
  styleUrls: ['./meds-list-litem.component.css']
})
export class MedsListLitemComponent implements OnChanges {

  @Input() med!: IMed;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

  }

  // ngOnInit(): void {
  //   console.log(this.med.medId.name)
  // }

}
