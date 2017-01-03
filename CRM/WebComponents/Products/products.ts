namespace MyCRM.WebComponents {
    "use strict";

    //The register part of the component is where we define our bound variables . Kinda like mixins in react . We can also define default values using value
    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            products: Object,
            product: {
                type: Object,
                value: null
            }
        },
        // We need to use observers to notify our application of changes. In this case our observer here will see notify as soon as the product is changed.
        forwardObservers: [
            "product.isDirty"
        ]
    }, "crm")//crm prefix.

    export class Products extends Vidyano.WebComponents.WebComponent {
        // After we define or "mixins" as generic objects on the register we cast them down here . Products is a Vidyano Query and product is a persistent object , remeber the only bind we have so far
        // from the html side is the productItem 
        products: Vidyano.Query;
        product: Vidyano.PersistentObject;

        //We need to declare our fuction as async since we will be using async operations
        private async _productTap(e: TapEvent) {
            // We cast down our product item  from a generic object to the proper query result item . Remeber typescript is strongly typed!!
            const productItem = <Vidyano.QueryResultItem>e.model.productItem;
           // We use the await so we can use a promise . Here we are just getting our persistent object after the tap
            this.product = await productItem.getPersistentObject();
            // After displaying our product we being the edit right away,
            this.product.beginEdit();
        }
        // Method to save product on the button
        private async _saveProduct() {
            try {
                // we can access to bound and registered properties like react, just use this . Save is a method related to persistent objects
                await this.product.save();
                // After we save we go to edit mode
                this.product.beginEdit();
                this.app.showAlert("Product saved");
            }
            catch (e) {
                this.app.showAlert(e, Vidyano.NotificationType.Error);
            }
        }

        private async _showOrdersCount() {
            // Remember that we have already bound the product on tap . Also remeber that you can get the queries ( detail) from the persistent object.
            const details = <Vidyano.Query>this.product.queries["Product_SalesOrderDetails"];
            // The query wont execute immediatly we need to use searc 
            if (!details.hasSearched)
                await details.search();
            // just showing the query
            this.app.showAlert(details.totalItems.toString());
        }

        private _increaseMargin() {
            // we get the current value of this custom style variable
            let margin = parseInt(this.customStyle["--crm-products-product-margin"]) || 0;
            // increased
            margin++;
            // We set it back , domt forget the pixels . String interpolation is like '${variableName}px'
            this.customStyle["--crm-products-product-margin"] = `${margin}px`;
            // we update the styles to change it 
            this.updateStyles();
        }

        private _track(e: PolymerTrackEvent, detail: PolymerTrackDetail) {
            // The polymerTrackDetail lets us know if its moving 
            //If its moving 
            if (detail.state === "track") {
                //we just change the customstyle variable to translate the moved distance
                this.customStyle["--crm-products-product-transform"] = `translate(${detail.dx}px, ${detail.dy}px)`;
                // Update the styles
                this.updateStyles();
            }
        }

        private _isSelectedProduct(product: Vidyano.PersistentObject, productItem: Vidyano.QueryResultItem): boolean {
            //So we send the product we have binded here on typescrit and EACH product item so we can figure out which one the user selected.
            // VERY CAREFUL . because the default value for our mixins is UNDEFINED . We need to define it as null on the register.
            return product != null && product.objectId === productItem.id;
        }
    }
}