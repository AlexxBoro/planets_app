import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerTitle: string = 'Welcome to the Planet App!';
  headerText: string = 'Discover undiscovered. Click on any celestial body to see details.';

  constructor() {}
}
