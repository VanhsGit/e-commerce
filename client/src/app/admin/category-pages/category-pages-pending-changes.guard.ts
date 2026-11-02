import { CanDeactivateFn } from '@angular/router';
import { CategoryPagesAdminPageComponent } from './category-pages-admin-page.component';

/** Hỏi xác nhận nếu form xe điện hoặc máy nông nghiệp còn thay đổi chưa lưu. */
export const categoryPagesPendingChangesGuard: CanDeactivateFn<CategoryPagesAdminPageComponent> =
  (component) => component.hasUnsavedChanges() ? component.confirmLeave() : true;
