import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldPtfPageComponent } from './old-ptf-page.component';

describe('OldPtfPageComponent', () => {
  let component: OldPtfPageComponent;
  let fixture: ComponentFixture<OldPtfPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldPtfPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldPtfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
