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
  arePlanetsLoading = false;

  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    this.arePlanetsLoading = true;
    this.planetsService.getPlanets().subscribe(planets => {
      this.arePlanetsLoading = false;
      this.planets = planets;
      console.log(planets);
    });
  }
}
