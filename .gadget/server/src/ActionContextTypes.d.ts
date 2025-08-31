import "path";

import { UpdateShopifyShopActionContext } from "./models/ShopifyShop";

import { InstallShopifyShopActionContext } from "./models/ShopifyShop";

import { ReinstallShopifyShopActionContext } from "./models/ShopifyShop";

import { UninstallShopifyShopActionContext } from "./models/ShopifyShop";

import { CreateShopifyGdprRequestActionContext } from "./models/ShopifyGdprRequest";

import { UpdateShopifyGdprRequestActionContext } from "./models/ShopifyGdprRequest";

import { CreateShopifyOrderActionContext } from "./models/ShopifyOrder";

import { UpdateShopifyOrderActionContext } from "./models/ShopifyOrder";

import { DeleteShopifyOrderActionContext } from "./models/ShopifyOrder";

import { CreateShopifyProductActionContext } from "./models/ShopifyProduct";

import { UpdateShopifyProductActionContext } from "./models/ShopifyProduct";

import { DeleteShopifyProductActionContext } from "./models/ShopifyProduct";

import { AbortShopifySyncActionContext } from "./models/ShopifySync";

import { CompleteShopifySyncActionContext } from "./models/ShopifySync";

import { ErrorShopifySyncActionContext } from "./models/ShopifySync";

import { RunShopifySyncActionContext } from "./models/ShopifySync";

import { CreateOrderTrackingActionContext } from "./models/OrderTracking";

import { UpdateOrderTrackingActionContext } from "./models/OrderTracking";

import { DeleteOrderTrackingActionContext } from "./models/OrderTracking";

import { CreateProductCustomizationActionContext } from "./models/ProductCustomization";

import { UpdateProductCustomizationActionContext } from "./models/ProductCustomization";

import { DeleteProductCustomizationActionContext } from "./models/ProductCustomization";




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

