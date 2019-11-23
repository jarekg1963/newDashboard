using System;
using System.Collections.Generic;

namespace Advantage.API.Model
{
    public partial class UserRightsV
    {
        public string DerogationUser { get; set; }
        public string Department { get; set; }
        public string Admin { get; set; }
        public string CanCreate { get; set; }
        public string CanApprove { get; set; }
        public string InMail { get; set; }
        public int? MailStep { get; set; }
        public string LtimeAccess { get; set; }
        public string DcostAccess { get; set; }
    }
}
