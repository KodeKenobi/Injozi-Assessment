import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // api initialization
  private ergast_api: string = environment.ergast_api;

  constructor(private _http: HttpClient) { }

  //http request to get the list of the winners for every race for the selected year.
  public get_champion(year: number) {
    return this._http.get(`${this.ergast_api + year.toString()}/results/1.json`);
  }

  //http request to get the driver with the highest points in a season
  public get_standings(year: number) {
    return this._http.get(`${this.ergast_api + year.toString()}/driverStandings/1.json`);
  }
}
