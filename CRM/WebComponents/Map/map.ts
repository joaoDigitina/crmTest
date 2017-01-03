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
            this.latitude = <string>nLatitude;
            this.longitude = <string>nLongitude;

            this.app.showAlert(nLatitude);
            this.app.showAlert(nLongitude);
            let nMessage = `The city has latitude : (${nLatitude} and longitude : (${nLongitude})`;
            let nMessage2 = `<google-map latitude="${nLatitude}" longitude="${nLongitude}" api-key="AIzaSyAlbM-fbccC_USmfkZ0QDQoY1PjvTjXsfo"></google-map>`;

            this.message = nMessage2;
            this.app.showAlert(nLatitude);
            this.app.showAlert(nLongitude);
        }
    }
}