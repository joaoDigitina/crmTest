using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Vidyano.Core.Extensions;
using Vidyano.Service;
using Vidyano.Service.Repository;

namespace CRM.Service.CustomActions
{
    public class ShowMap : CustomAction<CRMEntityModelContainer>
    {
        public override PersistentObject Execute(CustomActionArgs e)
        {
            // TODO: Implement custom action logic
            var lat = (decimal)e.Parent["Latitude"];
            var lon = (decimal)e.Parent["Longitude"];
            var po = Manager.Current.GetPersistentObject("ShowMap", targetContext: Context);
            po.Breadcrumb = "Esout a criar u popup";
            po.SetAttributeValue("Latitude", lat);
            po.SetAttributeValue("Longitude", lon);
            return po;
        }
    }
}