import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

import { Planet } from "./planet.model";

@Injectable({
  providedIn: "root"
})
export class PlanetsService {
  url: string = "http://localhost:3000/planets";
  data: Planet;

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<any> {
    return this.http.get(this.url).pipe(
      map(allPlanets => {
        return allPlanets;
      })
    );
  }
}
