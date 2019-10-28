import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { ProjectPosterComponent } from './components/project-poster/project-poster.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'project', component: ProjectsComponent, children: [
    { path: 'list', component: ProjectListComponent },  
  ]
},
];
@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectListComponent,
    ProjectPosterComponent
  ],
  imports: [
    CommonModule,
    LandingPageModule,
    RouterModule.forRoot(routes)

  ]
})
export class ProjectsModule { }
