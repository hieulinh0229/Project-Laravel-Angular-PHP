import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const siteCarousel : any;
declare const siteStellar : any;

@Component({
  selector: 'app-big-carousel',
  templateUrl: './big-carousel.component.html',
  styleUrls: ['./big-carousel.component.css']
})
export class BigCarouselComponent implements OnInit {

  constructor() {    
   }

  ngOnInit() {    
    siteCarousel();    
    siteStellar();
  }

}
