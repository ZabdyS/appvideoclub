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
    public class ClienteEntityConfiguration : IEntityTypeConfiguration<Cliente>
    {
        public void Configure(EntityTypeBuilder<Cliente> builder)
        {
            builder.ToTable("Clientes");
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Id).UseIdentityColumn();

            builder.Property(p => p.Name)
                   .HasColumnType("VarChar(600)")
                   .IsRequired();
            
            builder.Property(p => p.Cedula)
                   .HasColumnType("char(13)")
                   .IsRequired();

            builder.Property(p => p.TarjetaCredito)
                   .HasColumnType("Int")
                   .IsRequired();

            builder.Property(p => p.LimiteCredito)
                   .HasColumnType("Decimal")
                   .HasPrecision(8,2)
                   .IsRequired();

            builder.Property(p => p.TipoPersona)
                   .HasColumnType("VarChar(600)")
                   .IsRequired();

            builder.Property(p => p.IsActive)
                   .HasColumnType("bit")
                   .IsRequired();
        }
    }
}
