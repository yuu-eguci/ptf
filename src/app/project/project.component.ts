import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
  standalone: false
})
export class ProjectComponent {
  @Input() projectTitle = '';
  @Input() projectDescription = '';
  @Input() thumbnailUrl = '';
  @Input() tag1 = '';
  @Input() tag2 = '';
  @Input() url = '';
}
