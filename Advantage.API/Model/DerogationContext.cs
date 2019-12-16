using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Advantage.API.Model
{
    public partial class DerogationContext : DbContext
    {
        public DerogationContext()
        {
        }

        public DerogationContext(DbContextOptions<DerogationContext> options)
            : base(options)
        {
        }



        public virtual DbSet<DerogationHeaders> DerogationHeaders { get; set; }

        public virtual DbSet<DerogationHeadersItems> DerogationHeadersItems { get; set; }

        public virtual DbSet<Departments> Departments { get; set; }

        public virtual DbSet<Users> Users { get; set; }

        public virtual DbSet<TblUser> TblUser { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

            }
        }

 protected override void OnModelCreating(ModelBuilder modelBuilder)
 {
      modelBuilder.Entity<TblUser>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FullName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password).HasMaxLength(128);

                entity.Property(e => e.Salt).HasMaxLength(128);
            });
 }


    }
}
