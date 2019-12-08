using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Advantage.API.Model
{
    public partial class DerogationHeaders
    {
        [Key]
        public long DerogationId { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Owner { get; set; }
        public string Department { get; set; }
        public int Ltime { get; set; }
        public decimal Slt { get; set; }
        public decimal DcostP { get; set; }
        public decimal DcostF { get; set; }
        public Boolean Cancelled { get; set; }
        public Boolean Approved { get; set; }
        public Boolean Offline { get; set; }
        public string CancellationReason { get; set; }
    }
}
