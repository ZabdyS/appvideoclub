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
    public class ElencoArticuloEntityConfiguration : IEntityTypeConfiguration<ElencoArticulo>
    {
        public void Configure(EntityTypeBuilder<ElencoArticulo> builder)
        {
            builder.ToTable("ElencoArticulos");
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Id).UseIdentityColumn();

            builder.Property(p => p.ArticuloId)
                   .HasColumnType("Int")
                   .IsRequired();
        }
    }
}
