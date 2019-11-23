using System;
using System.Collections.Generic;

namespace Advantage.API.Model
{
    public partial class DpallVsAppV
    {
        public long DerogationId { get; set; }
        public int MailStep { get; set; }
        public int? Qtyall { get; set; }
        public int Qtyapp { get; set; }
        public int? Qtydif { get; set; }
        public int? MaxStep { get; set; }
    }
}
