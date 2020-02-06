import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-item',
  templateUrl: './index-item.component.html',
  styleUrls: ['./index-item.component.sass']
})
export class IndexItemComponent implements OnInit {

  @Input() contentTitle: string = '';
  @Input() contentDescription: string = '';
  @Input() contentUrl: string = '';
  @Input() thumbnailUrl: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToContentPage() {
    // Doing page transition like below in SPA system.
    this.router.navigateByUrl(`/${this.contentUrl}`);
  }

}
