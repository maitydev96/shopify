import { pipe, map } from "wonka";
import { assert, GadgetConnection, AuthenticationMode, InternalModelManager, GadgetClientError, enqueueActionRunner, BackgroundActionHandle } from "@gadgetinc/api-client-core";
import { buildInlineComputedView } from "./builder.js";
import { ShopifyShopManager } from "./models/ShopifyShop.js";
import { ShopifyGdprRequestManager } from "./models/ShopifyGdprRequest.js";
import { ShopifyOrderManager } from "./models/ShopifyOrder.js";
import { ShopifyProductManager } from "./models/ShopifyProduct.js";
import { ShopifySyncManager } from "./models/ShopifySync.js";
import { OrderTrackingManager } from "./models/OrderTracking.js";
import { ProductCustomizationManager } from "./models/ProductCustomization.js";
import { SessionManager } from "./models/Session.js";
import { CurrentSessionManager } from "./models/CurrentSession.js";
import { DefaultShopifyShopSelection as DefaultShopifyShopSelection2 } from "./models/ShopifyShop.js";
import { DefaultShopifyGdprRequestSelection as DefaultShopifyGdprRequestSelection2 } from "./models/ShopifyGdprRequest.js";
import { DefaultShopifyOrderSelection as DefaultShopifyOrderSelection2 } from "./models/ShopifyOrder.js";
import { DefaultShopifyProductSelection as DefaultShopifyProductSelection2 } from "./models/ShopifyProduct.js";
import { DefaultShopifySyncSelection as DefaultShopifySyncSelection2 } from "./models/ShopifySync.js";
import { DefaultOrderTrackingSelection as DefaultOrderTrackingSelection2 } from "./models/OrderTracking.js";
import { DefaultProductCustomizationSelection as DefaultProductCustomizationSelection2 } from "./models/ProductCustomization.js";
import { DefaultSessionSelection as DefaultSessionSelection2 } from "./models/Session.js";
const productionEnv = "production";
const fallbackEnv = "development";
const availableAuthenticationModes = [
  "apiKey",
  "browserSession",
  "anonymous",
  "internalAuthToken",
  "internal",
  "custom"
];
const maybeGetAuthenticationModeOptionsFromClientOptions = (options) => {
  const topLevelAuthModes = {};
  for (const key of availableAuthenticationModes) {
    if (key in options) {
      topLevelAuthModes[key] = options[key];
    }
  }
  if ("authenticationMode" in options && Object.keys(topLevelAuthModes).length > 0) {
    throw new GadgetClientError(
      "Declaring authentication modes at the top level and under the `authenticationMode` key at the same time is not allowed."
    );
  }
  if ("authenticationMode" in options) {
    return options.authenticationMode;
  }
  if (Object.keys(topLevelAuthModes).length === 0) {
    return void 0;
  }
  return topLevelAuthModes;
};
const getImplicitEnv = () => {
  try {
    return process.env.GADGET_ENV;
  } catch (error) {
    return void 0;
  }
};
class ShopifyappDw5dClient {
  constructor(options) {
    /** Executes an inline computed view. */
    this.view = buildInlineComputedView(this, {
      type: "computedView",
      operationName: "gellyView",
      functionName: "view",
      gqlFieldName: "gellyView",
      namespace: null,
      variables: {
        query: { type: "String", required: true },
        args: { type: "JSONObject" }
      }
    });
    /**
     * The list of environments with a customized API root endpoint
     */
    this.apiRoots = { "development": "https://shopifyapp-dw5d--development.gadget.app/", "production": "https://shopifyapp-dw5d.gadget.app/" };
    this.applicationId = "265761";
    /** Start a transaction against the Gadget backend which will atomically commit (or rollback). */
    this.transaction = async (callback) => {
      return await this.connection.transaction(callback);
    };
    /**
    * Get a new direct upload token for file uploads to directly to cloud storage.
    * See https://docs.gadget.dev/guides/storing-files#direct-uploads-using-tokens for more information
    * @return { url: string, token: string } A `url` to upload one file to, and a token for that file to pass back to Gadget as an action input.
    */
    this.getDirectUploadToken = async () => {
      const result = await this.query("query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }", { nonce: Math.random().toString(36).slice(2, 7) }, {
        requestPolicy: "network-only"
      });
      return result.gadgetMeta.directUploadToken;
    };
    let inSSRContext = false;
    this.options = options;
    try {
      inSSRContext = !!(import.meta.env && import.meta.env.SSR);
    } catch (error) {
    }
    if (inSSRContext) {
      const api = globalThis.GadgetGlobals?.api;
      if (api) {
        return api.actAsSession;
      }
    }
    this.environment = (options?.environment ?? getImplicitEnv() ?? fallbackEnv).toLocaleLowerCase();
    let apiRoot;
    if (this.apiRoots[this.environment]) {
      apiRoot = this.apiRoots[this.environment];
    } else {
      const envPart = this.environment == productionEnv ? "" : `--${this.environment}`;
      apiRoot = `https://shopifyapp-dw5d${envPart}.gadget.app`;
    }
    const exchanges = { ...options?.exchanges };
    if (this.environment !== productionEnv) {
      const devHarnessExchange = ({ forward }) => {
        return (operations$) => {
          const operationResult$ = forward(operations$);
          return pipe(
            operationResult$,
            map((result) => {
              try {
                if (typeof window !== "undefined" && typeof CustomEvent === "function") {
                  const event = new CustomEvent("gadget:devharness:graphqlresult", { detail: result });
                  window.dispatchEvent(event);
                }
              } catch (error) {
                console.warn("[gadget] error dispatching gadget dev harness event", error);
              }
              return result;
            })
          );
        };
      };
      exchanges.beforeAll = [
        devHarnessExchange,
        ...exchanges.beforeAll ?? []
      ];
    }
    const connectionOptions = {
      endpoint: new URL("api/graphql", apiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: options?.authenticationMode,
      ...options,
      exchanges,
      environment: this.environment
    };
    const authenticationMode = maybeGetAuthenticationModeOptionsFromClientOptions(options ?? {});
    connectionOptions.authenticationMode = authenticationMode ?? (typeof window == "undefined" ? { anonymous: true } : { browserSession: true });
    this.connection = new GadgetConnection(connectionOptions);
    if (typeof window != "undefined" && this.connection.authenticationMode == AuthenticationMode.APIKey && !options?.authenticationMode?.dangerouslyAllowBrowserApiKey) {
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    }
    if (typeof options?.authenticationMode === "undefined" && typeof window !== "undefined" && window.shopify?.idToken) {
      this.connection.setAuthenticationMode({
        custom: {
          async processFetch(_input, init) {
            const headers = new Headers(init.headers);
            const idToken = await window.shopify.idToken();
            headers.append("Authorization", "ShopifySessionToken " + idToken);
            init.headers ?? (init.headers = {});
            headers.forEach(function(value, key) {
              init.headers[key] = value;
            });
          },
          async processTransactionConnectionParams(params) {
            const idToken = await window.shopify.idToken();
            params.auth.shopifySessionToken = idToken;
          }
        }
      });
    }
    this.shopifyShop = new ShopifyShopManager(this.connection);
    this.shopifyGdprRequest = new ShopifyGdprRequestManager(this.connection);
    this.shopifyOrder = new ShopifyOrderManager(this.connection);
    this.shopifyProduct = new ShopifyProductManager(this.connection);
    this.shopifySync = new ShopifySyncManager(this.connection);
    this.orderTracking = new OrderTrackingManager(this.connection);
    this.productCustomization = new ProductCustomizationManager(this.connection);
    this.session = new SessionManager(this.connection);
    this.currentSession = new CurrentSessionManager(this.connection);
    this.internal = {
      shopifyShop: new InternalModelManager("shopifyShop", this.connection, { "pluralApiIdentifier": "shopifyShops", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyGdprRequest: new InternalModelManager("shopifyGdprRequest", this.connection, { "pluralApiIdentifier": "shopifyGdprRequests", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyOrder: new InternalModelManager("shopifyOrder", this.connection, { "pluralApiIdentifier": "shopifyOrders", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyProduct: new InternalModelManager("shopifyProduct", this.connection, { "pluralApiIdentifier": "shopifyProducts", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifySync: new InternalModelManager("shopifySync", this.connection, { "pluralApiIdentifier": "shopifySyncs", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      orderTracking: new InternalModelManager("orderTracking", this.connection, { "pluralApiIdentifier": "orderTrackings", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      productCustomization: new InternalModelManager("productCustomization", this.connection, { "pluralApiIdentifier": "productCustomizations", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      session: new InternalModelManager("session", this.connection, { "pluralApiIdentifier": "sessions", "hasAmbiguousIdentifiers": false, "namespace": [] })
    };
  }
  /**
   * Returns a new Client instance that will call the Gadget API as the application's admin user.
   * This can only be used for API clients using internal authentication.
   * @returns {ShopifyappDw5dClient} A new ShopifyappDw5dClient instance with admin authentication
   */
  get actAsAdmin() {
    assert(this.options?.authenticationMode?.internal, `actAsAdmin can only be used for API clients using internal authentication, this client is using ${JSON.stringify(this.options?.authenticationMode)}`);
    return new ShopifyappDw5dClient({
      ...this.options,
      authenticationMode: {
        internal: {
          ...this.options.authenticationMode.internal,
          actAsSession: false
        }
      }
    });
  }
  /**
   * Returns a new ShopifyappDw5dClient instance that will call the Gadget API as with the permission of the current session.
   * This can only be used for API clients using internal authentication.
   * @returns {ShopifyappDw5dClient} A new ShopifyappDw5dClient instance with session authentication
   */
  get actAsSession() {
    assert(this.options?.authenticationMode?.internal, "actAsSession can only be used for API clients using internal authentication");
    return new ShopifyappDw5dClient({
      ...this.options,
      authenticationMode: {
        internal: {
          ...this.options.authenticationMode.internal,
          actAsSession: true
        }
      }
    });
  }
  /** Run an arbitrary GraphQL query. */
  async query(graphQL, variables, options) {
    const { data, error } = await this.connection.currentClient.query(graphQL, variables, options).toPromise();
    if (error)
      throw error;
    return data;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(graphQL, variables, options) {
    const { data, error } = await this.connection.currentClient.mutation(graphQL, variables, options).toPromise();
    if (error)
      throw error;
    return data;
  }
  /**
   * `fetch` function that works the same as the built-in `fetch` function, but automatically passes authentication information for this API client.
   *
   * @example
   * await api.fetch("https://myapp--development.gadget.app/foo/bar");
   *
   * @example
   * // fetch a relative URL from the endpoint this API client is configured to fetch from
   * await api.fetch("/foo/bar");
   **/
  async fetch(input, init = {}) {
    return await this.connection.fetch(input, init);
  }
  async enqueue(action, inputOrOptions, maybeOptions) {
    assert(action, ".enqueue must be passed an action as the first argument but was passed undefined");
    let input;
    let options;
    if (typeof maybeOptions !== "undefined") {
      input = inputOrOptions;
      options = maybeOptions;
    } else if (!action.variables || Object.keys(action.variables).length == 0) {
      input = {};
      options = inputOrOptions;
    } else {
      if (typeof inputOrOptions == "string") {
        input = { id: inputOrOptions };
      } else {
        input = inputOrOptions;
      }
      options = {};
    }
    return await enqueueActionRunner(this.connection, action, input, options);
  }
  /**
   * Returns a handle for a given background action id
   *
   * @param action The action that was enqueued
   * @param id The id of the background action
   *
   * @example
   * const handle = api.handle(api.widget.update, "app-job-12346");
   *
   * @example
   * const handle = api.handle(api.someGlobalAction, "app-job-56789");
   **/
  handle(action, id) {
    return new BackgroundActionHandle(this.connection, action, id);
  }
  toString() {
    return `ShopifyappDw5dClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
ShopifyappDw5dClient.prototype[Symbol.for("gadget/modelRelationships")] = { "shopifyShop": { "syncs": { "type": "HasMany", "model": "shopifySync" } }, "shopifyGdprRequest": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrder": { "shop": { "type": "BelongsTo", "model": "shopifyShop" }, "tracking": { "type": "HasOne", "model": "orderTracking" } }, "shopifyProduct": { "shop": { "type": "BelongsTo", "model": "shopifyShop" }, "customizations": { "type": "HasMany", "model": "productCustomization" } }, "shopifySync": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "orderTracking": { "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "productCustomization": { "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "session": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } } };
const Client = ShopifyappDw5dClient;
export {
  Client,
  DefaultOrderTrackingSelection2 as DefaultOrderTrackingSelection,
  DefaultProductCustomizationSelection2 as DefaultProductCustomizationSelection,
  DefaultSessionSelection2 as DefaultSessionSelection,
  DefaultShopifyGdprRequestSelection2 as DefaultShopifyGdprRequestSelection,
  DefaultShopifyOrderSelection2 as DefaultShopifyOrderSelection,
  DefaultShopifyProductSelection2 as DefaultShopifyProductSelection,
  DefaultShopifyShopSelection2 as DefaultShopifyShopSelection,
  DefaultShopifySyncSelection2 as DefaultShopifySyncSelection,
  ShopifyappDw5dClient,
  maybeGetAuthenticationModeOptionsFromClientOptions
};
//# sourceMappingURL=Client.js.map
