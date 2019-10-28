import { Component, OnInit,Input } from '@angular/core';
import { Project } from '../../project.model';

@Component({
  selector: 'app-project-poster',
  templateUrl: './project-poster.component.html',
  styleUrls: ['./project-poster.component.css']
})
export class ProjectPosterComponent implements OnInit {
  @Input() project: Project;
  @Input() images: [];
  constructor() { }

  ngOnInit() {
  }

}
