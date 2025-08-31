import { ShopifyappDw5dClient } from ".";
window.ShopifyappDw5dClient = ShopifyappDw5dClient;
const previousValue = window.Gadget;
window.Gadget = ShopifyappDw5dClient;
window.Gadget.previousValue = previousValue;
//# sourceMappingURL=iife-export.js.map
