using System;
using System.Collections.Generic;

namespace Advantage.API.Model
{
    public partial class DepChangeWhenApprV
    {
        public long DerogationId { get; set; }
        public string DepDer { get; set; }
        public int MailStep { get; set; }
        public string Training { get; set; }
        public string Approved { get; set; }
        public string Comment { get; set; }
        public string Rejected { get; set; }
        public string CancellationRequest { get; set; }
        public string CancellationReason { get; set; }
        public string Checked { get; set; }
        public string DerogationUser { get; set; }
        public DateTime? OperationDate { get; set; }
        public string DepAll { get; set; }
        public string CanEdit { get; set; }
    }
}
