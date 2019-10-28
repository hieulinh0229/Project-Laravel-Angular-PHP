import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { BlogPosterComponent } from './blog-poster/blog-poster.component';
import { BigCarouselComponent } from './big-carousel/big-carousel.component';
import { DetailCarouselComponent } from './detail-carousel/detail-carousel.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { OurAgentsComponent } from './our-agents/our-agents.component';
import { AgentComponent } from './our-agents/agent/agent.component';
import { RealEstateLayoutComponent } from './real-estate-layout/real-estate-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    BlogPosterComponent,
    BigCarouselComponent,
    DetailCarouselComponent,
    PhotoGalleryComponent,
    OurAgentsComponent,
    AgentComponent,
    RealEstateLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SearchComponent,
    FooterComponent,
    HeaderComponent,
    BlogPosterComponent,
    BigCarouselComponent,
    DetailCarouselComponent,
    PhotoGalleryComponent,
    OurAgentsComponent,
    RealEstateLayoutComponent,
  ]
})
export class LandingPageModule { }
