import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-area',
  templateUrl: './hero-area.component.html',
  styleUrls: ['./hero-area.component.sass'],
  standalone: false
})
export class HeroAreaComponent {

  @Input() backgroundImagePath = '';

}
