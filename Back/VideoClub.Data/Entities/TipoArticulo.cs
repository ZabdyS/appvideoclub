using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoClub.Data.Entities
{
    public class TipoArticulo
    {
        public int Id { get; set; }
        public string Descripcion { get; set; } = string.Empty;
        public bool IsActive { get; set; } = true;

    }
}
