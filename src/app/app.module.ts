import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineeringPageComponent } from './engineering-page/engineering-page.component';
import { ArtworksPageComponent } from './artworks-page/artworks-page.component';
import { OldPtfPageComponent } from './old-ptf-page/old-ptf-page.component';
import { HeroAreaComponent } from './hero-area/hero-area.component';
import { SingleGalleryItemComponent } from './single-gallery-item/single-gallery-item.component';
import { ProgressComponent } from './progress/progress.component';
import { AuthorAreaComponent } from './author-area/author-area.component';
import { HeaderAreaComponent } from './header-area/header-area.component';

@NgModule({
  declarations: [
    AppComponent,
    EngineeringPageComponent,
    ArtworksPageComponent,
    OldPtfPageComponent,
    HeroAreaComponent,
    SingleGalleryItemComponent,
    ProgressComponent,
    AuthorAreaComponent,
    HeaderAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
