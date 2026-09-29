import { BACK_OFFICE_ROLES, hasAnyRole, isBackOffice } from './roles';

describe('hasAnyRole', () => {
  it('returns false when user is null/undefined', () => {
    expect(hasAnyRole(null, ['Admin'])).toBeFalse();
    expect(hasAnyRole(undefined, ['Admin'])).toBeFalse();
  });

  it('treats missing roles as empty array', () => {
    expect(hasAnyRole({}, ['Admin'])).toBeFalse();
    expect(hasAnyRole({ roles: undefined }, ['Admin'])).toBeFalse();
  });

  it('returns true when required roles list is empty (no restriction)', () => {
    expect(hasAnyRole({ roles: [] }, [])).toBeTrue();
    expect(hasAnyRole(null, [])).toBeFalse();
  });

  it('returns true when user has at least one matching role', () => {
    expect(hasAnyRole({ roles: ['Staff'] }, ['Admin', 'Staff'])).toBeTrue();
  });

  it('returns false when user has none of the matching roles', () => {
    expect(hasAnyRole({ roles: ['User'] }, ['Admin', 'Manager', 'Staff'])).toBeFalse();
  });
});

describe('isBackOffice', () => {
  it('is true for Admin, Manager or Staff', () => {
    for (const role of BACK_OFFICE_ROLES) {
      expect(isBackOffice({ roles: [role] })).toBeTrue();
    }
  });

  it('is false for plain User role or no roles', () => {
    expect(isBackOffice({ roles: ['User'] })).toBeFalse();
    expect(isBackOffice({ roles: [] })).toBeFalse();
    expect(isBackOffice(null)).toBeFalse();
  });
});
