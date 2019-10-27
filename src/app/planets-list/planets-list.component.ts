import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { PlanetsService } from '../planets.service';
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss'],
  providers: [PlanetsService]
})
export class PlanetsListComponent implements OnInit, OnDestroy {

  arePlanetsLoading: boolean = false;
  subscriptionPlanets: Subscription;
  planets: any[];

  @Output() myEvent = new EventEmitter();

  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    this.arePlanetsLoading = true;

    this.subscriptionPlanets = this.planetsService.getPlanets().subscribe(
      planets => {
        this.arePlanetsLoading = false;
        this.planets = planets;
    }, (error: Response) => {
      alert('an unexpected error occured :-(');
      console.log(error);
    });
  }

  onSelected(planet): void {
    console.log("you clicked me!");

    console.log(planet);

    // call some method in my service!
    this.planetsService.selectedPlanet.emit(planet);

    // console.log("po wyemitowaniu  planety do servisu..")

    // console.log(this.planets);

    // this.planetsService.data = planet;

    // this.myEvent.emit(planet);
  }

  ngOnDestroy() {
    this.subscriptionPlanets.unsubscribe();
  }
}
