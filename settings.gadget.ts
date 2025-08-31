import type { GadgetSettings } from "gadget-server";

export const settings: GadgetSettings = {
  type: "gadget/settings/v1",
  frameworkVersion: "v1.4.0",
  plugins: {
    connections: {
      shopify: {
        apiVersion: "2025-07",
        enabledModels: ["shopifyTheme"],
        type: "partner",
        scopes: [
          "write_script_tags",
          "write_themes",
          "read_script_tags",
          "read_themes",
        ],
        customerAuthenticationEnabled: false,
      },
    },
  },
};
