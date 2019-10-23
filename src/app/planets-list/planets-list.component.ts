import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss'],
  providers: [PlanetsService]
})
export class PlanetsListComponent implements OnInit {

  planets: void;

  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    this.planets = this.planetsService.getPlanets();
  }
}
