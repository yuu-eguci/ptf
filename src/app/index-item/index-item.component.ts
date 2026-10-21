import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-index-item',
  templateUrl: './index-item.component.html',
  styleUrls: ['./index-item.component.sass']
})
export class IndexItemComponent {
  @Input() contentTitle = '';
  @Input() contentDescription = '';
  @Input() contentUrl = '';
  @Input() thumbnailUrl = '';
}
