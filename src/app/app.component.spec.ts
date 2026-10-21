import { TestBed } from '@angular/core/testing';
import { provideRouter, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [provideRouter([])],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('footer に現在の年を表示します', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const footer: HTMLElement = fixture.nativeElement.querySelector('footer');
    expect(footer.textContent).toContain(`© ${new Date().getFullYear()}`);
  });

  it('本文へのスキップリンクを先頭に置きます', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const skip: HTMLAnchorElement = fixture.nativeElement.querySelector('a.skip-link');
    expect(skip.getAttribute('href')).toBe('#main');
    expect(fixture.nativeElement.querySelector('main#main')).not.toBeNull();
  });

  it('外部リンクは新しいタブで安全に開きます', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const external: HTMLAnchorElement = fixture.nativeElement.querySelector('footer a[href^="https://colorlib.com"]');
    expect(external.target).toBe('_blank');
    expect(external.rel).toContain('noopener');
  });
});
