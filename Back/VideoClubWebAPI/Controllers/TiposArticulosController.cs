using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VideoClub.Data.Context;
using VideoClub.Data.Entities;

namespace VideoClubWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TiposArticulosController : ControllerBase
    {
        private readonly VideoClubDbContext _context;

        public TiposArticulosController(VideoClubDbContext context)
        {
            _context = context;
        }

        // GET: api/TiposArticulos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoArticulo>>> GetTipoArticulos()
        {
          if (_context.TipoArticulos == null)
          {
              return NotFound();
          }
            return await _context.TipoArticulos.ToListAsync();
        }

        // GET: api/TiposArticulos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoArticulo>> GetTipoArticulo(int id)
        {
          if (_context.TipoArticulos == null)
          {
              return NotFound();
          }
            var tipoArticulo = await _context.TipoArticulos.FindAsync(id);

            if (tipoArticulo == null)
            {
                return NotFound();
            }

            return tipoArticulo;
        }

        // PUT: api/TiposArticulos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoArticulo(int id, TipoArticulo tipoArticulo)
        {
            if (id != tipoArticulo.Id)
            {
                return BadRequest();
            }

            _context.Entry(tipoArticulo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoArticuloExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TiposArticulos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TipoArticulo>> PostTipoArticulo(TipoArticulo tipoArticulo)
        {
          if (_context.TipoArticulos == null)
          {
              return Problem("Entity set 'VideoClubDbContext.TipoArticulos'  is null.");
          }
            _context.TipoArticulos.Add(tipoArticulo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoArticulo", new { id = tipoArticulo.Id }, tipoArticulo);
        }

        // DELETE: api/TiposArticulos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoArticulo(int id)
        {
            if (_context.TipoArticulos == null)
            {
                return NotFound();
            }
            var tipoArticulo = await _context.TipoArticulos.FindAsync(id);
            if (tipoArticulo == null)
            {
                return NotFound();
            }

            _context.TipoArticulos.Remove(tipoArticulo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoArticuloExists(int id)
        {
            return (_context.TipoArticulos?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
