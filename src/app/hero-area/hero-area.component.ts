import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-area',
  templateUrl: './hero-area.component.html',
  styleUrls: ['./hero-area.component.sass']
})
export class HeroAreaComponent implements OnInit {

  // FIXME: Although I want to specify image path from parent component, 'sanitizing unsafe style value' error occurs.
  @Input() backgroundImagePath: string = '';

  constructor() { }

  ngOnInit() {
  }

}
