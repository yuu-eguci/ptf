import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { IndexPageComponent } from './index-page.component';

describe('IndexPageComponent', () => {
  let fixture: ComponentFixture<IndexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPageComponent);
    fixture.detectChanges();
  });

  it('3 つのコンテンツカードを 1 行に並べる列幅で出します', () => {
    const items: HTMLElement[] = Array.from(fixture.nativeElement.querySelectorAll('app-index-item'));
    expect(items.length).toBe(3);
    items.forEach(item => expect(item.classList).toContain('col-lg-4'));
  });
});
