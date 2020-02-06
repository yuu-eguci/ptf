import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit {

  @Input() currentPageTitle: string = '';
  @Input() backgroundImagePath: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToIndexPage() {
    // Doing page transition like below in SPA system.
    this.router.navigateByUrl('/');
  }

}
