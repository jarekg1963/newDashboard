using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Advantage.API.Model
{
    public partial class Users
    {
       
       [Key]
        public int id { get; set; }
        public string DerogationUser { get; set; }
        public string Department { get; set; }
        public string Admin { get; set; }
        public string CanCreate { get; set; }
        public string CanApprove { get; set; }
        public string InMail { get; set; }
        public string UserMailBase { get; set; }

        // public virtual Departments DepartmentNavigation { get; set; }
    }
}
