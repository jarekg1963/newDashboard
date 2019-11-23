using System;
using System.Collections.Generic;

namespace Advantage.API.Model
{
    public partial class PnPricesLog
    {
        public string PartNo { get; set; }
        public string PartNoDesc { get; set; }
        public decimal PnPriceRub { get; set; }
        public DateTime UploadDate { get; set; }
        public DateTime OperationDate { get; set; }
    }
}
