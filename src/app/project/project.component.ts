import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {

  @Input() projectTitle: string = '';
  @Input() projectDescription: string = '';
  @Input() thumbnailUrl: string = '';
  @Input() tag1: string = '';
  @Input() tag2: string = '';
  @Input() url: string = '';

  constructor() { }

  ngOnInit() {
  }

  goToPage() {
    window.open(this.url, "_blank");
  }

}
