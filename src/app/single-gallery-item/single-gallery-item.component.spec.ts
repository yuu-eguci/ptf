import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGalleryItemComponent } from './single-gallery-item.component';

describe('SingleGalleryItemComponent', () => {
  let component: SingleGalleryItemComponent;
  let fixture: ComponentFixture<SingleGalleryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleGalleryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
