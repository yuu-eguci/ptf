import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [provideRouter([])],
      declarations: [BreadcrumbComponent],
    }).compileComponents();
  });

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
