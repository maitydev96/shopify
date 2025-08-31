import "path";

import { UpdateShopifyShopActionContext } from "./models/ShopifyShop.js";

import { InstallShopifyShopActionContext } from "./models/ShopifyShop.js";

import { ReinstallShopifyShopActionContext } from "./models/ShopifyShop.js";

import { UninstallShopifyShopActionContext } from "./models/ShopifyShop.js";

import { CreateShopifyGdprRequestActionContext } from "./models/ShopifyGdprRequest.js";

import { UpdateShopifyGdprRequestActionContext } from "./models/ShopifyGdprRequest.js";

import { CreateShopifyOrderActionContext } from "./models/ShopifyOrder.js";

import { UpdateShopifyOrderActionContext } from "./models/ShopifyOrder.js";

import { DeleteShopifyOrderActionContext } from "./models/ShopifyOrder.js";

import { CreateShopifyProductActionContext } from "./models/ShopifyProduct.js";

import { UpdateShopifyProductActionContext } from "./models/ShopifyProduct.js";

import { DeleteShopifyProductActionContext } from "./models/ShopifyProduct.js";

import { AbortShopifySyncActionContext } from "./models/ShopifySync.js";

import { CompleteShopifySyncActionContext } from "./models/ShopifySync.js";

import { ErrorShopifySyncActionContext } from "./models/ShopifySync.js";

import { RunShopifySyncActionContext } from "./models/ShopifySync.js";

import { CreateOrderTrackingActionContext } from "./models/OrderTracking.js";

import { UpdateOrderTrackingActionContext } from "./models/OrderTracking.js";

import { DeleteOrderTrackingActionContext } from "./models/OrderTracking.js";

import { CreateProductCustomizationActionContext } from "./models/ProductCustomization.js";

import { UpdateProductCustomizationActionContext } from "./models/ProductCustomization.js";

import { DeleteProductCustomizationActionContext } from "./models/ProductCustomization.js";




declare module "../../../api/models/shopifyShop/actions/update" {
  export type ActionRun = (params: UpdateShopifyShopActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: UpdateShopifyShopActionContext) => Promise<any>;
}


declare module "../../../api/models/shopifyShop/actions/install" {
  export type ActionRun = (params: InstallShopifyShopActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: InstallShopifyShopActionContext) => Promise<any>;
}


declare module "../../../api/models/shopifyShop/actions/reinstall" {
  export type ActionRun = (params: ReinstallShopifyShopActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: ReinstallShopifyShopActionContext) => Promise<any>;
}


declare module "../../../api/models/shopifyShop/actions/uninstall" {
  export type ActionRun = (params: UninstallShopifyShopActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: UninstallShopifyShopActionContext) => Promise<any>;
}


declare module "../../../api/models/shopifyGdprRequest/actions/create" {
  export type ActionRun = (params: CreateShopifyGdprRequestActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: CreateShopifyGdprRequestActionContext) => Promise<any>;
}


declare module "../../../api/models/shopifyGdprRequest/actions/update" {
  export type ActionRun = (params: UpdateShopifyGdprRequestActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: UpdateShopifyGdprRequestActionContext) => Promise<any>;
}


declare module "../../../api/models/shopifyOrder/actions/create" {
  export type ActionRun = (params: CreateShopifyOrderActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: CreateShopifyOrderActionContext) => Promise<any>;
}


declare module "../../../api/models/shopifyOrder/actions/update" {
  export type ActionRun = (params: UpdateShopifyOrderActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: UpdateShopifyOrderActionContext) => Promise<any>;
}


declare module "../../../api/models/shopifyOrder/actions/delete" {
  export type ActionRun = (params: DeleteShopifyOrderActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: DeleteShopifyOrderActionContext) => Promise<any>;
}


declare module "../../../api/models/shopifyProduct/actions/create" {
  export type ActionRun = (params: CreateShopifyProductActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: CreateShopifyProductActionContext) => Promise<any>;
}


declare module "../../../api/models/shopifyProduct/actions/update" {
  export type ActionRun = (params: UpdateShopifyProductActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: UpdateShopifyProductActionContext) => Promise<any>;
}


declare module "../../../api/models/shopifyProduct/actions/delete" {
  export type ActionRun = (params: DeleteShopifyProductActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: DeleteShopifyProductActionContext) => Promise<any>;
}


declare module "../../../api/models/shopifySync/actions/abort" {
  export type ActionRun = (params: AbortShopifySyncActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: AbortShopifySyncActionContext) => Promise<any>;
}


declare module "../../../api/models/shopifySync/actions/complete" {
  export type ActionRun = (params: CompleteShopifySyncActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: CompleteShopifySyncActionContext) => Promise<any>;
}


declare module "../../../api/models/shopifySync/actions/error" {
  export type ActionRun = (params: ErrorShopifySyncActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: ErrorShopifySyncActionContext) => Promise<any>;
}


declare module "../../../api/models/shopifySync/actions/run" {
  export type ActionRun = (params: RunShopifySyncActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: RunShopifySyncActionContext) => Promise<any>;
}


declare module "../../../api/models/orderTracking/actions/create" {
  export type ActionRun = (params: CreateOrderTrackingActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: CreateOrderTrackingActionContext) => Promise<any>;
}


declare module "../../../api/models/orderTracking/actions/update" {
  export type ActionRun = (params: UpdateOrderTrackingActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: UpdateOrderTrackingActionContext) => Promise<any>;
}


declare module "../../../api/models/orderTracking/actions/delete" {
  export type ActionRun = (params: DeleteOrderTrackingActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: DeleteOrderTrackingActionContext) => Promise<any>;
}


declare module "../../../api/models/productCustomization/actions/create" {
  export type ActionRun = (params: CreateProductCustomizationActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: CreateProductCustomizationActionContext) => Promise<any>;
}


declare module "../../../api/models/productCustomization/actions/update" {
  export type ActionRun = (params: UpdateProductCustomizationActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: UpdateProductCustomizationActionContext) => Promise<any>;
}


declare module "../../../api/models/productCustomization/actions/delete" {
  export type ActionRun = (params: DeleteProductCustomizationActionContext) => Promise<any>;
  export type ActionOnSuccess = (params: DeleteProductCustomizationActionContext) => Promise<any>;
}

