using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContext : IdentityDbContext<AppUser>
    {
        public AppIdentityDbContext(DbContextOptions<AppIdentityDbContext> options) : base(options)
        {
            
        }

        public DbSet<OtpChallenge> OtpChallenges { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<AppUser>().Property(x => x.IsUsed).HasDefaultValue(true);
            builder.Entity<Core.Entities.Identity.Address>().Property(x => x.IsUsed).HasDefaultValue(true);
            builder.Entity<OtpChallenge>(entity =>
            {
                entity.Property(x => x.NormalizedEmail).IsRequired().HasMaxLength(256);
                entity.Property(x => x.CodeHash).IsRequired().HasMaxLength(128);
                entity.Property(x => x.RequestIp).HasMaxLength(64);
                entity.Property(x => x.IsUsed).HasDefaultValue(true);
                entity.HasIndex(x => new { x.NormalizedEmail, x.IsUsed, x.CreatedAt });
                entity.HasIndex(x => x.RequestIp);
            });
        }
    }
}
