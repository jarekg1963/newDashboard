using System;
using System.Collections.Generic;

namespace Advantage.API.Model
{
    public partial class DerogationOperators
    {
        public long DerogationId { get; set; }
        public string StationName { get; set; }
        public int Hc { get; set; }
        public string DerogationUser { get; set; }
        public DateTime InsertedDate { get; set; }
    }
}
