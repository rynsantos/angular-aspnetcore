
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../shared/hero';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DashboardService {

  private _baseUrl = ''; //url to web api
  private _httpClient: HttpClient;

  constructor(
    http: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {

    this._httpClient = http;
    this._baseUrl = baseUrl;
  }

  getTopHeroes(): Observable<Hero[]> {

    const url = `${this._baseUrl}/api/Heroes/TopHeroes`;
    return this._httpClient
      .get<Hero[]>(url);
  }

}
