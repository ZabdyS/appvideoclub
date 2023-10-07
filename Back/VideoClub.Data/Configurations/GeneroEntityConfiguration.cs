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
    public class GeneroEntityConfiguration : IEntityTypeConfiguration<Genero>
    {
        public void Configure(EntityTypeBuilder<Genero> builder)
        {
            builder.ToTable("Generos");
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Id).UseIdentityColumn();
            builder.Property(p => p.Descripcion)
                   .HasColumnType("VarChar(600)")
                   .IsRequired();
            builder.Property(p => p.IsActive)
                   .HasColumnType("bit")
                   .IsRequired();

            builder.HasData(
                    new Genero
                    {
                        Id = 1,
                        Descripcion = "Ciencia Ficción",
                        IsActive = true,
                    },
                    new Genero
                    {
                        Id = 2,
                        Descripcion = "Drama",
                        IsActive = true,
                    },
                    new Genero
                    {
                        Id = 3,
                        Descripcion = "Acción",
                        IsActive = true,
                    });

        }
    }
}
