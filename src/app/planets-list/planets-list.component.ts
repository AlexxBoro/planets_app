import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { PlanetsService } from '../planets.service';
import { HttpClient } from '@angular/common/http';


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
  // planets: any[];
  // planetsAllMaybe: any[];
  articles: any[];
  url = 'https://swapi.co/api/planets/';

  // @Input() planet;

  constructor(private planetsService: PlanetsService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.arePlanetsLoading = true;

    this.getArticles(this.url, this.articles);
    // this.subscriptionPlanets = this.planetsService.getPlanets().subscribe(
    //   planets => {
    //     this.arePlanetsLoading = false;
    //     this.planets = planets;
    //     // console.log(planets);
    // }, (error: Response) => {
    //   alert('an unexpected error occured :-(');
    //   console.log(error);
    // });

    // this.subscriptionPlanets = this.planetsService.getPlanets(this.url, this.planets).subscribe(
    //   data => {
    //     if (this.planets === undefined) {this.planets = data['results']; } else { this.planets = this.planets.concat(data['results']); }
    //     // return console.log(planets['next']);
    //     if (data['next'] != null) {
    //       this.planetsService.getPlanets(data['next'], this.planets);
    //     } else { console.log('Finished'); }
    //     // this.planets = this.planetsAllMaybe;
    //     // console.log(this.planetsAllMaybe);
    // });
  }

  getArticles(url: string, articles: any[]) {
    this.httpClient.get(url).subscribe(data => {
      if (articles === undefined) { articles = data['results']; } else { articles = articles.concat(data['results']); }
      if (data['next'] != null) {
        console.log(data['next'])
        this.getArticles(data['next'], articles);
      } else { console.log('Finished'); }
      this.articles = articles;
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
