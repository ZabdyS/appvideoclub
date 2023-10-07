using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoClub.Data.Context
{
    public class VideoClubDbContextFactory : IDesignTimeDbContextFactory<VideoClubDbContext>
    {
        public VideoClubDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<VideoClubDbContext>();
            optionsBuilder.UseSqlServer("Server=.;Initial Catalog=VideoClub;Trusted_Connection=True;;TrustServerCertificate=true;MultipleActiveResultSets=true");

            return new VideoClubDbContext(optionsBuilder.Options);
        }
    }
}
