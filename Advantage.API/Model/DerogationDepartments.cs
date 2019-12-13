using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Advantage.API.Model
{
    public partial class DerogationDepartments
    {
        public long DerogationId { get; set; }
        public string Department { get; set; }
        public int MailStep { get; set; }
        public string Training { get; set; }
        public string Approved { get; set; }
        public string Comment { get; set; }
        public string Rejected { get; set; }
        public string CancellationRequest { get; set; }
        public string CancellationReason { get; set; }
        public string DerogationUser { get; set; }
        public DateTime? OperationDate { get; set; }
        public string Checked { get; set; }
        [Key]
        public int id { get; set; }
    }
}
