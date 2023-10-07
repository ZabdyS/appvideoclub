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
    public class IdiomasEntityConfiguration : IEntityTypeConfiguration<Idioma>
    {
        public void Configure(EntityTypeBuilder<Idioma> builder)
        {
            builder.ToTable("Idiomas");
            builder.HasKey(i => i.Id);
            builder.Property(i => i.Id).UseIdentityColumn();

            builder.Property(i => i.Descripcion)
                .IsRequired()
                .HasColumnType("nvarchar(100)");

            builder.Property(i => i.IsActive)
                .HasColumnType("bit");


            builder.HasData(
                new Idioma
                {
                    Id = 1,
                    Descripcion = "Español",
                    IsActive = true,
                },
                new Idioma
                {
                    Id = 2,
                    Descripcion = "Ingles",
                    IsActive = true,
                },
                new Idioma
                {   Id = 3,
                    Descripcion = "Frances",
                    IsActive = true,
                });

        }
    }
}
