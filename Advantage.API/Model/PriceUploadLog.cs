using System;
using System.Collections.Generic;

namespace Advantage.API.Model
{
    public partial class PriceUploadLog
    {
        public string FileName { get; set; }
        public string DerogationUser { get; set; }
        public DateTime OperationDate { get; set; }
    }
}
