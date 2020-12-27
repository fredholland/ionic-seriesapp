import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  baseUrl = 'https://www.episodate.com/api';

  constructor(private http: HttpClient) { }

  getSeries() {
    return this.http
      .get(`${this.baseUrl}/most-popular/`)
      .pipe(
        map(result => {
          return result['tv_shows'];
        })
      )
  }

  getSerie(id) {
    return this.http
      .get(`${this.baseUrl}/show-details?q=` + id)
      .pipe(
        map(result => {
          return result;
        })
      )
  }

}
