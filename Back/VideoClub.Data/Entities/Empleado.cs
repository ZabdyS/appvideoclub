using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoClub.Data.Entities
{
    public class Empleado
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Cedula { get; set; } = string.Empty;
        public int TurnoId { get; set; }
        public decimal PorcientoComision { get; set; } = 0.00m;
        public DateTime FechaIngreso { get; set; } 
        public bool IsActive { get; set; } = true;
    }
}
