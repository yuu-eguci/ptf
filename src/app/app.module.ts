import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineeringPageComponent } from './engineering-page/engineering-page.component';
import { ArtworksPageComponent } from './artworks-page/artworks-page.component';
import { HeroAreaComponent } from './hero-area/hero-area.component';
import { ProgressComponent } from './progress/progress.component';
import { AuthorAreaComponent } from './author-area/author-area.component';
import { HeaderAreaComponent } from './header-area/header-area.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { IndexItemComponent } from './index-item/index-item.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProjectComponent } from './project/project.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { JourneyPageComponent } from './journey-page/journey-page.component';
import { SkillBadgesComponent } from './skill-badges/skill-badges.component';

@NgModule({
  declarations: [
    AppComponent,
    EngineeringPageComponent,
    ArtworksPageComponent,
    HeroAreaComponent,
    ProgressComponent,
    AuthorAreaComponent,
    HeaderAreaComponent,
    IndexPageComponent,
    IndexItemComponent,
    BreadcrumbComponent,
    ProjectComponent,
    GalleryItemComponent,
    JourneyPageComponent,
    SkillBadgesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
