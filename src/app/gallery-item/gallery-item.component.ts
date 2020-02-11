import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.sass']
})
export class GalleryItemComponent implements OnInit {

  @Input() imgUrl: string = '';

  constructor() { }

  ngOnInit() {
  }

}
