import { signal } from '@angular/core';
import { BrandAdminPageComponent } from './brand-admin-page.component';

describe('BrandAdminPageComponent filters', () => {
  it('reloads the API list with the applied search and status filters', () => {
    const component = Object.create(BrandAdminPageComponent.prototype) as BrandAdminPageComponent;
    Object.assign(component, {
      search: signal(''),
      statusFilter: signal<'active' | 'inactive' | null>(null),
      searchDraft: signal('  Honda  '),
      statusDraft: signal<'active' | 'inactive' | null>('active'),
    });
    spyOn(component, 'load');

    component.applyFilters();

    expect(component.load).toHaveBeenCalledWith({ search: 'Honda', isUsed: true });
  });
});
