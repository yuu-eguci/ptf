import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.sass'],
  standalone: false
})
export class GalleryItemComponent {
  @Input() imgUrl = '';
  @Input() imgAlt = '';
}
