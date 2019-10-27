import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './planets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to the Planet App!';
  // planetSelected;


  // constructor(private planetsService: PlanetsService) { }

  // ngOnInit() {
  //   this.planetSelected = this.planetsService.selectedPlanet;
  //   console.log(this.planetSelected);

  // }
}
