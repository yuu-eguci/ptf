import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAreaComponent } from './hero-area.component';

describe('HeroAreaComponent', () => {
  let fixture: ComponentFixture<HeroAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroAreaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAreaComponent);
    fixture.detectChanges();
  });

  it('トップの見出しを h1 で出します', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Flexible');
  });

  it('連絡先のメールリンクを出します', () => {
    const mail: HTMLAnchorElement = fixture.nativeElement.querySelector('a[href^="mailto:"]');
    expect(mail.getAttribute('href')).toBe('mailto:yuu.eguci@gmail.com');
  });
});
