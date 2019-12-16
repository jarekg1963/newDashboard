using Advantage.API.Model;
using Microsoft.AspNetCore.Mvc;
using System;

using System.Linq;


namespace Advantage.API.Controllers
{
    [Route("api/[controller]")]
    public class DerogationUsersController : ControllerBase
    {


        private readonly DerogationContext _ctx;

        public DerogationUsersController(DerogationContext ctx)
        {
            _ctx = ctx;
        }
        [HttpGet]

        public IActionResult Get()
        {
            var response = _ctx.Users.ToList().OrderBy(d => d.DerogationUser);
            return Ok(response);
        }

       
    }
}