import { Component, HostListener, Input, OnInit } from '@angular/core';

// classy-nav の breakpoint と同じ値です。これ以下の幅でハンバーガーメニューになります。
const BREAKPOINT = 991;

@Component({
  selector: 'app-header-area',
  templateUrl: './header-area.component.html',
  styleUrls: ['./header-area.component.sass']
})
export class HeaderAreaComponent implements OnInit {

  @Input() currentPage = '';

  navItems = [
    { page: 'index', path: '/', label: 'Index', icon: 'fas fa-home' },
    { page: 'engineering', path: '/engineering', label: 'Engineering', icon: 'fas fa-code' },
    { page: 'artworks', path: '/artworks', label: 'Artworks', icon: 'fas fa-palette' },
    { page: 'journey', path: '/journey', label: 'Journey', icon: 'fas fa-motorcycle' },
  ];

  menuOpen = false;
  isMobile = false;

  ngOnInit() {
    this.onResize();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= BREAKPOINT;
    if (!this.isMobile) {
      this.menuOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeMenu();
  }
}
