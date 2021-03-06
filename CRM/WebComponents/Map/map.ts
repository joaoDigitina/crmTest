namespace CRM.WebComponents {
    "use strict";

    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            map:Object,
            attribute: {
                type: Object,
                value : null
            },
            message:{
                type: Number,
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
        message: Number;
        map: Object;
 
        private async _addressLoad(e: TapEvent) {
            this.app.showAlert("Ola");
            let currentAttribute = this.attribute.parent;
            console.log(currentAttribute);
            let nLatitude = currentAttribute.getAttributeValue("Latitude");
            let nLongitude = currentAttribute.getAttributeValue("Longitude");
            this.latitude =  nLatitude.toNumber();
            this.longitude = nLongitude.toNumber();
            //example of getting content from DOM
            // Map is not avaible when we tap
            //var map = document.querySelector('#content');
        }
    }
}