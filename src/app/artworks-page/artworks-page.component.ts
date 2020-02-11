import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-artworks-page',
  templateUrl: './artworks-page.component.html',
  styleUrls: ['./artworks-page.component.sass']
})
export class ArtworksPageComponent implements OnInit {

  // The array that has the galleryItem number of elements.
  galleryItemLength: Array<number> = [];

  constructor() {
    // As ngFor variable, index will be used for values of 0 to n, fill can be used.
    this.galleryItemLength = new Array(55).fill(null);
  }

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
