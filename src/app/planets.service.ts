import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap, take, exhaustMap } from "rxjs/operators";
// import { lookup } from 'dns';

@Injectable({
  providedIn: "root"
})
export class PlanetsService {

  // url: string = "https://swapi.co/api/planets/";
  // planets: any[];

  selectedPlanet = new EventEmitter();


  constructor(private http: HttpClient) {}

  getPlanets(url: string, planets: any[]) {
    return this.http.get(url).pipe(map(data => {
      console.log(data);
      return data;
    }));
    // return this.http
    //   .get("https://swapi.co/api/planets/?page=2")
    //   .pipe(
    //     map(data => {
    //       console.log(data);
    //       return data['results'];
    //     })
    //   );

  }

  // getSelectedPlanet(name) {

  //   console.log(this.selectedPlanet);

  //   console.log("hello form service - getSelectedPlanet(): " + name);
  // }
}
