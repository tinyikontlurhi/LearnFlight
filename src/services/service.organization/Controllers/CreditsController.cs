using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using service.organization.data;
using service.organization.models;

namespace service.organization.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreditsController : ControllerBase
    {
        private readonly DataContext _context;

        public CreditsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Credits
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Credits>>> Getcredits()
        {
            return await _context.credits.ToListAsync();
        }

        // GET: api/Credits/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Credits>> GetCredits(int id)
        {
            var credits = await _context.credits.FindAsync(id);

            if (credits == null)
            {
                return NotFound();
            }

            return credits;
        }

        // PUT: api/Credits/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCredits(int id, Credits credits)
        {
            if (id != credits.Id)
            {
                return BadRequest();
            }

            _context.Entry(credits).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CreditsExists(id))
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

        // POST: api/Credits
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Credits>> PostCredits(Credits credits)
        {
            _context.credits.Add(credits);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCredits", new { id = credits.Id }, credits);
        }

        // DELETE: api/Credits/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCredits(int id)
        {
            var credits = await _context.credits.FindAsync(id);
            if (credits == null)
            {
                return NotFound();
            }

            _context.credits.Remove(credits);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CreditsExists(int id)
        {
            return _context.credits.Any(e => e.Id == id);
        }
    }
}
