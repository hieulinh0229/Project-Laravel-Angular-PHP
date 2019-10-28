import { Component, OnInit } from '@angular/core';

declare const siteSliderRange : any;
declare const sitePlusMinus : any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    siteSliderRange();
    sitePlusMinus();
  }

}
