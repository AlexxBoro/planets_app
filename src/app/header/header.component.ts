import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Welcome to the Planet App!';
  text: string = 'Discover undiscovered. Learn about the misterious world of planets. Check out the details of each celestial body by clicking on it.';

  constructor() {}

  ngOnInit() {}
}
