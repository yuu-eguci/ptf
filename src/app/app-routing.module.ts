import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngineeringPageComponent } from './engineering-page/engineering-page.component';
import { ArtworksPageComponent } from './artworks-page/artworks-page.component';


const routes: Routes = [
  { path: '', component: EngineeringPageComponent },
  { path: 'artworks', component: ArtworksPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
