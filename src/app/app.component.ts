import { Component, OnInit } from '@angular/core';
// import { PlanetsService } from './planets.service';
// import { Planet } from './planet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // providers: [PlanetsService]
})
export class AppComponent implements OnInit {
  title = 'Welcome to the Planet App!';
  // planetSelected: Planet;

  constructor(
    // private planetsService: PlanetsService
    ) { }

  ngOnInit() {
    // this.planetsService.selectedPlanet
    // .subscribe(
    //   (planet: Planet) => {
    //     this.planetSelected = planet;
    //     console.log(planet);
    //   }
    // );
  }
}
