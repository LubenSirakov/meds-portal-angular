import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMed } from './interfaces/med';
import * as uniqId from 'uniqid'
import { AuthService } from '../auth.service';
import { IUser } from './interfaces/user';
import { getDatabase, ref, set, get, child, update, remove } from '@angular/fire/database';

const apiUrl = 'https://meds-portal-69e7a-default-rtdb.europe-west1.firebasedatabase.app';

@Injectable()
export class MedsService {

  db = getDatabase();
  dbRef = ref(getDatabase())

  constructor(private http: HttpClient) { }
  // ADD NEW MED
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
  //  LOAD ALL MEDS
  loadMedList(): Observable<IMed[]> {
    return this.http.get<IMed[]>(`${apiUrl}/meds.json`);
  }
  // LOAD SINGLE MED
  loadMedById(id: string): Observable<IMed> {
    return this.http.get<IMed>(`${apiUrl}/meds/${id}.json`)
  }

  getUserMeds(userId?: string): Observable<string[]> {
    return this.http.get<string[]>(`${apiUrl}/userData/${userId}.json`)
  }
  // EDIT MED
  editMed(
    body: {
      name: string,
      description: string,
      count: string,
      imgUrl: string,
      owner: string,
      medId: string,
      lists: []
    }) {
    update(ref(this.db, `meds/${body.medId}`), body)
  }

  // DELETE MED
  deleteMed(medId: string) {
    remove(child(this.dbRef, `meds/${medId}`))
  }
  // ADD MED TO COLLECTION
  async addMedToCollection(
    body: {
      userId: string,
      medId: string,
      medsList: string[],
      usersList: string[]
    }) {

    try {
      let snapshotUser = await get(child(this.dbRef, `userData/${body.userId}`));
      let snapshotMed = await get(child(this.dbRef, `userData/${body.medId}`));

      if (snapshotUser.exists()) {
        let userData = snapshotUser.val();

        body.medsList = userData.medsList;

        update(ref(this.db, `userData/${body.userId}`), {
          medsList: [...body.medsList, body.medId]
        })

      } else {
        set(ref(this.db, `userData/${body.userId}`), {
          medsList: [...body.medsList, body.medId]
        })
      }

      if (snapshotMed.exists()) {
        let medData = snapshotMed.val();
        body.usersList = medData.usersList;

        update(ref(this.db, `userData/${body.medId}`), {
          usersList: [...body.usersList, body.userId]
        })
      } else {
        set(ref(this.db, `userData/${body.medId}`), {
          usersList: [...body.usersList, body.userId]
        })
      }
    } catch (error) {
      console.log(error)
    }

  }
}
