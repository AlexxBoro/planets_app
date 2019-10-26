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

  // planets;
  arePlanetsLoading: boolean = false;
  subscriptionPlanets: Subscription;

  // url: string = "https://swapi.co/api/planets/";
  planets: any[];

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

    this.planetsService.getPlanetsMockData().subscribe(
      planets => {
        console.log(planets);
      }
    );
  }

  // getPlanets(url: string, planets: any[]) {
  //   this.subscriptionPlanets = this.httpClient.get(url).subscribe(data => {
  //     this.arePlanetsLoading = false;
  //     if (planets === undefined) { planets = data['results']; } else { planets = planets.concat(data['results']); }
  //     if (data['next'] != null) {
  //       console.log(data['next'])
  //       this.getPlanets(data['next'], planets);
  //     } else { console.log('Finished'); }
  //     this.planets = planets;
  //   });
  // }

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
