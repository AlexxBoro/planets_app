import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap, take, exhaustMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PlanetsService {
  url: string = "https://swapi.co/api/planets/";
  selectedPlanet = new EventEmitter();
  // loadedPlanets = [];

  constructor(private http: HttpClient) {}

  getPlanets() {
    // to zwraca tylko 10 planet ale chocia działa ;-D
    console.log("hello from getPlanets in the service!!!");

    // ten da same rekordy, tu sie jeszcze nie subskrybuje, to jest tylko przygotowana observable
    return this.http
      .get(`${this.url}`)
      .pipe(
        map(data => {
          // if (data['results'].length > 0) {
          //   return data['results'];
          // }
          return data['results'];
        })
      );
  }
}
