using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VideoClub.Data.Entities;

namespace VideoClub.Data.Configurations
{
    public class ElencoEntityConfiguration : IEntityTypeConfiguration<Elenco>
    {
        public void Configure(EntityTypeBuilder<Elenco> builder)
        {
            builder.ToTable("Elencos");
            builder.HasKey(i => i.Id);
            builder.Property(i => i.Id).UseIdentityColumn();

            builder.Property(i => i.Nombre)
                .IsRequired()
                .HasColumnType("nvarchar(100)");

            builder.Property(p => p.RolId)
                   .HasColumnType("Int")
                   .IsRequired();

            builder.Property(i => i.IsActive)
                .HasColumnType("bit");
 
        }
    }
}
