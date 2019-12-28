using Advantage.API.Model;
using Advantage.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Text;

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

        [HttpGet("{id}")]

        public IActionResult Get(int id)
        {
            var response = _ctx.TblUser.Where(d => d.UserId == id);
            return Ok(response);
        }


        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, [FromBody]TblUser di)
        {
            var entity = _ctx.TblUser.FirstOrDefault(e => e.UserId == id);
            if (entity == null)
            {
                return (BadRequest("Item was mot found "));
            }
            else
            {
                entity.FullName = di.FullName;
                entity.Email = di.Email;
                entity.position = di.position;
                _ctx.SaveChanges();
                return Ok(entity);

            }

        }

        [HttpPost]
        public IActionResult Post([FromBody]TblUser di)
        {
            var response = _ctx.TblUser.Add(di);
            _ctx.SaveChanges();

            return Ok();
        }

        [HttpPost("registerNewUser")]
        public IActionResult registerNewUser([FromBody]TblUser user, string Password)
        {
            byte[] passwordHash, passwordSalt;

            // sprawdzenie czy istniej już użytkownik . 

            // if (_ctx.TblUser.Any(x => x.FullName == user.FullName))
            //     return BadRequest("User already exist ");

            CreatePasswordHashSalt(Password, out passwordHash, out passwordSalt);
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;


            _ctx.TblUser.Add(user);
            _ctx.SaveChanges();
            return Ok(); ;
        }

        private void CreatePasswordHashSalt(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var us = _ctx.TblUser.FirstOrDefault(t => t.UserId == id);
            if (us == null)
            {
                return NotFound();
            }
            _ctx.TblUser.Remove(us);
            _ctx.SaveChanges();
            return new NoContentResult();
        }


    }
}