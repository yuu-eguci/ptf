import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngineeringPageComponent } from './engineering-page/engineering-page.component';
import { ArtworksPageComponent } from './artworks-page/artworks-page.component';
import { IndexPageComponent } from './index-page/index-page.component';


const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'engineering', component: EngineeringPageComponent },
  { path: 'artworks', component: ArtworksPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
