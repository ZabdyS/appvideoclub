using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoClub.Data.Entities
{
    public class ElencoArticulo
    {
        public int Id { get; set; }
        public int ArticuloId { get; set; }
        public Articulo Articulo { get;} = new Articulo();
        public List<Elenco> Elencos { get; } = new List<Elenco>();

    }
}
