import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { PlanetsService } from "../planets.service";
import { Planet } from "../planet.model";
@Component({
  selector: "app-planets-list",
  templateUrl: "./planets-list.component.html",
  styleUrls: ["./planets-list.component.scss"]
})
export class PlanetsListComponent implements OnInit, OnDestroy {
  arePlanetsLoading: boolean = false;
  subscriptionPlanets: Subscription;
  planetList: Planet[];
  filteredPlanetList: Planet[];

  constructor(private planetsService: PlanetsService) {}

  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredPlanetList = this.filterList(value);
  }

  loadPlanetsData() {
    this.arePlanetsLoading = true;
    this.subscriptionPlanets = this.planetsService.getPlanets().subscribe(
      (planets: Planet[]) => {
        this.arePlanetsLoading = false;
        this.planetList = planets;
        this.filteredPlanetList = this.planetList;
      },
      (error: Response) => {
        alert("an unexpected error occured :-(");
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.loadPlanetsData();
  }

  filterList(value: string) {
    return this.planetList.filter(
      planet => planet.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }

  ngOnDestroy() {
    this.subscriptionPlanets.unsubscribe();
  }
}
