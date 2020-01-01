using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Advantage.API.Model
{
    public partial class TblUser
    {
        [Key]
        public int UserId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public byte[] Salt { get; set; }
        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        public string position { get; set;}
    }
}