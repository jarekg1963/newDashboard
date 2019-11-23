using System;
using System.Collections.Generic;

namespace Advantage.API.Model
{
    public partial class DerogationHeaders
    {
        public long DerogationId { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Owner { get; set; }
        public string Department { get; set; }
        public int Ltime { get; set; }
        public decimal Slt { get; set; }
        public decimal DcostP { get; set; }
        public decimal DcostF { get; set; }
        public string Cancelled { get; set; }
        public string Approved { get; set; }
        public string Offline { get; set; }
        public string CancellationReason { get; set; }
    }
}
