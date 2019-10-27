import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PlanetsService } from '../planets.service';
import { Planet } from '../planet.model';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit, OnDestroy {

  arePlanetsLoading: boolean = false;
  subscriptionPlanets: Subscription;
  planets: Planet[];

  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    this.arePlanetsLoading = true;

    this.subscriptionPlanets = this.planetsService.getPlanets().subscribe(
      (planets: Planet[]) => {
        this.arePlanetsLoading = false;
        this.planets = planets;
    }, (error: Response) => {
      alert('an unexpected error occured :-(');
      console.log(error);
    });
  }

  ngOnDestroy() {
    this.subscriptionPlanets.unsubscribe();
  }
}
