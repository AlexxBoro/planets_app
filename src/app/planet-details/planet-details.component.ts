import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {
  selectedPlanet;

  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    this.planetsService.selectedPlanet.subscribe(
      (planet) => {
        this.selectedPlanet = planet;
      }
    );
  }

}
