/// <reference path="./ActionContextTypes.d.ts" />
/**
* This is the Gadget server side types library for:
*
*       _                 _  __                                   _          ____      _ 
*   ___| |__   ___  _ __ (_)/ _|_   _  __ _ _ __  _ __         __| |_      _| ___|  __| |
*  / __| '_ \ / _ \| '_ \| | |_| | | |/ _` | '_ \| '_ \ _____ / _` \ \ /\ / /___ \ / _` |
*  \__ \ | | | (_) | |_) | |  _| |_| | (_| | |_) | |_) |_____| (_| |\ V  V / ___) | (_| |
*  |___/_| |_|\___/| .__/|_|_|  \__, |\__,_| .__/| .__/       \__,_| \_/\_/ |____/ \__,_|
*                  |_|          |___/      |_|   |_|                                     
*
* Built for environment `Development` at version 10
* Framework version: ^1.4.0
* Edit this app here: https://shopifyapp-dw5d.gadget.dev/edit
*/
import type { ShopifyappDw5dClient } from "@gadget-client/shopifyapp-dw5d";
import { Logger } from "./AmbientContext.js";
export { InvalidRecordError } from "@gadgetinc/api-client-core";
export * from "./metadataFileTypes.js";
export * from "./AmbientContext.js";
export * from "./AppConfigs.js";
export * from "./AppConfiguration.js";
export * from "./AppConnections.js";
import { AppConnections } from "./AppConnections.js";
export * from "./auth.js";
export * as DefaultEmailTemplates from "./email-templates/index.js";
export * from "./emails.js";
export { InvalidStateTransitionError } from "./errors.js";
export * from "./global-actions.js";
export * from "./routes.js";
export * from "./state-chart/index.js";
export * from "./types.js";
export * from "./ActionOptions.js";
export * from "./effects.js";
export * from "./utils.js";
export * from "./WebhookPayloadTypes.js";
export { preventCrossShopDataAccess, ShopifyBulkOperationState, ShopifySellingPlanGroupProductState, ShopifySellingPlanGroupProductVariantState, ShopifyShopState, ShopifySyncState, abortSync, finishBulkOperation, globalShopifySync, shopifySync } from "./shopify/index.js";
/**
* @internal
*/
import { Globals, actionContextLocalStorage } from "./globals.js";
export * from "./models/ShopifyShop.js";
export * from "./models/ShopifyGdprRequest.js";
export * from "./models/ShopifyOrder.js";
export * from "./models/ShopifyProduct.js";
export * from "./models/ShopifySync.js";
export * from "./models/OrderTracking.js";
export * from "./models/ProductCustomization.js";
export * from "./models/Session.js";
/**
* A map of connection name to instantiated connection objects for the app.
*/
declare let connections: AppConnections;
/**
* An instance of the Gadget logger
*/
declare let logger: Logger;
/**
* An instance of the Gadget API client that has admin permissions
*/
declare let api: ShopifyappDw5dClient;
/**
* This is used internally to set the connections.
* @internal
*/
export declare const setConnections: (appConnections: AppConnections) => void;
/**
* This is used internally to set the rootLogger.
* @internal
*/
export declare const setLogger: (rootLogger: Logger) => void;
/**
* This is used internally to set the client Instance
* @internal
*/
export declare const setApiClient: (client: ShopifyappDw5dClient) => void;
export { api, logger, connections };
/**
* @internal
*/
export { Globals, actionContextLocalStorage };
