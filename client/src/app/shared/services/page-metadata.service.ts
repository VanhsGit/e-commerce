import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface ProductPageMetadata {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
}

const DEFAULT_TITLE = 'EcoTech | Xe điện, máy nông nghiệp và đồ điện chính hãng';
const DEFAULT_DESCRIPTION =
  'EcoTech cung cấp xe điện, máy nông nghiệp và thiết bị điện chính hãng, tư vấn tận tâm và bảo hành rõ ràng.';

@Injectable({ providedIn: 'root' })
export class PageMetadataService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly document = inject(DOCUMENT);

  setProduct(metadata: ProductPageMetadata): void {
    const description = this.cleanDescription(metadata.description) || metadata.title;
    const url = new URL(metadata.url, this.document.baseURI).href;
    this.title.setTitle(metadata.title);
    this.update('name', 'description', description);
    this.update('property', 'og:type', 'product');
    this.update('property', 'og:site_name', 'EcoTech');
    this.update('property', 'og:title', metadata.title);
    this.update('property', 'og:description', description);
    this.update('property', 'og:url', url);
    this.update('name', 'twitter:card', metadata.imageUrl ? 'summary_large_image' : 'summary');
    this.update('name', 'twitter:title', metadata.title);
    this.update('name', 'twitter:description', description);

    if (metadata.imageUrl) {
      const imageUrl = new URL(metadata.imageUrl, this.document.baseURI).href;
      this.update('property', 'og:image', imageUrl);
      this.update('name', 'twitter:image', imageUrl);
    } else {
      this.meta.removeTag("property='og:image'");
      this.meta.removeTag("name='twitter:image'");
    }

    this.setCanonicalUrl(url);
  }

  reset(): void {
    this.title.setTitle(DEFAULT_TITLE);
    this.update('name', 'description', DEFAULT_DESCRIPTION);
    this.update('property', 'og:type', 'website');
    this.update('property', 'og:site_name', 'EcoTech');
    this.update('property', 'og:title', 'EcoTech | Sản phẩm chính hãng');
    this.update('property', 'og:description', DEFAULT_DESCRIPTION);
    this.update('name', 'twitter:card', 'summary');
    this.update('name', 'twitter:title', 'EcoTech | Sản phẩm chính hãng');
    this.update('name', 'twitter:description', DEFAULT_DESCRIPTION);
    this.meta.removeTag("property='og:url'");
    this.meta.removeTag("property='og:image'");
    this.meta.removeTag("name='twitter:image'");
    this.document.head.querySelector('link[rel="canonical"]')?.remove();
  }

  private update(attribute: 'name' | 'property', key: string, content: string): void {
    const selector = `${attribute}='${key}'`;
    if (attribute === 'name') {
      this.meta.updateTag({ name: key, content }, selector);
    } else {
      this.meta.updateTag({ property: key, content }, selector);
    }
  }

  private setCanonicalUrl(url: string): void {
    let canonical = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  private cleanDescription(description: string): string {
    return description.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 300);
  }
}
