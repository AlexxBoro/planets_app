import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PlanetsService } from "../planets.service";

@Component({
  selector: "app-planet-details",
  templateUrl: "./planet-details.component.html",
  styleUrls: ["./planet-details.component.scss"]
})
export class PlanetDetailsComponent implements OnInit {
  // selectedPlanet;

  constructor(
    private planetsService: PlanetsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.planetsService.selectedPlanet.subscribe(
    //   (planet) => {
    //     this.selectedPlanet = planet;
    //   }
    // );
    this.route.paramMap
    .subscribe(params => {
      console.log(params);
      const planetName = params.get('name');
      this.planetsService.getSelectedPlanet(planetName);
    });
  }
}
