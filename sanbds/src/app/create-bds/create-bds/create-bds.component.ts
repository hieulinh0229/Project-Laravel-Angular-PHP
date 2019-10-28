import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bds',
  templateUrl: './create-bds.component.html',
  styleUrls: ['./create-bds.component.css']
})
export class CreateBdsComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
   }

  ngOnInit() {
  }
}
