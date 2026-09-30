import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAppIcons } from '../../shared/icons/provide-app-icons';
import { DEFAULT_CATEGORY_PAGE_CONTENT } from '../../shared/models/category-page-content';
import { KIND_THEME } from '../../shared/models/kind-theme';
import { ProductKind } from '../../shared/models/product-category';
import { ApplianceHeroComponent } from './appliance-hero.component';
import { BikeHeroComponent } from './bike-hero.component';
import { MachineHeroComponent } from './machine-hero.component';

type AnyHero = BikeHeroComponent | MachineHeroComponent | ApplianceHeroComponent;

const CASES: [ProductKind, Type<AnyHero>][] = [
  ['bike', BikeHeroComponent],
  ['machine', MachineHeroComponent],
  ['appliance', ApplianceHeroComponent],
];

describe('industry heroes', () => {
  for (const [kind, component] of CASES) {
    describe(kind, () => {
      const hero = { ...DEFAULT_CATEGORY_PAGE_CONTENT[kind].hero, badge: 'Badge CMS', description: 'Mô tả CMS' };
      let fixture: ComponentFixture<AnyHero>;
      let root: HTMLElement;

      beforeEach(() => {
        TestBed.configureTestingModule({ providers: [provideAppIcons()] });
        fixture = TestBed.createComponent(component);
        fixture.componentRef.setInput('hero', hero);
        fixture.componentRef.setInput('theme', KIND_THEME[kind]);
        fixture.detectChanges();
        root = fixture.nativeElement as HTMLElement;
      });

      it('renders every hero string from the CMS object', () => {
        const text = root.textContent ?? '';
        for (const value of [
          'Badge CMS',
          hero.title,
          hero.highlightedTitle,
          'Mô tả CMS',
          hero.primaryCtaLabel,
          hero.secondaryCtaLabel,
          ...hero.metrics.flatMap((m) => [m.value, m.label]),
        ]) {
          expect(text).withContext(value).toContain(value);
        }
        expect(root.querySelector('img')?.getAttribute('alt')).toBe(hero.imageAlt);
      });

      it('emits primary and secondary outputs from the CTAs', () => {
        const primary = jasmine.createSpy('primary');
        const secondary = jasmine.createSpy('secondary');
        fixture.componentInstance.primary.subscribe(primary);
        fixture.componentInstance.secondary.subscribe(secondary);
        const buttons = root.querySelectorAll('button');
        buttons[0].click();
        buttons[1].click();
        expect(primary).toHaveBeenCalledTimes(1);
        expect(secondary).toHaveBeenCalledTimes(1);
      });
    });
  }

  it('appliance collage repeats the hero image', () => {
    TestBed.configureTestingModule({ providers: [provideAppIcons()] });
    const fixture = TestBed.createComponent(ApplianceHeroComponent);
    fixture.componentRef.setInput('hero', DEFAULT_CATEGORY_PAGE_CONTENT.appliance.hero);
    fixture.componentRef.setInput('theme', KIND_THEME.appliance);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('figure img').length).toBeGreaterThan(2);
  });
});
