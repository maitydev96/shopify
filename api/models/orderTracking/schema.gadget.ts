import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "orderTracking" model, go to https://shopifyapp-dw5d.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "rwiHtY8Itecp",
  fields: {
    deliveryStatus: {
      type: "enum",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["pending", "shipped", "delivered"],
      validations: { required: true },
      storageKey: "bFk46NTO9TjT::pXcEfE04C-Sf",
    },
    order: {
      type: "belongsTo",
      parent: { model: "shopifyOrder" },
      storageKey: "csgLE_Kf36-2::5dodb2LbaiVl",
    },
    shippingCarrier: {
      type: "string",
      validations: { required: true },
      storageKey: "6tVpMak-C01e::9UZY3yg5ZDc7",
    },
    shop: {
      type: "belongsTo",
      parent: { model: "shopifyShop" },
      storageKey: "rwiHtY8Itecp-BelongsTo-Shop",
    },
    trackingNumber: {
      type: "string",
      validations: { required: true },
      storageKey: "KOBYd31gQIG_::THMgxCoXELZ0",
    },
  },
};
