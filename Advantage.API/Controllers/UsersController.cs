using Advantage.API.Model;
using Advantage.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Advantage.API.Demo.Controllers
{
    [Route("api/[controller]")]

    public class UsersController : Controller
    {
        private readonly DerogationContext _ctx;

        public UsersController(DerogationContext ctx)
        {
            _ctx = ctx;
        }
        // [HttpGet, Authorize(Roles = "Manager")]

        public IActionResult Get()
        {
            var response = _ctx.TblUser.OrderBy(s => s.UserId).ToList();
            return Ok(response);
        }



    }
}