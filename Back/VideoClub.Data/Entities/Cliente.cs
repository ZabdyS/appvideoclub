using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoClub.Data.Entities
{
    public class Cliente
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Cedula { get; set; } = string.Empty;
        public int TarjetaCredito { get; set; }
        public decimal LimiteCredito { get; set; } = 0.00m;
        public string TipoPersona { get; set; } = string.Empty;
        public bool IsActive { get; set; } = true;

    }
}
