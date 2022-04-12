import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IMed } from 'src/app/core/interfaces/med';
import { MedsService } from 'src/app/core/meds.service';

@Component({
  selector: 'app-meds-detail-page',
  templateUrl: './meds-detail-page.component.html',
  styleUrls: ['./meds-detail-page.component.css']
})
export class MedsDetailPageComponent implements OnInit {

  @Input() med!: IMed;

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private medService: MedsService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(this.isLoggedIn$)
      const medId = params['medId'];
      console.log(medId)
      this.medService.loadMedById(medId).subscribe(med => {
        this.med = med;
        console.log(this.med)
      })
    })

  }

}
