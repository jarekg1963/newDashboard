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

    }
}