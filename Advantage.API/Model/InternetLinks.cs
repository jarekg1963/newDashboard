using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Advantage.API.Model
{
    public partial class InternetLinks
    {
  
        public string InternetLink { get; set; }
        public string Description { get; set; }
        public string InternetGroup { get; set; }
        public string Remarks { get; set; }
      
        [Key]
        public int Id { get; set; }

    }
}
