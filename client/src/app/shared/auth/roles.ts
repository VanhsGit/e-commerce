import { User } from '../models/user';

/** 4 role hợp lệ ở backend. */
export const ROLE_ADMIN = 'Admin';
export const ROLE_MANAGER = 'Manager';
export const ROLE_STAFF = 'Staff';
export const ROLE_USER = 'User';

export const ALL_ROLES = [ROLE_ADMIN, ROLE_MANAGER, ROLE_STAFF, ROLE_USER] as const;

/** Admin, Manager hoặc Staff: được vào khu vực quản trị ("back office"). */
export const BACK_OFFICE_ROLES = [ROLE_ADMIN, ROLE_MANAGER, ROLE_STAFF];

/** Admin hoặc Manager: được lưu nội dung trang chủ. */
export const HOME_CONTENT_ROLES = [ROLE_ADMIN, ROLE_MANAGER];

/** Chỉ Admin: quản lý người dùng. */
export const USERS_ROLES = [ROLE_ADMIN];

/** true nếu user có ít nhất 1 role trong danh sách `roles`. Thiếu roles -> coi như []. */
export function hasAnyRole(
  user: Pick<User, 'roles'> | null | undefined,
  roles: readonly string[],
): boolean {
  if (!user) return false;
  const userRoles = user.roles ?? [];
  if (!roles.length) return true;
  return userRoles.some((r) => roles.includes(r));
}

/** true nếu user thuộc back office (Admin/Manager/Staff). */
export function isBackOffice(user: Pick<User, 'roles'> | null | undefined): boolean {
  return hasAnyRole(user, BACK_OFFICE_ROLES);
}
