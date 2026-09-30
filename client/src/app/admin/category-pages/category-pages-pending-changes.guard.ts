import { CanDeactivateFn } from '@angular/router';
import { CategoryPagesAdminPageComponent } from './category-pages-admin-page.component';

/** Hỏi xác nhận nếu bất kỳ form ngành hàng nào (xe điện / máy nông nghiệp / đồ điện) còn thay đổi chưa lưu. */
export const categoryPagesPendingChangesGuard: CanDeactivateFn<CategoryPagesAdminPageComponent> =
  (component) => component.hasUnsavedChanges() ? component.confirmLeave() : true;
