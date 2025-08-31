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

// add the client to the window
window.ShopifyappDw5dClient = ShopifyappDw5dClient;

const previousValue: any = window.Gadget;

// add the client to the window at the old .Gadget property for backwards compatibility -- the ShopifyappDw5dClient property should be preferred instead
window.Gadget = ShopifyappDw5dClient;
(window.Gadget as any).previousValue = previousValue;
