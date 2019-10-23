import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  selectedPlanet = new EventEmitter();

  constructor() {}

  getPlanets() {
    // function to get planets...?
  }
}
