import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PlanetsService } from '../planets.service';


@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss'],
  providers: [PlanetsService]
})
export class PlanetsListComponent implements OnInit, OnDestroy {

  arePlanetsLoading: boolean = false;
  subscriptionPlanets: Subscription;
  planets;

  constructor(private planetsService: PlanetsService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.arePlanetsLoading = true;

    // this.getPlanets(this.url, this.planets);

    this.subscriptionPlanets = this.planetsService.getPlanets().subscribe(
      planets => {
        this.arePlanetsLoading = false;
        this.planets = planets;
        // console.log(planets);
    }, (error: Response) => {
      alert('an unexpected error occured :-(');
      console.log(error);
    });
  }

  onSelected(planet) {
    console.log("you clicked me!");

    console.log(planet);

    // call some method in my service!
    this.planetsService.selectedPlanet.emit(planet);

    // console.log(this.planets);
  }

  ngOnDestroy() {
    this.subscriptionPlanets.unsubscribe();
  }
}
