import { CanDeactivateFn } from '@angular/router';
import { HomeContentAdminPageComponent } from './home-content-admin-page.component';

export const homeContentPendingChangesGuard: CanDeactivateFn<HomeContentAdminPageComponent> =
  (component) => component.hasUnsavedChanges() ? component.confirmLeave() : true;
