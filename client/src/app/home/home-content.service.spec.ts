import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DEFAULT_HOME_PAGE_CONTENT } from './home-content.model';
import { HomeContentService } from './home-content.service';

describe('HomeContentService', () => {
  let service: HomeContentService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(HomeContentService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('loads the typed public Home content endpoint', () => {
    const response = { content: DEFAULT_HOME_PAGE_CONTENT, updatedAt: '2026-09-29T00:00:00Z' };
    let actual: unknown;

    service.get().subscribe((value) => (actual = value));
    const request = http.expectOne('/api/homecontent');
    expect(request.request.method).toBe('GET');
    request.flush(response);

    expect(actual).toEqual(response);
  });

  it('publishes the complete Home document with PUT', () => {
    service.update(DEFAULT_HOME_PAGE_CONTENT).subscribe();
    const request = http.expectOne('/api/homecontent');
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(DEFAULT_HOME_PAGE_CONTENT);
    request.flush({ content: DEFAULT_HOME_PAGE_CONTENT, updatedAt: '2026-09-29T00:00:00Z' });
  });
});
