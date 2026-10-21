import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GalleryItemComponent } from '../gallery-item/gallery-item.component';

import { ArtworksPageComponent } from './artworks-page.component';

describe('ArtworksPageComponent', () => {
  let fixture: ComponentFixture<ArtworksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtworksPageComponent, GalleryItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworksPageComponent);
    fixture.detectChanges();
  });

  it('全 56 枚の画像をギャラリーに並べます', () => {
    const imgs: HTMLImageElement[] = Array.from(fixture.nativeElement.querySelectorAll('.gallery-grid img'));
    expect(imgs.length).toBe(56);
    expect(imgs[0].getAttribute('src')).toBe('/assets/img/art-img/0.jpg');
    expect(imgs[0].getAttribute('alt')).toBe('Artwork 1');
  });
});
