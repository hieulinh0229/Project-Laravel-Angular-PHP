import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCarouselComponent } from './detail-carousel.component';

describe('DetailCarouselComponent', () => {
  let component: DetailCarouselComponent;
  let fixture: ComponentFixture<DetailCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
