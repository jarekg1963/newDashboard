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
    }
}