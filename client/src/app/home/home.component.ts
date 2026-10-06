import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { catchError, of } from 'rxjs';
import { ProductKind } from '../shared/models/product-category';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { CommitmentsSectionComponent } from './sections/commitments-section/commitments-section.component';
import { IndustrySectionComponent } from './sections/industry-section/industry-section.component';
import {
  DEFAULT_HOME_PAGE_CONTENT,
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

  readonly homeContent = signal(DEFAULT_HOME_PAGE_CONTENT);
  private readonly viewport = toSignal(
    inject(BreakpointObserver).observe('(max-width: 767.98px)'),
    { initialValue: { matches: false, breakpoints: {} } },
  );
  readonly isMobile = computed(() => this.viewport().matches);
  readonly activeTab = signal<HomeTab>('home');
  readonly tabs = computed(() => [
    { id: 'home' as HomeTab, label: this.homeContent().navigation.homeLabel, icon: 'home' },
    ...this.homeContent().hero.cards.map((card) => ({ id: card.kind as HomeTab, label: card.title, icon: card.icon })),
    { id: 'recruitment' as HomeTab, label: this.homeContent().navigation.recruitmentLabel, icon: 'group' },
  ]);
  readonly activeIndustry = computed(() =>
    this.homeContent().industries.find((industry) => industry.kind === this.activeTab())
      ?? this.homeContent().industries[0],
  );

  ngOnInit(): void {
    this.homeContentService.get().pipe(catchError(() => of(null))).subscribe((response) => {
      const content = resolveHomePageContent(response?.content);
      if (content) this.homeContent.set(content);
    });
  }

  scrollToSection(id: string): void {
    // Hero vẫn phát 'warranty' (nhãn/anchor lưu trong nội dung cũ); khối này nay là tra cứu sản phẩm.
    if (id === 'warranty') id = 'product-lookup';
    const card = this.homeContent().hero.cards.find((item) => item.anchor === id || item.kind === id);
    if (card || id === 'recruitment') {
      this.activeTab.set(card?.kind ?? 'recruitment');
    } else if (['hero', 'company', 'solutions', 'commitments', 'product-lookup', 'cta'].includes(id)) {
      this.activeTab.set('home');
    }
    requestAnimationFrame(() => document.getElementById(card?.anchor ?? id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
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
