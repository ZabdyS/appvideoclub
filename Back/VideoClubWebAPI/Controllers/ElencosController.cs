using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VideoClub.Data.Context;
using VideoClub.Data.Entities;

namespace VideoClubWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ElencosController : ControllerBase
    {
        private readonly VideoClubDbContext _context;

        public ElencosController(VideoClubDbContext context)
        {
            _context = context;
        }

        // GET: api/Elencos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Elenco>>> GetElencos()
        {
          if (_context.Elencos == null)
          {
              return NotFound();
          }
            return await _context.Elencos.ToListAsync();
        }

        // GET: api/Elencos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Elenco>> GetElenco(int id)
        {
          if (_context.Elencos == null)
          {
              return NotFound();
          }
            var elenco = await _context.Elencos.FindAsync(id);

            if (elenco == null)
            {
                return NotFound();
            }

            return elenco;
        }

        // PUT: api/Elencos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutElenco(int id, Elenco elenco)
        {
            if (id != elenco.Id)
            {
                return BadRequest();
            }

            _context.Entry(elenco).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ElencoExists(id))
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

        // POST: api/Elencos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Elenco>> PostElenco(Elenco elenco)
        {
          if (_context.Elencos == null)
          {
              return Problem("Entity set 'VideoClubDbContext.Elencos'  is null.");
          }
            _context.Elencos.Add(elenco);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetElenco", new { id = elenco.Id }, elenco);
        }

        // DELETE: api/Elencos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteElenco(int id)
        {
            if (_context.Elencos == null)
            {
                return NotFound();
            }
            var elenco = await _context.Elencos.FindAsync(id);
            if (elenco == null)
            {
                return NotFound();
            }

            _context.Elencos.Remove(elenco);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ElencoExists(int id)
        {
            return (_context.Elencos?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
