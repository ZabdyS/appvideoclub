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
    public class TipoArticuloEntityConfiguration : IEntityTypeConfiguration<TipoArticulo>
    {
        public void Configure(EntityTypeBuilder<TipoArticulo> builder)
        {
            builder.ToTable("TiposArticulos");
            builder.HasKey(i => i.Id);
            builder.Property(i => i.Id).UseIdentityColumn();

            builder.Property(i => i.Descripcion)
                .IsRequired()
                .HasColumnType("nvarchar(100)");

            builder.Property(i => i.IsActive)
                .HasColumnType("bit");

        }
    }
}
