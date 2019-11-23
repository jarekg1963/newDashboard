using System;
using System.Collections.Generic;

namespace Advantage.API.Model
{
    public partial class UsersToMailV
    {
        public long DerogationId { get; set; }
        public string Department { get; set; }
        public int MailStep { get; set; }
        public string DerogationUser { get; set; }
        public string UserMailBase { get; set; }
    }
}
