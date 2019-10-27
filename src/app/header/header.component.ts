import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Welcome to the Planet App!';
  text: string = 'Discover undiscovered. Click on any celestial body to see details.';

  constructor() {}
}
