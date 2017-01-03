var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MyCRM;
(function (MyCRM) {
    var WebComponents;
    (function (WebComponents) {
        "use strict";
        //The register part of the component is where we define our bound variables . Kinda like mixins in react . We can also define default values using value
        var Products = (function (_super) {
            __extends(Products, _super);
            function Products() {
                return _super.apply(this, arguments) || this;
            }
            //We need to declare our fuction as async since we will be using async operations
            Products.prototype._productTap = function (e) {
                return __awaiter(this, void 0, void 0, function () {
                    var productItem, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                productItem = e.model.productItem;
                                // We use the await so we can use a promise . Here we are just getting our persistent object after the tap
                                _a = this;
                                return [4 /*yield*/, productItem.getPersistentObject()];
                            case 1:
                                // We use the await so we can use a promise . Here we are just getting our persistent object after the tap
                                _a.product = _b.sent();
                                // After displaying our product we being the edit right away,
                                this.product.beginEdit();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            // Method to save product on the button
            Products.prototype._saveProduct = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                // we can access to bound and registered properties like react, just use this . Save is a method related to persistent objects
                                return [4 /*yield*/, this.product.save()];
                            case 1:
                                // we can access to bound and registered properties like react, just use this . Save is a method related to persistent objects
                                _a.sent();
                                // After we save we go to edit mode
                                this.product.beginEdit();
                                this.app.showAlert("Product saved");
                                return [3 /*break*/, 3];
                            case 2:
                                e_1 = _a.sent();
                                this.app.showAlert(e_1, Vidyano.NotificationType.Error);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
            Products.prototype._showOrdersCount = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var details;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                details = this.product.queries["Product_SalesOrderDetails"];
                                if (!!details.hasSearched)
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, details.search()];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2:
                                // just showing the query
                                this.app.showAlert(details.totalItems.toString());
                                return [2 /*return*/];
                        }
                    });
                });
            };
            Products.prototype._increaseMargin = function () {
                // we get the current value of this custom style variable
                var margin = parseInt(this.customStyle["--crm-products-product-margin"]) || 0;
                // increased
                margin++;
                // We set it back , domt forget the pixels . String interpolation is like '${variableName}px'
                this.customStyle["--crm-products-product-margin"] = margin + "px";
                // we update the styles to change it 
                this.updateStyles();
            };
            Products.prototype._track = function (e, detail) {
                // The polymerTrackDetail lets us know if its moving 
                //If its moving 
                if (detail.state === "track") {
                    //we just change the customstyle variable to translate the moved distance
                    this.customStyle["--crm-products-product-transform"] = "translate(" + detail.dx + "px, " + detail.dy + "px)";
                    // Update the styles
                    this.updateStyles();
                }
            };
            Products.prototype._isSelectedProduct = function (product, productItem) {
                //So we send the product we have binded here on typescrit and EACH product item so we can figure out which one the user selected.
                // VERY CAREFUL . because the default value for our mixins is UNDEFINED . We need to define it as null on the register.
                return product != null && product.objectId === productItem.id;
            };
            return Products;
        }(Vidyano.WebComponents.WebComponent));
        Products = __decorate([
            Vidyano.WebComponents.WebComponent.register({
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
            }, "crm") //crm prefix.
        ], Products);
        WebComponents.Products = Products;
    })(WebComponents = MyCRM.WebComponents || (MyCRM.WebComponents = {}));
})(MyCRM || (MyCRM = {}));
