using System;
using System.Collections.Generic;

namespace Advantage.API.Model
{
    public partial class TurnToApproveV
    {
        public long DerogationId { get; set; }
        public string Department { get; set; }
        public int MailStep { get; set; }
        public string Approved { get; set; }
        public string Rejected { get; set; }
        public int? NextStep { get; set; }
    }
}
