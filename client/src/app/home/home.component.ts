import { Component, computed, HostListener, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { ProductKind } from '../shared/models/product-category';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { CommitmentsSectionComponent } from './sections/commitments-section/commitments-section.component';
import { IndustrySectionComponent } from './sections/industry-section/industry-section.component';
import {
  HomePageContent,
  resolveHomePageContent,
} from './home-content.model';
import { HomeContentService } from './home-content.service';
import { ProductLookupSectionComponent } from './sections/product-lookup-section/product-lookup-section.component';
import { CtaSectionComponent } from './sections/cta-section/cta-section.component';
import { RecruitmentSectionComponent } from './sections/recruitment-section/recruitment-section.component';
import { CompanySectionComponent } from './sections/company-section/company-section.component';
import { SolutionsSectionComponent } from './sections/solutions-section/solutions-section.component';

type HomeTab = ProductKind | 'home' | 'recruitment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    HeroSectionComponent,
    IndustrySectionComponent,
    CommitmentsSectionComponent,
    ProductLookupSectionComponent,
    RecruitmentSectionComponent,
    CtaSectionComponent,
    CompanySectionComponent,
    SolutionsSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly homeContentService = inject(HomeContentService);

  readonly homeContent = signal<HomePageContent | null>(null);
  readonly homeContentLoadFailed = signal(false);
  private readonly viewport = toSignal(
    inject(BreakpointObserver).observe('(max-width: 767.98px)'),
    { initialValue: { matches: false, breakpoints: {} } },
  );
  readonly isMobile = computed(() => this.viewport().matches);
  readonly activeTab = signal<HomeTab>('home');
  readonly tabs = computed(() => {
    const content = this.homeContent();
    return content
      ? [
          { id: 'home' as HomeTab, label: content.navigation.homeLabel, icon: 'home' },
          ...content.hero.cards.map((card) => ({ id: card.kind as HomeTab, label: card.title, icon: card.icon })),
          { id: 'recruitment' as HomeTab, label: content.navigation.recruitmentLabel, icon: 'group' },
        ]
      : [];
  });
  readonly activeIndustry = computed(() => {
    const content = this.homeContent();
    return content
      ? content.industries.find((industry) => industry.kind === this.activeTab())
        ?? content.industries[0]
      : null;
  });

  ngOnInit(): void {
    this.homeContentService.get().subscribe({
      next: (response) => {
        const content = resolveHomePageContent(response?.content);
        if (!content) {
          this.homeContentLoadFailed.set(true);
          console.error('Nội dung trang chủ từ API không hợp lệ hoặc chưa được hỗ trợ');
          return;
        }
        this.homeContent.set(content);
      },
      error: (error) => {
        this.homeContentLoadFailed.set(true);
        console.error('Không tải được nội dung trang chủ', error);
      },
    });
  }

  scrollToSection(id: string): void {
    const content = this.homeContent();
    if (!content) return;
    // Hero vẫn phát 'warranty' (nhãn/anchor lưu trong nội dung cũ); khối này nay là tra cứu sản phẩm.
    if (id === 'warranty') id = 'product-lookup';
    const card = content.hero.cards.find((item) => item.anchor === id || item.kind === id);
    if (card || id === 'recruitment') {
      this.activeTab.set(card?.kind ?? 'recruitment');
    } else if (['hero', 'company', 'solutions', 'commitments', 'product-lookup', 'cta'].includes(id)) {
      this.activeTab.set('home');
    }
    requestAnimationFrame(() => document.getElementById(card?.anchor ?? id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  @HostListener('window:home-section-navigation', ['$event'])
  onHomeSectionNavigation(event: Event): void {
    if (event instanceof CustomEvent && event.detail === 'product-lookup') {
      this.scrollToSection(event.detail);
    }
  }

  onTabKeydown(event: KeyboardEvent, index: number): void {
    const tabs = this.tabs();
    let next: number;
    switch (event.key) {
      case 'ArrowRight': next = (index + 1) % tabs.length; break;
      case 'ArrowLeft': next = (index - 1 + tabs.length) % tabs.length; break;
      case 'Home': next = 0; break;
      case 'End': next = tabs.length - 1; break;
      default: return;
    }
    event.preventDefault();
    this.activeTab.set(tabs[next].id);
    const tab = document.getElementById('home-tab-' + tabs[next].id);
    tab?.focus({ preventScroll: true });
    tab?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
}
