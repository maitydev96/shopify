/**
* This is the Gadget API client library for:
*
*       _                 _  __                                   _          ____      _
*   ___| |__   ___  _ __ (_)/ _|_   _  __ _ _ __  _ __         __| |_      _| ___|  __| |
*  / __| '_ \ / _ \| '_ \| | |_| | | |/ _` | '_ \| '_ \ _____ / _` \ \ /\ / /___ \ / _` |
*  \__ \ | | | (_) | |_) | |  _| |_| | (_| | |_) | |_) |_____| (_| |\ V  V / ___) | (_| |
*  |___/_| |_|\___/| .__/|_|_|  \__, |\__,_| .__/| .__/       \__,_| \_/\_/ |____/ \__,_|
*                  |_|          |___/      |_|   |_|
*
* Built for environment "Development" at version 10
* API docs: https://docs.gadget.dev/api/shopifyapp-dw5d
* Edit this app here: https://shopifyapp-dw5d.gadget.app/edit
*/
export { BrowserSessionStorageType, GadgetClientError, GadgetConnection, GadgetInternalError, GadgetOperationError, GadgetRecord, GadgetRecordList, GadgetValidationError, InvalidRecordError, ChangeTracking } from "@gadgetinc/api-client-core";
export type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions, ClientOptions, InvalidFieldError, Select } from "@gadgetinc/api-client-core";
export * from "./Client.js";
export * from "./types.js";
declare global {
    interface Window {
        gadgetConfig: {
            apiKeys: {
                shopify: string;
            };
            environment: string;
            env: Record<string, any>;
            authentication?: {
                signInPath: string;
                redirectOnSuccessfulSignInPath: string;
            };
            shopifyInstallState?: {
                redirectToOauth: boolean;
                isAuthenticated: boolean;
                missingScopes: string[];
                shopExists: boolean;
            };
            shopifyAppBridgeCDNScriptSrc?: string;
        };
    }
}
