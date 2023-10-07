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
    public class ArticuloEntityConfiguration : IEntityTypeConfiguration<Articulo>
    {
        public void Configure(EntityTypeBuilder<Articulo> builder)
        {
            builder.ToTable("Articulos");
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Id).UseIdentityColumn();

            builder.Property(p => p.Titulo)
                   .HasColumnType("VarChar(600)")
                   .IsRequired();
            builder.Property(p => p.RentaDia)
                   .HasColumnType("Decimal(8,2)")
                   .IsRequired();
            builder.Property(p => p.DiasRenta)
                   .HasColumnType("Int")
                   .IsRequired();
            builder.Property(p => p.EntregaTardia)
                   .HasColumnType("Decimal(8,2)")
                   .IsRequired();
            builder.Property(p => p.IsActive)
                   .HasColumnType("bit")
                   .IsRequired();
        }
    }
}
