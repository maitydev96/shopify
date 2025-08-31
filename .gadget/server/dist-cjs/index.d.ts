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
import { Logger } from "./AmbientContext";
export { InvalidRecordError } from "@gadgetinc/api-client-core";
export * from "./metadataFileTypes";
export * from "./AmbientContext";
export * from "./AppConfigs";
export * from "./AppConfiguration";
export * from "./AppConnections";
import { AppConnections } from "./AppConnections";
export * from "./auth";
export * as DefaultEmailTemplates from "./email-templates/index";
export * from "./emails";
export { InvalidStateTransitionError } from "./errors";
export * from "./global-actions";
export * from "./routes";
export * from "./state-chart/index";
export * from "./types";
export * from "./ActionOptions";
export * from "./effects";
export * from "./utils";
export * from "./WebhookPayloadTypes";
export { preventCrossShopDataAccess, ShopifyBulkOperationState, ShopifySellingPlanGroupProductState, ShopifySellingPlanGroupProductVariantState, ShopifyShopState, ShopifySyncState, abortSync, finishBulkOperation, globalShopifySync, shopifySync } from "./shopify/index";
/**
* @internal
*/
import { Globals, actionContextLocalStorage } from "./globals";
export * from "./models/ShopifyShop";
export * from "./models/ShopifyGdprRequest";
export * from "./models/ShopifyOrder";
export * from "./models/ShopifyProduct";
export * from "./models/ShopifySync";
export * from "./models/OrderTracking";
export * from "./models/ProductCustomization";
export * from "./models/Session";
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
