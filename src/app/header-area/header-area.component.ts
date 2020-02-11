import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  goToPage(destination: string) {
    // Doing page transition like below in SPA system.
    this.router.navigateByUrl(destination);
  }

}
