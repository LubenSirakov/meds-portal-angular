import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMed } from './interfaces/med';
import * as uniqId from 'uniqid'
import { AuthService } from '../auth.service';
import { IUser } from './interfaces/user';
// import { getDatabase, ref, set } from 'firebase/database';
import { getDatabase, ref, set } from '@angular/fire/database';

const apiUrl = 'https://meds-portal-69e7a-default-rtdb.europe-west1.firebasedatabase.app';

@Injectable()
export class MedsService {

  db = getDatabase();
  dbRef = ref(getDatabase())

  constructor(private http: HttpClient) { }

  addMed(
    body: {
      name: string,
      description: string,
      count: string,
      imgUrl: string,
      owner: string,
      medId: string,
      lists: []
    }) {
    set(ref(this.db, `meds/${body.medId}`), body)
  }

  loadMedList(): Observable<IMed[]> {
    return this.http.get<IMed[]>(`${apiUrl}/meds.json`);
  }

  loadMedById(id: string): Observable<IMed> {
    return this.http.get<IMed>(`${apiUrl}/meds/${id}.json`)
  }

}
