using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Vidyano.Core.Extensions;
using Vidyano.Service;
using Vidyano.Service.Charts;
using Vidyano.Service.ClientOperations;
using Vidyano.Service.Repository;

namespace CRM.Service
{
    public class AddressActions : PersistentObjectActions<CRMEntityModelContainer, Address>
    {
        protected override void SaveExisting(PersistentObject obj, Address entity)
        {
            base.SaveExisting(obj, entity);
            //var query = Manager.Current.GetQuery(obj.ContextProperty);
            //if (query != null)
            //    obj.QueueQueryRefresh(query);
        }
    }
}