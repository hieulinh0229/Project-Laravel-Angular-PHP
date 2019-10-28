import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-poster',
  templateUrl: './blog-poster.component.html',
  styleUrls: ['./blog-poster.component.css']
})
export class BlogPosterComponent implements OnInit {

  @Input() imgUrl: string;
  @Input() date: string;
  constructor() { }

  ngOnInit() {
  }

}
