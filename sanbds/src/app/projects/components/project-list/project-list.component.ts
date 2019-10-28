import { Subscription } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MiniFormService } from 'src/app/mini-form/mini-form.service';
import { Project } from '../../project.model';
import { ProjectService } from '../../project.service';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectList: Project[];
  sub: Subscription;
  @Output() bindToParent = new EventEmitter<number>();
  checkedProvince = null;
  districts = [];
  allDistricts = [];
  provinces = [];
  constructor(   
     private formBiulder: FormBuilder,
    private miniFormService: MiniFormService,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.sub = this.projectService.getProject().subscribe(
      data => {this.projectList = data
      })
  }

}
