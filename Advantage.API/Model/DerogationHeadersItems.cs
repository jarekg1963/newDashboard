using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Advantage.API.Model
{
    public partial class DerogationHeadersItems
    {
        [Key]
        public long Id { get; set; }
        public long? DerogationId { get; set; }
        public string WorkOrder { get; set; }
        public string ModelName { get; set; }
        public string ProductCode { get; set; }
        public string PartNo { get; set; }
        public string PartNoDesc { get; set; }
        public string ApartNo { get; set; }
        public string ApartNoDesc { get; set; }
        public decimal? Quantity { get; set; }
        public decimal? Aquantity { get; set; }
        public string Reason { get; set; }
        public string Action { get; set; }
        public string Supplier { get; set; }
      
    }
}
