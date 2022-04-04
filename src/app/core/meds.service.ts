import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMed } from './interfaces/med';

const apiUrl = 'https://meds-portal-69e7a-default-rtdb.europe-west1.firebasedatabase.app/';

@Injectable()
export class MedsService {

  constructor(private http: HttpClient) { }

  loadMedsList(): Observable<IMed[]> {
    return this.http.get<IMed[]>(`${apiUrl}/meds.json`)
  }

}
