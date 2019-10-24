import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss'],
  providers: [PlanetsService]
})
export class PlanetsListComponent implements OnInit {

  planets;

  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    // tu sie trzeba subskrybowac???
    console.log(this.planetsService.getPlanets());
    this.planets = this.planetsService.getPlanets();

    console.log(this.planets);
  }
}
