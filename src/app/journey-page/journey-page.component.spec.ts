import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GalleryItemComponent } from '../gallery-item/gallery-item.component';

import { JourneyPageComponent } from './journey-page.component';

describe('JourneyPageComponent', () => {
  let fixture: ComponentFixture<JourneyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JourneyPageComponent, GalleryItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyPageComponent);
    fixture.detectChanges();
  });

  it('全 20 枚の画像をギャラリーに並べます', () => {
    const imgs: HTMLImageElement[] = Array.from(fixture.nativeElement.querySelectorAll('.gallery-grid img'));
    expect(imgs.length).toBe(20);
    expect(imgs[0].getAttribute('src')).toBe('/assets/img/journey-img/0.jpg');
    expect(imgs[0].getAttribute('alt')).toBe('Journey photo 1');
  });
});
