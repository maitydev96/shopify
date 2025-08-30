// Sets up the API client for interacting with your backend.
// For your API reference, visit: https://docs.gadget.dev/api/promobanner
import { Client } from "@gadget-client/promobanner";

export const api = new Client({ environment: window.gadgetConfig.environment });