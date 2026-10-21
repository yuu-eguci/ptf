import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    Object.assign(fixture.componentInstance, {
      projectTitle: 'shibafu',
      projectDescription: 'iOS app.',
      thumbnailUrl: '/assets/img/proj-img/shibafu.jpg',
      tag1: 'ios',
      tag2: 'dropbox',
      url: 'https://github.com/yuu-eguci/shibafu',
    });
    fixture.detectChanges();
  });

  it('カード全体がリポジトリへの外部リンクになり、新しいタブで安全に開きます', () => {
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(link.getAttribute('href')).toBe('https://github.com/yuu-eguci/shibafu');
    expect(link.target).toBe('_blank');
    expect(link.rel).toContain('noopener');
  });

  it('タグを表示します', () => {
    const tags = Array.from(fixture.nativeElement.querySelectorAll('.post-category') as NodeListOf<HTMLElement>).map(e => e.textContent.trim());
    expect(tags).toEqual(['ios', 'dropbox']);
  });

  it('サムネイルは遅延読み込みします', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('loading')).toBe('lazy');
    expect(img.getAttribute('alt')).toBe('');
  });
});
