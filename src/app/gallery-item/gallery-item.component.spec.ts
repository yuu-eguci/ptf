import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryItemComponent } from './gallery-item.component';

describe('GalleryItemComponent', () => {
  let fixture: ComponentFixture<GalleryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryItemComponent);
    Object.assign(fixture.componentInstance, { imgUrl: '/assets/img/art-img/3.jpg', imgAlt: 'Artwork 4' });
    fixture.detectChanges();
  });

  it('画像は alt 付きで遅延読み込みします', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('alt')).toBe('Artwork 4');
    expect(img.getAttribute('loading')).toBe('lazy');
  });

  it('読み込み前でも枠の高さが決まるよう、画像の寸法 (600x450) を指定します', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('width')).toBe('600');
    expect(img.getAttribute('height')).toBe('450');
  });

  it('画像タイル全体が拡大表示リンクになり、読み上げ用のラベルを持ちます', () => {
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a.portfolio-img');
    expect(link.getAttribute('href')).toBe('/assets/img/art-img/3.jpg');
    expect(link.querySelector('img')).not.toBeNull();
    expect(link.getAttribute('aria-label')).toBe('Open Artwork 4');
  });
});
