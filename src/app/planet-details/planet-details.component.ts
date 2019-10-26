import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { PlanetsService } from "../planets.service";

@Component({
  selector: "app-planet-details",
  templateUrl: "./planet-details.component.html",
  styleUrls: ["./planet-details.component.scss"]
})
export class PlanetDetailsComponent implements OnInit, OnDestroy {
  planetSelected;
  subscriptionParams: Subscription;
  subscriptionPlanetSelected: Subscription;

  constructor(
    private planetsService: PlanetsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log("ponizej details idzie:");

    this.subscriptionPlanetSelected = this.planetsService.selectedPlanet.subscribe(
      (planet: any) => {
        console.log(planet);
        this.planetSelected = planet;
        console.log(planet);
      }
    );
    // console.log(planet)

    this.subscriptionParams = this.route.paramMap.subscribe(params => {
      console.log(params);
    });
  }

  ngOnDestroy() {
    this.subscriptionParams.unsubscribe();
    this.subscriptionPlanetSelected.unsubscribe();
  }
}
