import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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

    // FIXME: jquery__WEBPACK_IMPORTED_MODULE_2__(...).imagesLoaded is not a function
    // imagesLoaded exists at node_modules/imagesloaded/imagesloaded.pkgd.min.js
    // and is PROBABLY read in angular.json, line 38.
    // How can it be used here?
    $('.alime-portfolio').imagesLoaded(function () {
      $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
          filter: filterValue
        });
      });
      var $grid = $('.alime-portfolio').isotope({
        itemSelector: '.single_gallery_item',
        percentPosition: true,
        masonry: {
          columnWidth: '.single_gallery_item'
        }
      });
    });
  }

}
