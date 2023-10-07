using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VideoClub.Data.Configurations;
using VideoClub.Data.Entities;

namespace VideoClub.Data.Context
{
    public class VideoClubDbContext : DbContext
    {
        public DbSet<Articulo> Articulos { get; set; }
        public DbSet<TipoArticulo> TipoArticulos { get; set; }
        public DbSet<Idioma> Idiomas { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Elenco> Elencos { get; set; }
        public DbSet<ElencoArticulo> ElencoArticulos { get; set; }
        public DbSet<Empleado> Empleados { get; set; }
        public DbSet<Genero> Generos { get; set; }
        public DbSet<Rol> Roles { get; set; }
        public DbSet<Turno> Turnos { get; set; }
        public VideoClubDbContext(DbContextOptions<VideoClubDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("dbo");

            modelBuilder.ApplyConfiguration(new ArticuloEntityConfiguration());
            modelBuilder.ApplyConfiguration(new TipoArticuloEntityConfiguration());
            modelBuilder.ApplyConfiguration(new IdiomasEntityConfiguration());


            base.OnModelCreating(modelBuilder);
        }
    }
}
