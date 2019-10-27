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
  subscriptionParams: Subscription;
  subscriptionPlanetSelected: Subscription;
  // selectedPlanet;
  planetSelected;

  constructor(
    private planetsService: PlanetsService,
    private route: ActivatedRoute
  ) {
    this.planetsService.selectedPlanet.subscribe(
      (planetThatWasSelected) => {
        console.log(planetThatWasSelected);
      }
    );
  }

  ngOnInit(): void {
    console.log("ponizej details idzie:");

    // this.subscriptionPlanetSelected = this.planetsService.selectedPlanet.subscribe(
    //   (planet: any) => {
    //     console.log(planet);
    //     this.planetSelected = planet;
    //     console.log(planet);
    //   }
    // );
    // console.log(this.planetSelected)

    // this.planetSelected = this.planetsService.selectedPlanet;
    // console.log(this.planetSelected);

    this.planetSelected = this.planetsService.allPlanets;
    console.log(this.planetSelected);

    this.subscriptionParams = this.route.paramMap.subscribe(params => {
      console.log(params);
    });

    // this.selectedPlanet = history.state.data;
    // console.log(this.selectedPlanet);
  }

  ngOnDestroy() {
    this.subscriptionParams.unsubscribe();
    // this.subscriptionPlanetSelected.unsubscribe();
  }
}
