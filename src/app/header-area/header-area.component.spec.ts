import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderAreaComponent } from './header-area.component';

describe('HeaderAreaComponent', () => {
  let fixture: ComponentFixture<HeaderAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderAreaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAreaComponent);
    fixture.componentInstance.currentPage = 'engineering';
    fixture.detectChanges();
  });

  it('全ページへのナビゲーションを href 付きのリンクで出します', () => {
    const links: HTMLAnchorElement[] = Array.from(fixture.nativeElement.querySelectorAll('#nav a[href]'));
    const hrefs = links.map(a => a.getAttribute('href'));
    expect(hrefs).toEqual(['/', '/engineering', '/artworks', '/journey']);
  });

  it('現在のページを aria-current で示します', () => {
    const current: HTMLAnchorElement[] = Array.from(fixture.nativeElement.querySelectorAll('nav a[aria-current="page"]'));
    expect(current.length).toBe(1);
    expect(current[0].getAttribute('href')).toBe('/engineering');
  });

  it('メニュー開閉ボタンは button 要素で aria-expanded を持ちます', () => {
    const toggler: HTMLButtonElement = fixture.nativeElement.querySelector('button.classy-navbar-toggler');
    expect(toggler.getAttribute('aria-expanded')).toBe('false');
    expect(toggler.getAttribute('aria-label')).toBe('Open menu');
  });

  it('メニューを開くと aria-expanded とラベルが切り替わります', () => {
    const toggler: HTMLButtonElement = fixture.nativeElement.querySelector('button.classy-navbar-toggler');
    toggler.click();
    fixture.detectChanges();
    expect(toggler.getAttribute('aria-expanded')).toBe('true');
    expect(toggler.getAttribute('aria-label')).toBe('Close menu');
  });
});
