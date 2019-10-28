import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const siteCarousel : any;

@Component({
  selector: 'app-detail-carousel',
  templateUrl: './detail-carousel.component.html',
  styleUrls: ['./detail-carousel.component.css']
})
export class DetailCarouselComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    siteCarousel();
  }

  ngAfterViewInit() {
  }

}
