import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAreaComponent } from './author-area.component';

describe('AuthorAreaComponent', () => {
  let fixture: ComponentFixture<AuthorAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorAreaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorAreaComponent);
    fixture.detectChanges();
  });

  it('アイコンだけのリンクは読み上げ用のラベルを持ちます', () => {
    const links: HTMLAnchorElement[] = Array.from(fixture.nativeElement.querySelectorAll('.member-social-info a'));
    expect(links.length).toBe(4);
    links.forEach(a => expect(a.getAttribute('aria-label')).toBeTruthy());
  });

  it('外部サイトへのリンクは新しいタブで安全に開きます', () => {
    const links: HTMLAnchorElement[] = Array.from(fixture.nativeElement.querySelectorAll('.member-social-info a[href^="https://"]'));
    expect(links.length).toBe(3);
    links.forEach(a => {
      expect(a.target).toBe('_blank');
      expect(a.rel).toContain('noopener');
    });
  });

  it('画像はすべて alt を持ちます', () => {
    const imgs: HTMLImageElement[] = Array.from(fixture.nativeElement.querySelectorAll('img'));
    imgs.forEach(img => expect(img.getAttribute('alt')).toBeTruthy());
  });
});
