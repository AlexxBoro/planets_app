import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  // @ViewChild('query', {static: false}) inputQuery: ElementRef;

  @Input() query: string;

  constructor() { }

  ngOnInit() {
  }

  onSearch(term: string) {
    console.log(term);
    term = this.query;

    // TODO jak wyczyscic wartosc inputa?
    // this.inputQuery = null;
    // term = '';
  }

}
