import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IMed } from 'src/app/core/interfaces/med';
import { IUser } from 'src/app/core/interfaces/user';
import { MedsService } from 'src/app/core/meds.service';

@Component({
  selector: 'app-meds-detail-page',
  templateUrl: './meds-detail-page.component.html',
  styleUrls: ['./meds-detail-page.component.css']
})
export class MedsDetailPageComponent implements OnInit {

  @Input() med!: IMed;

  currentUser$: Observable<IUser> = this.authService.currentUser$;
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  currentUserId?: string = this.authService.currentUserId;
  medOwner: string = '';
  medId: string = '';
  usersMedList!: string[];

  canAddToMedList: boolean = true;

  currentUserIsOwner() {
    if (this.currentUserId === this.medOwner) {
      return true;
    } else {
      return false;
    }
  }

  checkIfMedInUserCollection() {
    let medsArray: any = Object.values(this.usersMedList)[0];

    let currentMedId = this.medId;

    return medsArray.includes(currentMedId);
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private medService: MedsService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const medId = params['medId'];
      this.medService.loadMedById(medId).subscribe(med => {
        this.med = med;
        this.medOwner = med.owner
        this.medId = med.medId
      })
    })
    let medsList: string[] = [];
    
    this.medService.getUserMeds(this.currentUserId).subscribe(medList => {
      this.usersMedList = medList
      medsList = medList;
    })

  }

  deleteHandler(medId: string) {
    this.medService.deleteMed(medId);

    this.router.navigate(['/all-meds'])
  }

  async addMedHandler() {
    let userId: any = this.currentUserId;
    let medId = this.medId;

    const medToAdd = {
      userId,
      medId,
      medsList: [],
      usersList: []
    }

    await this.medService.addMedToCollection(medToAdd)

    this.router.navigate(['/home'])
  }

}
