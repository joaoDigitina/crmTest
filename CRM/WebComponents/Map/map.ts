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
    }, "crm")//crm prefix.

    export class Map extends Vidyano.WebComponents.WebComponent {
        attribute: Vidyano.PersistentObjectAttribute;
        latitude: Number;
        longitude: Number;
        message: Number;
        private async _addressLoad(e: TapEvent) {
            let currentAttribute = this.attribute.parent;
            console.log(currentAttribute);
            let nLatitude = currentAttribute.getAttributeValue("Latitude");
            let nLongitude = currentAttribute.getAttributeValue("Longitude");
            this.latitude = nLatitude;
            this.longitude = nLongitude;
           
            //this.app.service.executeAction("ShowMap", this.attribute.parent).then((res) => {

            //});
        }
    }
}