namespace CRM.WebComponents {
    "use strict";

    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            attribute: {
                type: Object,
                value : null
            },
            message:{
                type: String,
                value : null
            },
            latitude: {
                type: Number,
                value : null
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
        message: String;
        private async _addressLoad(e: TapEvent) {
            this.app.showAlert("Ola");
            let currentAttribute = this.attribute.parent;
            console.log(currentAttribute);
            let nLatitude = currentAttribute.getAttributeValue("Latitude");
            let nLongitude = currentAttribute.getAttributeValue("Longitude");
            this.latitude = nLatitude;
            this.longitude = nLongitude;
        }
    }
}