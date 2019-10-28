import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

declare const siteMagnificPopup : any;

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  @Input() images : [];
  constructor() { }

  ngOnInit() {    
    siteMagnificPopup();
  }

}
