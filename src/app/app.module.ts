import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineeringPageComponent } from './engineering-page/engineering-page.component';
import { ArtworksPageComponent } from './artworks-page/artworks-page.component';
import { OldPtfPageComponent } from './old-ptf-page/old-ptf-page.component';
import { HeroAreaComponent } from './hero-area/hero-area.component';

@NgModule({
  declarations: [
    AppComponent,
    EngineeringPageComponent,
    ArtworksPageComponent,
    OldPtfPageComponent,
    HeroAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
