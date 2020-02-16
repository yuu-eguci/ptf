import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-badges',
  templateUrl: './skill-badges.component.html',
  styleUrls: ['./skill-badges.component.sass']
})
export class SkillBadgesComponent implements OnInit {

  @Input() lis: {}[] = [];

  constructor() { }

  ngOnInit() {
  }

}
