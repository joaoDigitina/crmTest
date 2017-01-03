namespace MyCRM.WebComponents {
    "use strict";
    //The register part of the component is where we define our bound variables . Kinda like mixins in react . We can also define default values using value
    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            addresses: Object,
            address: {
                type: Object,
                value: null
            }
        },
        // We need to use observers to notify our application of changes. In this case our observer here will see notify as soon as the address is changed.
        forwardObservers: [
            "address.isDirty",
            "addresses.items"
        ]
    }, "crm")//crm prefix.

    export class Addresses extends Vidyano.WebComponents.WebComponent {
        // After we define or "mixins" as generic objects on the register we cast them down here . addresss is a Vidyano Query and address is a persistent object , remeber the only bind we have so far
        // from the html side is the addressItem 
        addresses: Vidyano.Query;
        address: Vidyano.PersistentObject;

        //We need to declare our fuction as async since we will be using async operations
        private async _addressTap(e: TapEvent) {
            // We cast down our address item  from a generic object to the proper query result item . Remeber typescript is strongly typed!!
            const addressItem = <Vidyano.QueryResultItem>e.model.addressItem;
            // We use the await so we can use a promise . Here we are just getting our persistent object after the tap
            this.address = await addressItem.getPersistentObject();
            // After displaying our address we being the edit right away,
            this.address.beginEdit();
        }
        // Method to save address on the button
        private async _saveaddress() {
            try {
                // we can access to bound and registered properties like react, just use this . Save is a method related to persistent objects
                await this.address.save();
                // After we save we go to edit mode
                //this.address.beginEdit();
                //this.app.showAlert("address saved");
                //this.app.service.getQuery(this.addresses.id).then((res)=>{
                //    debugger;
                //    res.setNotification("Joao");
                //});
                //this.app.service.executeQuery(this.addresses.parent, this.addresses).then((res: Vidyano.Query) => {
                //    debugger;
                //    res.setNotification("Hugo");
                    
                //});
            }
            catch (e) {
                this.app.showAlert(e, Vidyano.NotificationType.Error);
            }
        }

        private async _showOrdersCount() {
            // Remember that we have already bound the address on tap . Also remeber that you can get the queries ( detail) from the persistent object.
            const details = <Vidyano.Query>this.address.queries["address_SalesOrderDetails"];
            // The query wont execute immediatly we need to use searc 
            if (!details.hasSearched)
                await details.search();
            // just showing the query
            this.app.showAlert(details.totalItems.toString());
        }

        private _increaseMargin() {
            // we get the current value of this custom style variable
            let margin = parseInt(this.customStyle["--crm-addresss-address-margin"]) || 0;
            // increased
            margin++;
            // We set it back , domt forget the pixels . String interpolation is like '${variableName}px'
            this.customStyle["--crm-addresss-address-margin"] = `${margin}px`;
            // we update the styles to change it 
            this.updateStyles();
        }

        private _track(e: PolymerTrackEvent, detail: PolymerTrackDetail) {
            // The polymerTrackDetail lets us know if its moving 
            //If its moving 
            if (detail.state === "track") {
                //we just change the customstyle variable to translate the moved distance
                this.customStyle["--crm-addresss-address-transform"] = `translate(${detail.dx}px, ${detail.dy}px)`;
                // Update the styles
                this.updateStyles();
            }
        }

        private _isSelectedaddress(address: Vidyano.PersistentObject, addressItem: Vidyano.QueryResultItem): boolean {
            //So we send the address we have binded here on typescrit and EACH address item so we can figure out which one the user selected.
            // VERY CAREFUL . because the default value for our mixins is UNDEFINED . We need to define it as null on the register.
            return address != null && address.objectId === addressItem.id;
        }
    }
}