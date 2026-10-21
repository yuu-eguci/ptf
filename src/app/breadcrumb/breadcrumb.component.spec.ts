import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BreadcrumbComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    fixture.componentInstance.currentPageTitle = 'Artworks';
    fixture.detectChanges();
  });

  it('ページ見出しを h1 で出します', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Artworks');
  });

  it('Index へ戻るリンクは href を持ちます', () => {
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('.breadcrumb a');
    expect(link.getAttribute('href')).toBe('/');
  });
});
