import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPosterComponent } from './blog-poster.component';

describe('BlogPosterComponent', () => {
  let component: BlogPosterComponent;
  let fixture: ComponentFixture<BlogPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
