import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { PlanetsService } from "../planets.service";
import { Planet } from '../planet.model';

@Component({
  selector: "app-planet-details",
  templateUrl: "./planet-details.component.html",
  styleUrls: ["./planet-details.component.scss"]
})
export class PlanetDetailsComponent implements OnInit, OnDestroy {
  subscriptionParams: Subscription;
  subscriptionPlanetSelected: Subscription;

  // @Input() planet: Planet;
  public data: Planet;

  constructor(
    private planetsService: PlanetsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscriptionParams = this.route.paramMap.subscribe(params => {
      console.log(params);
    });
    // to jest warte miliony:
    this.data = this.planetsService.data;
    this.planetsService.data = undefined;
  }

  ngOnDestroy() {
    this.subscriptionParams.unsubscribe();
  }
}
