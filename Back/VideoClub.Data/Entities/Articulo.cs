using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoClub.Data.Entities
{
    public class Articulo
    {
        public int Id { get; set; }
        public string Titulo { get; set; } = string.Empty;
        public decimal RentaDia { get; set; }
        public int DiasRenta { get; set; }
        public decimal EntregaTardia { get; set; }
        public bool IsActive { get; set; } = true;

        public int TipoArticuloId { get; set; }
    }
}
