import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBadgesComponent } from './skill-badges.component';

describe('SkillBadgesComponent', () => {
  let fixture: ComponentFixture<SkillBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillBadgesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBadgesComponent);
    fixture.componentInstance.lis = [
      { skillTitle: 'Python', iClass: 'devicon-python-plain', color: '#fff', backgroundColor: '#0168b3' },
    ];
    fixture.detectChanges();
  });

  it('スキル名を表示し、アイコンは読み上げ対象から外します', () => {
    const li: HTMLElement = fixture.nativeElement.querySelector('li');
    expect(li.textContent.trim()).toBe('Python');
    expect(li.querySelector('i').getAttribute('aria-hidden')).toBe('true');
  });

  it('スキルはリンクではないので a 要素を使いません', () => {
    expect(fixture.nativeElement.querySelector('a')).toBeNull();
  });
});
