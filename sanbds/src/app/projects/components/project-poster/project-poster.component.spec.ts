import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPosterComponent } from './project-poster.component';

describe('ProjectPosterComponent', () => {
  let component: ProjectPosterComponent;
  let fixture: ComponentFixture<ProjectPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
