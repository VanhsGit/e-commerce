import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, shareReplay, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  DEFAULT_SITE_SETTINGS,
  SiteSettings,
  SiteSettingsResponse,
  isSupportedSiteSettings,
} from '../shared/models/site-settings';

@Injectable({ providedIn: 'root' })
export class SiteSettingsService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.apiUrl + 'siteSettings';
  private cached$: Observable<SiteSettingsResponse> | null = null;

  /** GET được cache: header và footer dùng chung một request cho cả phiên. */
  get(): Observable<SiteSettingsResponse> {
    this.cached$ ??= this.http.get<SiteSettingsResponse>(this.url).pipe(
      tap((response) => {
        if (!isSupportedSiteSettings(response?.content)) throw new Error('Unsupported site settings');
      }),
      // Lỗi thì bỏ cache để lần điều hướng sau thử lại.
      catchError((error) => {
        this.cached$ = null;
        throw error;
      }),
      shareReplay(1),
    );
    return this.cached$;
  }

  /** Bỏ cache rồi tải lại từ server (dùng cho trang admin). */
  reload(): Observable<SiteSettingsResponse> {
    this.cached$ = null;
    return this.get();
  }

  /** Nội dung cho header/footer: luôn trả giá trị hợp lệ, lỗi thì dùng mặc định. */
  getContent(): Observable<SiteSettings> {
    return this.get().pipe(
      map((response) => response.content),
      catchError(() => of(DEFAULT_SITE_SETTINGS)),
    );
  }

  update(content: SiteSettings): Observable<SiteSettingsResponse> {
    return this.http.put<SiteSettingsResponse>(this.url, content).pipe(
      tap((response) => {
        this.cached$ = of(response).pipe(shareReplay(1));
      }),
    );
  }
}
