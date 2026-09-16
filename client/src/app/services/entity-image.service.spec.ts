import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EntityImageService } from './entity-image.service';

describe('EntityImageService', () => {
  let service: EntityImageService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(EntityImageService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('sends the search term to the media catalog API', () => {
    service.list('logo').subscribe();

    const request = http.expectOne((value) => value.url === '/api/entityimages');
    expect(request.request.params.get('search')).toBe('logo');
    request.flush([]);
  });

  it('uploads a file without requiring an entity id', () => {
    const file = new File(['image'], 'avatar.png', { type: 'image/png' });

    service.upload(file).subscribe();

    const request = http.expectOne('/api/entityimages');
    expect(request.request.method).toBe('POST');
    expect(request.request.body instanceof FormData).toBeTrue();
    const uploaded = (request.request.body as FormData).get('file') as File;
    expect(uploaded.name).toBe('avatar.png');
    expect(uploaded.type).toBe('image/png');
    request.flush({});
  });
});
