"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Client_exports = {};
__export(Client_exports, {
  Client: () => Client,
  DefaultOrderTrackingSelection: () => import_OrderTracking2.DefaultOrderTrackingSelection,
  DefaultProductCustomizationSelection: () => import_ProductCustomization2.DefaultProductCustomizationSelection,
  DefaultSessionSelection: () => import_Session2.DefaultSessionSelection,
  DefaultShopifyGdprRequestSelection: () => import_ShopifyGdprRequest2.DefaultShopifyGdprRequestSelection,
  DefaultShopifyOrderSelection: () => import_ShopifyOrder2.DefaultShopifyOrderSelection,
  DefaultShopifyProductSelection: () => import_ShopifyProduct2.DefaultShopifyProductSelection,
  DefaultShopifyShopSelection: () => import_ShopifyShop2.DefaultShopifyShopSelection,
  DefaultShopifySyncSelection: () => import_ShopifySync2.DefaultShopifySyncSelection,
  ShopifyappDw5dClient: () => ShopifyappDw5dClient,
  maybeGetAuthenticationModeOptionsFromClientOptions: () => maybeGetAuthenticationModeOptionsFromClientOptions
});
module.exports = __toCommonJS(Client_exports);
var import_wonka = require("wonka");
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_builder = require("./builder.js");
var import_ShopifyShop = require("./models/ShopifyShop.js");
var import_ShopifyGdprRequest = require("./models/ShopifyGdprRequest.js");
var import_ShopifyOrder = require("./models/ShopifyOrder.js");
var import_ShopifyProduct = require("./models/ShopifyProduct.js");
var import_ShopifySync = require("./models/ShopifySync.js");
var import_OrderTracking = require("./models/OrderTracking.js");
var import_ProductCustomization = require("./models/ProductCustomization.js");
var import_Session = require("./models/Session.js");
var import_CurrentSession = require("./models/CurrentSession.js");
var import_ShopifyShop2 = require("./models/ShopifyShop.js");
var import_ShopifyGdprRequest2 = require("./models/ShopifyGdprRequest.js");
var import_ShopifyOrder2 = require("./models/ShopifyOrder.js");
var import_ShopifyProduct2 = require("./models/ShopifyProduct.js");
var import_ShopifySync2 = require("./models/ShopifySync.js");
var import_OrderTracking2 = require("./models/OrderTracking.js");
var import_ProductCustomization2 = require("./models/ProductCustomization.js");
var import_Session2 = require("./models/Session.js");
const import_meta = {};
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
    throw new import_api_client_core.GadgetClientError(
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
    this.view = (0, import_builder.buildInlineComputedView)(this, {
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
    var _a, _b, _c;
    let inSSRContext = false;
    this.options = options;
    try {
      inSSRContext = !!(import_meta.env && import_meta.env.SSR);
    } catch (error) {
    }
    if (inSSRContext) {
      const api = (_a = globalThis.GadgetGlobals) == null ? void 0 : _a.api;
      if (api) {
        return api.actAsSession;
      }
    }
    this.environment = ((options == null ? void 0 : options.environment) ?? getImplicitEnv() ?? fallbackEnv).toLocaleLowerCase();
    let apiRoot;
    if (this.apiRoots[this.environment]) {
      apiRoot = this.apiRoots[this.environment];
    } else {
      const envPart = this.environment == productionEnv ? "" : `--${this.environment}`;
      apiRoot = `https://shopifyapp-dw5d${envPart}.gadget.app`;
    }
    const exchanges = { ...options == null ? void 0 : options.exchanges };
    if (this.environment !== productionEnv) {
      const devHarnessExchange = ({ forward }) => {
        return (operations$) => {
          const operationResult$ = forward(operations$);
          return (0, import_wonka.pipe)(
            operationResult$,
            (0, import_wonka.map)((result) => {
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
      authenticationMode: options == null ? void 0 : options.authenticationMode,
      ...options,
      exchanges,
      environment: this.environment
    };
    const authenticationMode = maybeGetAuthenticationModeOptionsFromClientOptions(options ?? {});
    connectionOptions.authenticationMode = authenticationMode ?? (typeof window == "undefined" ? { anonymous: true } : { browserSession: true });
    this.connection = new import_api_client_core.GadgetConnection(connectionOptions);
    if (typeof window != "undefined" && this.connection.authenticationMode == import_api_client_core.AuthenticationMode.APIKey && !((_b = options == null ? void 0 : options.authenticationMode) == null ? void 0 : _b.dangerouslyAllowBrowserApiKey)) {
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    }
    if (typeof (options == null ? void 0 : options.authenticationMode) === "undefined" && typeof window !== "undefined" && ((_c = window.shopify) == null ? void 0 : _c.idToken)) {
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
    this.shopifyShop = new import_ShopifyShop.ShopifyShopManager(this.connection);
    this.shopifyGdprRequest = new import_ShopifyGdprRequest.ShopifyGdprRequestManager(this.connection);
    this.shopifyOrder = new import_ShopifyOrder.ShopifyOrderManager(this.connection);
    this.shopifyProduct = new import_ShopifyProduct.ShopifyProductManager(this.connection);
    this.shopifySync = new import_ShopifySync.ShopifySyncManager(this.connection);
    this.orderTracking = new import_OrderTracking.OrderTrackingManager(this.connection);
    this.productCustomization = new import_ProductCustomization.ProductCustomizationManager(this.connection);
    this.session = new import_Session.SessionManager(this.connection);
    this.currentSession = new import_CurrentSession.CurrentSessionManager(this.connection);
    this.internal = {
      shopifyShop: new import_api_client_core.InternalModelManager("shopifyShop", this.connection, { "pluralApiIdentifier": "shopifyShops", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyGdprRequest: new import_api_client_core.InternalModelManager("shopifyGdprRequest", this.connection, { "pluralApiIdentifier": "shopifyGdprRequests", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyOrder: new import_api_client_core.InternalModelManager("shopifyOrder", this.connection, { "pluralApiIdentifier": "shopifyOrders", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyProduct: new import_api_client_core.InternalModelManager("shopifyProduct", this.connection, { "pluralApiIdentifier": "shopifyProducts", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifySync: new import_api_client_core.InternalModelManager("shopifySync", this.connection, { "pluralApiIdentifier": "shopifySyncs", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      orderTracking: new import_api_client_core.InternalModelManager("orderTracking", this.connection, { "pluralApiIdentifier": "orderTrackings", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      productCustomization: new import_api_client_core.InternalModelManager("productCustomization", this.connection, { "pluralApiIdentifier": "productCustomizations", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      session: new import_api_client_core.InternalModelManager("session", this.connection, { "pluralApiIdentifier": "sessions", "hasAmbiguousIdentifiers": false, "namespace": [] })
    };
  }
  /**
   * Returns a new Client instance that will call the Gadget API as the application's admin user.
   * This can only be used for API clients using internal authentication.
   * @returns {ShopifyappDw5dClient} A new ShopifyappDw5dClient instance with admin authentication
   */
  get actAsAdmin() {
    var _a, _b, _c;
    (0, import_api_client_core.assert)((_b = (_a = this.options) == null ? void 0 : _a.authenticationMode) == null ? void 0 : _b.internal, `actAsAdmin can only be used for API clients using internal authentication, this client is using ${JSON.stringify((_c = this.options) == null ? void 0 : _c.authenticationMode)}`);
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
    var _a, _b;
    (0, import_api_client_core.assert)((_b = (_a = this.options) == null ? void 0 : _a.authenticationMode) == null ? void 0 : _b.internal, "actAsSession can only be used for API clients using internal authentication");
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
    (0, import_api_client_core.assert)(action, ".enqueue must be passed an action as the first argument but was passed undefined");
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
    return await (0, import_api_client_core.enqueueActionRunner)(this.connection, action, input, options);
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
    return new import_api_client_core.BackgroundActionHandle(this.connection, action, id);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Client,
  DefaultOrderTrackingSelection,
  DefaultProductCustomizationSelection,
  DefaultSessionSelection,
  DefaultShopifyGdprRequestSelection,
  DefaultShopifyOrderSelection,
  DefaultShopifyProductSelection,
  DefaultShopifyShopSelection,
  DefaultShopifySyncSelection,
  ShopifyappDw5dClient,
  maybeGetAuthenticationModeOptionsFromClientOptions
});
//# sourceMappingURL=Client.js.map
