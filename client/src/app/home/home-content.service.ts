import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HomeContentResponse, HomePageContent } from './home-content.model';

@Injectable({ providedIn: 'root' })
export class HomeContentService {
  private readonly url = environment.apiUrl + 'homecontent';

  constructor(private readonly http: HttpClient) {}

  get(): Observable<HomeContentResponse> {
    return this.http.get<HomeContentResponse>(this.url);
  }

  update(content: HomePageContent): Observable<HomeContentResponse> {
    return this.http.put<HomeContentResponse>(this.url, content);
  }
}
