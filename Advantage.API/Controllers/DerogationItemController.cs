using Advantage.API.Model;
using Microsoft.AspNetCore.Mvc;


using System.Linq;
using System.Net;

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


        [HttpPut("{id}")]
        public IActionResult UpdateItem(int id ,  [FromBody]DerogationHeadersItems di)
        {
            var entity = _ctx.DerogationHeadersItems.FirstOrDefault(e => e.Id == id);
            if (entity == null)
            {
                return (BadRequest("Item was mot found "));
            }
            else
            {
               entity.Action = di.Action;
                 entity.WorkOrder = di.WorkOrder;
                 entity.ModelName = di.ModelName;
                entity.ProductCode = di.ProductCode;
                 entity.PartNo = di.PartNo;
                 entity.PartNoDesc = di.PartNoDesc;
                 entity.ApartNo = di.ApartNo;
                 entity.ApartNoDesc = di.ApartNo;
                 entity.Quantity = di.Quantity;
                 entity.Aquantity = di.Aquantity;
                 entity.Reason = di.Reason;
                 entity.Supplier = di.Supplier;
                _ctx.SaveChanges();              
                return Ok(entity);

            }

        }
    }
}