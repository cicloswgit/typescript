"use strict";
let product1 = {
    name: 'Lorena',
    price: 200,
    itemPurchased(message) {
        console.log(message + ' ' + this.name);
    }
};
product1.itemPurchased('The product was purchased by');
//# sourceMappingURL=item_interface.js.map