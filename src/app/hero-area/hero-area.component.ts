import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-area',
  templateUrl: './hero-area.component.html',
  styleUrls: ['./hero-area.component.sass']
})
export class HeroAreaComponent implements OnInit {

  @Input() backgroundImagePath: string = '';

  constructor() { }

  ngOnInit() {
  }

}
