import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "productCustomization" model, go to https://shopifyapp-dw5d.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "S3BgY4d24_VL",
  fields: {
    customizationType: {
      type: "string",
      validations: { required: true },
      storageKey: "NQHYZtLBDZ9w::0FjhWu_bfXpV",
    },
    customizationValue: {
      type: "string",
      validations: { required: true },
      storageKey: "9Fiqg6Eige_0::2ezE7WiPwmU_",
    },
    product: {
      type: "belongsTo",
      parent: { model: "shopifyProduct" },
      storageKey: "20HdRZeru6Wq::WJPzrdWcBKof",
    },
    productVariantId: {
      type: "number",
      validations: { required: true },
      storageKey: "5b4wovcVgkbx::toA6x_7vPfHs",
    },
    shop: {
      type: "belongsTo",
      parent: { model: "shopifyShop" },
      storageKey: "S3BgY4d24_VL-BelongsTo-Shop",
    },
  },
};
