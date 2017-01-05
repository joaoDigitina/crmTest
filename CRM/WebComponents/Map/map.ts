namespace CRM.WebComponents {
    "use strict";

    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            attribute: {
                type: Object,
                value: null
            },
            message: {
                type: Number,
                value: null
            },
            latitude: {
                type: Number,
                value: null
            },
            longitude: {
                type: Number,
                value: null
            }
        },
        observers: [
            "_addressLoad(attribute,isAttached)"
        ]
    }, "crm")//crm prefix.

    export class Map extends Vidyano.WebComponents.WebComponent {
        attribute: Vidyano.PersistentObjectAttribute;
        latitude: Number;
        longitude: Number;
        message: Number;
        private async _addressLoad(attribute: Vidyano.PersistentObjectAttribute, isAttached: boolean) {
            if (!attribute || !isAttached)
            {
                return;
            }
   
            let nLatitude = attribute.parent.getAttributeValue("Latitude");
            let nLongitude = attribute.parent.getAttributeValue("Longitude");
            this.latitude = nLatitude;
            this.longitude = nLongitude;
           
            //this.app.service.executeAction("ShowMap", this.attribute.parent).then((res) => {

            //});
        }
    }
}