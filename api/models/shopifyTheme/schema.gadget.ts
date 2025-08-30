import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "shopifyTheme" model, go to https://promobanner.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-Shopify-Theme",
  fields: {
    bannerContent: {
      type: "string",
      shopifyMetafield: {
        privateMetafield: false,
        namespace: "banner",
        key: "content",
        metafieldType: "single_line_text_field",
        allowMultipleEntries: false,
      },
      validations: { required: true },
      storageKey: "YNgnWiSMts8k::vfGHHuh-SA9M",
    },
  },
  shopify: {
    fields: [
      "name",
      "prefix",
      "previewable",
      "processing",
      "processingFailed",
      "role",
      "shop",
      "shopifyCreatedAt",
      "shopifyUpdatedAt",
      "themeStoreId",
    ],
  },
};
