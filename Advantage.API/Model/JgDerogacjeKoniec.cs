using System;
using System.Collections.Generic;

namespace Advantage.API.Model
{
    public partial class JgDerogacjeKoniec
    {
        public string Checked { get; set; }
        public long DerogationId { get; set; }
        public DateTime? Koniec { get; set; }
    }
}
