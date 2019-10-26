import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap, take, exhaustMap } from "rxjs/operators";
// import { lookup } from 'dns';

@Injectable({
  providedIn: "root"
})
export class PlanetsService {

  planets: any[];
  url: string = 'https://swapi.co/api/planets/';
  urlMock: string = 'http://localhost:3000/planets';

  selectedPlanet = new EventEmitter();

  constructor(private http: HttpClient) {}

  getPlanets() {

    return this.http.get(this.url).pipe(map(data => {
      console.log(data);
      console.log(data['results']);
      return data['results'];
    }));

    // return this.http.get(this.url);

  }

  getPlanetsMockData() {
    return this.http.get(this.urlMock).pipe(map(data => {
      console.log(data);
      // console.log(data['results']);
      return data;
    }));
  }

  // getSelectedPlanet(name) {

  //   console.log(this.selectedPlanet);

  //   console.log("hello form service - getSelectedPlanet(): " + name);
  // }
}
