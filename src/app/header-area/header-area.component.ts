import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-header-area',
  templateUrl: './header-area.component.html',
  styleUrls: ['./header-area.component.sass']
})
export class HeaderAreaComponent implements OnInit {

  @Input() currentPage: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.registerClassyNavEvent()
  }

  goToPage(destination: string) {
    // Doing page transition like below in SPA system.
    this.router.navigateByUrl(destination);
  }

  // HACK: How do I want to HACK this registerClassyNavEvent function in the future.
  // The process in this function is what is defined in alime.bundle.js in assets/js and executed in active.js.
  // I just want to execute the couple of files in ngAfterViewInit above though, no idea how to do that.
  // Temporarily, copied and pasted necessary lines here in registerClassyNavEvent.
  registerClassyNavEvent(): void {

    // Variables
    var navContainer = $('.classy-nav-container');
    var classy_nav = $('.classynav ul');
    var classy_navli = $('.classynav > ul > li');
    var navbarToggler = $('.classy-navbar-toggler');
    var closeIcon = $('.classycloseIcon');
    var navToggler = $('.navbarToggler');
    var classyMenu = $('.classy-menu');
    var var_window = $(window);
    var options;

    // default options
    var defaultOpt = $.extend({
      breakpoint: 991,
      openCloseSpeed: 500,
      megaopenCloseSpeed: 800
    }, options);

    // navbar toggler
    navbarToggler.on('click', function () {
      navToggler.toggleClass('active');
      classyMenu.toggleClass('menu-on');
    });

    // close icon
    closeIcon.on('click', function () {
      classyMenu.removeClass('menu-on');
      navToggler.removeClass('active');
    });

    // add dropdown & megamenu class in parent li class
    classy_navli.has('.dropdown').addClass('cn-dropdown-item');
    classy_navli.has('.megamenu').addClass('megamenu-item');

    // adds toggle button to li items that have children
    classy_nav.find('li a').each(function () {
      if ($(this).next().length > 0) {
        $(this).parent('li').addClass('has-down').append('<span class="dd-trigger"></span>');
      }
    });

    // expands the dropdown menu on each click
    classy_nav.find('li .dd-trigger').on('click', function (e) {
      e.preventDefault();
      $(this).parent('li').children('ul').stop(true, true).slideToggle(defaultOpt.openCloseSpeed);
      $(this).parent('li').toggleClass('active');
    });

    // add padding in dropdown & megamenu item
    $('.megamenu-item').removeClass('has-down');

    // expands the megamenu on each click
    classy_nav.find('li .dd-trigger').on('click', function (e) {
      e.preventDefault();
      $(this).parent('li').children('.megamenu').slideToggle(defaultOpt.megaopenCloseSpeed);
    });

    // check browser width in real-time
    function breakpointCheck() {
      var windoWidth = window.innerWidth;
      if (windoWidth <= defaultOpt.breakpoint) {
        navContainer.removeClass('breakpoint-off').addClass('breakpoint-on');
      } else {
        navContainer.removeClass('breakpoint-on').addClass('breakpoint-off');
      }
    }

    breakpointCheck();

    var_window.on('resize', function () {
      breakpointCheck();
    });

    // sidebar menu enable
    if (defaultOpt.sideMenu === true) {
      navContainer.addClass('sidebar-menu-on').removeClass('breakpoint-off');
    }
  }

}
