import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.sass']
})
export class ProgressComponent implements OnInit {

  @Input() bgType: string = '';
  @Input() value: string = '';
  @Input() name: string = '';

  constructor() { }

  ngOnInit() {
  }

}
