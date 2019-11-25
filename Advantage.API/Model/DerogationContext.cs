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

 
        // public virtual DbSet<Departments> Departments { get; set; }
        // public virtual DbSet<DerogationDepartments> DerogationDepartments { get; set; }
        // public virtual DbSet<DerogationDocs> DerogationDocs { get; set; }
        public virtual DbSet<DerogationHeaders> DerogationHeaders { get; set; }
      
        public virtual DbSet<DerogationHeadersItems> DerogationHeadersItems { get; set; }
        // public virtual DbSet<DerogationOperators> DerogationOperators { get; set; }
  
        // public virtual DbSet<PnPrices> PnPrices { get; set; }
        // public virtual DbSet<PnPricesLog> PnPricesLog { get; set; }
        // public virtual DbSet<PriceUploadLog> PriceUploadLog { get; set; }

  
        // public virtual DbSet<Users> Users { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
// #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//                 optionsBuilder.UseSqlServer("Server=DESKTOP-M9PRPPC\\MSSQLSERVER01;Database=Derogation_System;Trusted_Connection=True;");
//             }
        }

    }
}
}
