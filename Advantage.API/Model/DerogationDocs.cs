using System;
using System.Collections.Generic;

namespace Advantage.API.Model
{
    public partial class DerogationDocs
    {
        public long DerogationId { get; set; }
        public string DerogationUser { get; set; }
        public string Department { get; set; }
        public string DocName { get; set; }
        public DateTime InsertedDate { get; set; }
    }
}
