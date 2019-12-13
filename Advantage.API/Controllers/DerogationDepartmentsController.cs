using Advantage.API.Model;
using Microsoft.AspNetCore.Mvc;
using System;

using System.Linq;


namespace Advantage.API.Controllers
{
    [Route("api/[controller]")]
    public class DerogationDepartmentsController : ControllerBase
    {


        private readonly DerogationContext _ctx;

        public DerogationDepartmentsController(DerogationContext ctx)
        {
            _ctx = ctx;
        }
        [HttpGet]

        public IActionResult Get()
        {
            var response = _ctx.Departments.ToList();
            return Ok(response);
        }

       
    }
}