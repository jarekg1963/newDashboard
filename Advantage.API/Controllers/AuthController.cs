using Advantage.API.Model;
using Advantage.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace Advantage.API.Controllers


{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {


        private readonly DerogationContext _ctx;

        public AuthController(DerogationContext ctx)
        {
            _ctx = ctx;
        }

        [HttpPost("loginek")]

        public IActionResult loginek([FromBody]TblUser user, string password)
        {
            var jestUser = _ctx.TblUser.FirstOrDefault(x => x.FullName == user.FullName);
            if (jestUser == null) return Unauthorized();

            if (!VerifyPasswordHash(password, jestUser.PasswordHash, jestUser.PasswordSalt))
                return Unauthorized();

            // tworzymy token JWT 
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
                      {
                            new Claim(ClaimTypes.Name, jestUser.FullName),
                            new Claim(ClaimTypes.Role, jestUser.position)
                    };

            var tokeOptions = new JwtSecurityToken(
                             issuer: "http://localhost:5000",
                             audience: "http://localhost:5000",
                              claims: claims,
                             expires: DateTime.Now.AddMinutes(15),
                             signingCredentials: signinCredentials
                         );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            return Ok(new { Token = tokenString });

        }


        [HttpPost("register")]
        public IActionResult register([FromBody]TblUser user, string Password)
        {
            byte[] passwordHash, passwordSalt;

            // sprawdzenie czy istniej już użytkownik . 

            if (_ctx.TblUser.Any(x => x.FullName == user.FullName))
                return BadRequest("User already exist ");

            CreatePasswordHashSalt(Password, out passwordHash, out passwordSalt);
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            _ctx.TblUser.Add(user);
            _ctx.SaveChanges();
            return Ok(); ;

        }


        // GET api/values
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]LoginModel user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }

            if (user.UserName == "j" && user.Password == "g")
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                // Prawa dostepu dla grupy 
                var claims = new List<Claim>
               {
                   new Claim(ClaimTypes.Name, user.UserName),
                   new Claim(ClaimTypes.Role, "Manager")
              };


                // var claims = new List<Claim>
                //       {
                //             new Claim(ClaimTypes.Name, user.UserName),
                //             new Claim(ClaimTypes.Role, "Operator")
                //     };


                var tokeOptions = new JwtSecurityToken(
                    issuer: "http://localhost:5000",
                    audience: "http://localhost:5000",
                     // claims: new List<Claim>(),      // dla uzytkownikow bez grup 
                     claims: claims,
                    expires: DateTime.Now.AddMinutes(15),
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString });
            }
            else
            {
                return Unauthorized();
            }
        }

        private void CreatePasswordHashSalt(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                        return false;
                }
                return true;
            }

        }
    }
}