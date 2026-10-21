import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { EngineeringPageComponent } from './engineering-page.component';

describe('EngineeringPageComponent', () => {
  let fixture: ComponentFixture<EngineeringPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EngineeringPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringPageComponent);
    fixture.detectChanges();
  });

  it('本文の画像はすべて alt 属性を持ちます', () => {
    const imgs: HTMLImageElement[] = Array.from(fixture.nativeElement.querySelectorAll('img'));
    expect(imgs.length).toBeGreaterThan(0);
    imgs.forEach(img => expect(img.hasAttribute('alt')).toBe(true));
  });

  it('開発フロー図の拡大リンクは読み上げ用のラベルを持ちます', () => {
    const links: HTMLAnchorElement[] = Array.from(fixture.nativeElement.querySelectorAll('a.portfolio-img'));
    expect(links.length).toBe(3);
    links.forEach(a => expect(a.getAttribute('aria-label')).toBeTruthy());
  });
});
