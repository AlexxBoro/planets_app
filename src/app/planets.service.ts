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
  urlMock: string = 'http://localhost:3000/planets';

  selectedPlanet = new EventEmitter();

  constructor(private http: HttpClient) {}

  getPlanets() {
    return this.http.get(this.urlMock).pipe(map(data => {
      console.log(data);
      return data;
    }));
  }

  // getSelectedPlanet(name) {

  //   console.log(this.selectedPlanet);

  //   console.log("hello form service - getSelectedPlanet(): " + name);
  // }
}
