import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMed } from './interfaces/med';

const apiUrl = 'https://meds-portal-69e7a-default-rtdb.europe-west1.firebasedatabase.app';

@Injectable()
export class MedsService {

  constructor(private http: HttpClient) { }

  addMed$(body: { name: string, description: string, count: string, imgUrl: string }): Observable<IMed> {
    return this.http.post<IMed>(`${apiUrl}/meds.json`, body, { withCredentials: true });
  }

  loadMedList(): Observable<IMed[]> {
    return this.http.get<IMed[]>(`${apiUrl}/meds.json`);
  }

}
