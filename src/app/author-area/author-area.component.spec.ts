import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAreaComponent } from './author-area.component';

describe('AuthorAreaComponent', () => {
  let component: AuthorAreaComponent;
  let fixture: ComponentFixture<AuthorAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
