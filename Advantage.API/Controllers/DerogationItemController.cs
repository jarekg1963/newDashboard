using Advantage.API.Model;
using Microsoft.AspNetCore.Mvc;


using System.Linq;


namespace Advantage.API.Controllers
{
    [Route("api/[controller]")]
    public class DerogationItemController : ControllerBase
    {
        private readonly DerogationContext _ctx;

        public DerogationItemController(DerogationContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]

        public IActionResult Get()
        {
            var response = _ctx.DerogationHeadersItems.ToList();
            return Ok(response);
        }

        [HttpGet("{id}")]

        public IActionResult Get(int id)
        {
            var response = _ctx.DerogationHeadersItems.Where(d => d.DerogationId == id);
            return Ok(response);
        }

        [HttpGet("GetById/{id}")]
        // [HttpGet("{id}")]
        // [Route("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            var response = _ctx.DerogationHeadersItems.Where(d => d.Id == id);
            return Ok(response);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var order = _ctx.DerogationHeadersItems.FirstOrDefault(t => t.Id == id);
            if (order == null)
            {
                return NotFound();
            }

            _ctx.DerogationHeadersItems.Remove(order);
            _ctx.SaveChanges();
            return new NoContentResult();
        }

    }
}