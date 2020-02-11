import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-journey-page',
  templateUrl: './journey-page.component.html',
  styleUrls: ['./journey-page.component.sass']
})
export class JourneyPageComponent implements OnInit {

  // The array that has the galleryItem number of elements.
  galleryItemLength: Array<number> = [];

  constructor() {
    // As ngFor variable, index will be used for values of 0 to n, fill can be used.
    this.galleryItemLength = new Array(20).fill(null);
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
