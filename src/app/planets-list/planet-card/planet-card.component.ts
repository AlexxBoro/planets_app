import { Component, OnInit, Input } from '@angular/core';

import { PlanetsService } from 'src/app/planets.service';
import { Planet } from 'src/app/planet.model';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent implements OnInit {
  @Input() planet: Planet;

  constructor(private planetsService: PlanetsService) {}

  ngOnInit() {}

  onSelected() {
    this.planetsService.data = this.planet;
  }
}
