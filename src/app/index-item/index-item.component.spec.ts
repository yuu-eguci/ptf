import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IndexItemComponent } from './index-item.component';

describe('IndexItemComponent', () => {
  let fixture: ComponentFixture<IndexItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [IndexItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexItemComponent);
    Object.assign(fixture.componentInstance, {
      contentTitle: 'Engineering',
      contentDescription: 'desc',
      contentUrl: 'engineering',
      thumbnailUrl: '/assets/img/bg-img/index-item-1.jpg',
    });
    fixture.detectChanges();
  });

  it('カード全体が対象ページへのリンクになります', () => {
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(link.getAttribute('href')).toBe('/engineering');
    expect(link.querySelector('h2').textContent).toContain('Engineering');
  });

  it('サムネイルは装飾なので空の alt にします', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('alt')).toBe('');
  });
});
