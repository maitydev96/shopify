import { ShopifyappDw5dClient } from ".";
declare global {
    interface Window {
        /**
         * The Gadget client constructor
         *
         * @example
         * ```ts
         * const api = new ShopifyappDw5dClient();
         * ```
         */
        ShopifyappDw5dClient: typeof ShopifyappDw5dClient;
        /**
         * The Gadget client for ShopifyappDw5dClient
         * @deprecated Use window.ShopifyappDw5dClient instead
         */
        Gadget: typeof ShopifyappDw5dClient;
    }
}
