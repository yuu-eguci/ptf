import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBadgesComponent } from './skill-badges.component';

describe('SkillBadgesComponent', () => {
  let component: SkillBadgesComponent;
  let fixture: ComponentFixture<SkillBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
