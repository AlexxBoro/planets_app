import { Injectable, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap, take, exhaustMap } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class PlanetsService {

  url: string = 'http://localhost:3000/planets';

  selectedPlanet = new EventEmitter<any>();

  // data: {name: string, rotation_period: number};
  allPlanets;

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<any> {
    return this.http.get(this.url).pipe(map(allPlanets => {
      console.log(allPlanets);
      return allPlanets;
    }));
  }

  // getSelectedPlanet(name) {

  //   console.log(this.selectedPlanet);

  //   console.log("hello form service - getSelectedPlanet(): " + name);
  // }
}
