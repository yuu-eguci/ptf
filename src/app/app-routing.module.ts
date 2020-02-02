import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OldPtfPageComponent } from './old-ptf-page/old-ptf-page.component';
import { EngineeringPageComponent } from './engineering-page/engineering-page.component';
import { ArtworksPageComponent } from './artworks-page/artworks-page.component';


const routes: Routes = [
  { path: '', component: OldPtfPageComponent },
  { path: 'engineering', component: EngineeringPageComponent },
  { path: 'artworks', component: ArtworksPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
