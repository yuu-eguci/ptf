import { Component, Input } from '@angular/core';

export interface Skill {
  skillTitle: string;
  iClass: string;
  color: string;
  backgroundColor: string;
}

@Component({
  selector: 'app-skill-badges',
  templateUrl: './skill-badges.component.html',
  styleUrls: ['./skill-badges.component.sass'],
  standalone: false
})
export class SkillBadgesComponent {
  @Input() lis: Skill[] = [];
}
