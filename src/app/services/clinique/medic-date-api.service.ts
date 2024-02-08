import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicDate } from 'src/app/interfaces/IMedicDate';

@Injectable({
  providedIn: 'root',
})
export class MedicDateAPIService {
  private url_api = 'https://localhost:44311/api/MedicDate';

  constructor(private http: HttpClient) {}

  getRequest(): Observable<MedicDate[]> {
    return this.http.get<MedicDate[]>(this.url_api);
  }
}
