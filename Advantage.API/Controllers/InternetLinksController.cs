using Advantage.API.Model;
using Microsoft.AspNetCore.Mvc;


using System.Linq;
using System.Net;

namespace Advantage.API.Controllers
{
    [Route("api/[controller]")]
    public class InternetLinksController : ControllerBase
    {
        private readonly DerogationContext _ctx;

        public InternetLinksController(DerogationContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]

        public IActionResult Get()
        {
            var response = _ctx.InternetLinks.ToList();
            return Ok(response);
        }

        [HttpGet("{Id}")]

        public IActionResult Get(int Id)
        {
            var response = _ctx.InternetLinks.Where(d => d.Id == Id);
            return Ok(response);
        }

     
        [HttpDelete("{Id}")]
        public IActionResult Delete(int Id)
        {
            var order = _ctx.InternetLinks.FirstOrDefault(t => t.Id == Id);
            if (order == null)
            {
                return NotFound();
            }

            _ctx.InternetLinks.Remove(order);
            _ctx.SaveChanges();
            return new NoContentResult();
        }


        [HttpPut("{Id}")]
        public IActionResult UpdateItem(int Id ,  [FromBody]InternetLinks di)
        {
            var entity = _ctx.InternetLinks.FirstOrDefault(e => e.Id == Id);
            if (entity == null)
            {
                return (BadRequest("Item was mot found "));
            }
            else
            {
               entity.InternetLink = di.InternetLink;
               entity.Description = di.Description;
               entity.InternetGroup = di.InternetGroup;
               entity.Remarks = di.Remarks;
              
                _ctx.SaveChanges();              
                return Ok(entity);

            }

        }

         [HttpPost]
           public IActionResult Post([FromBody]InternetLinks di)
        {
            var response = _ctx.InternetLinks.Add(di);
            _ctx.SaveChanges();

            return Ok();
        }
    }
}