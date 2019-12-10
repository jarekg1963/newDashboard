using Advantage.API.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Advantage.API.Controllers
{
    [Route("api/[controller]")]
    public class DerogationHeaderController : ControllerBase
    {


        private readonly DerogationContext _ctx;

        public DerogationHeaderController(DerogationContext ctx)
        {
            _ctx = ctx;
        }
        [HttpGet]

        public IActionResult Get()
        {
            var response = _ctx.DerogationHeaders.ToList();
            return Ok(response);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var response = _ctx.DerogationHeaders.FirstOrDefault(d => d.DerogationId == id);
            return Ok(response);
        }

        [HttpGet("GetByDate")]
        public IActionResult GetByDate([FromQuery] DateTime dateOd, DateTime dateDo)
        {
            var response = _ctx.DerogationHeaders.Where(c => (c.CreatedDate >= dateOd) && (c.CreatedDate <= dateDo)).ToList();
            return Ok(response);

        }

        [HttpPost]
        public IActionResult Post([FromBody] DerogationHeaders derogationheader)
        {
            var entity = _ctx.DerogationHeaders.Add(derogationheader);
            _ctx.SaveChanges();

            var lastId = _ctx.DerogationHeaders.OrderByDescending(h => h.DerogationId).First();
            return Ok(lastId.DerogationId);
        }

        [HttpDelete("{id}")]

        public IActionResult Delete(int id)
        {

            var entityItem = _ctx.DerogationHeadersItems.FirstOrDefault(i => i.DerogationId == id );
            if (entityItem != null) return StatusCode(500, "Derogation has items , first delete items");
            
            var entity = _ctx.DerogationHeaders.SingleOrDefault(h => h.DerogationId == id);
            if (entity == null) return NotFound("zły numer ID");

            _ctx.DerogationHeaders.Remove(entity);
            _ctx.SaveChanges();


            return Ok();


        }
    }
}