using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Advantage.API.Model
{
    public partial class Departments
    {
        //    public Departments()
        // {
        //     Users = new HashSet<Users>();
        // }

        public string Department { get; set; }
        public int MailStep { get; set; }
        public string Mandatory { get; set; }
        public string LtimeAccess { get; set; }
        public string DcostAccess { get; set; }
        public string AddDept { get; set; }
        public string ToBeAdded { get; set; }
        public string OnlyMail { get; set; }
        [Key]
        public int id { get; set; }

        // public virtual ICollection<Users> Users { get; set; }
    }
}
