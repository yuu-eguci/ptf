import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-artworks-page',
  templateUrl: './artworks-page.component.html',
  styleUrls: ['./artworks-page.component.sass']
})
export class ArtworksPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    $('.portfolio-img').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
        preload: [0, 2],
        navigateByImgClick: true,
        tPrev: 'Previous',
        tNext: 'Next'
      }
    });
  }

}
