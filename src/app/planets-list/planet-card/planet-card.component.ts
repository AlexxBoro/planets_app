import { Component, OnInit, Input } from '@angular/core';
import { PlanetsService } from 'src/app/planets.service';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent implements OnInit {

  // planets;
  @Input() planet: void;

  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    // this.planetsService.getPlanets().subscribe(planets => {
    //   this.planets = planets;
    //   console.log(planets);
    // });
  }

  onSelected() {
    // console.log("clicked on selected card!");
    this.planetsService.selectedPlanet.emit(this.planet);
  }

}
