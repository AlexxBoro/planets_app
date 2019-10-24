import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap, take, exhaustMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PlanetsService {
  selectedPlanet = new EventEmitter();

  constructor(private http: HttpClient) {}

  getPlanets() {
    // to zwraca tylko 10 planet ale chocia działa ;-D
    // console.log("hello from getPlanets in the service!!!");
    // this.http
    //   .get("https://swapi.co/api/planets/")
    //   .subscribe(response => console.log(response));
    console.log("hello from getPlanets in the service!!!");
    this.http
      .get("https://swapi.co/api/planets/")
      .pipe(
        map(data => {
          return data['results'];
        })
      ).subscribe(response => console.log(response));
  }
}
