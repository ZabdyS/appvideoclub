using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoClub.Data.Entities
{
    public class Elenco
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public int RolId { get; set; }
        public bool IsActive { get; set; } = true;
    }
}
