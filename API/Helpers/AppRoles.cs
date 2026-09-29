using System.Collections.Generic;
using System.Linq;

namespace API.Helpers
{
    /// <summary>
    /// The four roles recognised by the application (backed by AspNetRoles / AspNetUserRoles),
    /// plus the combined role strings used with [Authorize(Roles = "...")].
    /// </summary>
    public static class AppRoles
    {
        public const string Admin = "Admin";
        public const string Manager = "Manager";
        public const string Staff = "Staff";
        public const string User = "User";

        /// <summary>Admin + Manager: allowed to edit the home page content.</summary>
        public const string ContentEditors = Admin + "," + Manager;

        /// <summary>Admin + Manager + Staff: allowed to write catalog data (products, brands,
        /// companies, entity images) from the back office.</summary>
        public const string BackOffice = Admin + "," + Manager + "," + Staff;

        public static readonly IReadOnlyList<string> All = new[] { Admin, Manager, Staff, User };

        public static bool IsKnown(string role) => All.Contains(role);
    }
}
