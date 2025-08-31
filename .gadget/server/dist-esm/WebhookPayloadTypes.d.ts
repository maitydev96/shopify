
import type { ShopifyWebhookActionTrigger } from "./types.js";
/**
* Shopify webhook payload for the "app/uninstalled" topic
*/
export interface ShopifyAppUninstalledPayload {
	address1: string;
	address2: null | string;
	auto_configure_tax_inclusivity: boolean | null;
	checkout_api_supported: boolean;
	city: string;
	country: string;
	country_code: string;
	country_name: string;
	county_taxes: boolean | null;
	created_at: null | string;
	currency: string;
	customer_email: string;
	domain: null | string;
	eligible_for_payments: boolean;
	email: string;
	enabled_presentment_currencies: string[];
	finances: boolean;
	google_apps_domain: null | string;
	google_apps_login_enabled: boolean | null;
	has_discounts: boolean;
	has_gift_cards: boolean;
	has_storefront: boolean;
	iana_timezone: null | string;
	id: number;
	latitude: null | number;
	longitude: null | number;
	marketing_sms_consent_enabled_at_checkout: boolean;
	money_format: string;
	money_in_emails_format: string;
	money_with_currency_format: string;
	money_with_currency_in_emails_format: string;
	multi_location_enabled: boolean;
	myshopify_domain: null | string;
	name: string;
	password_enabled: boolean | null;
	phone: string;
	plan_display_name: string;
	plan_name: string;
	pre_launch_enabled: boolean;
	primary_locale: string;
	primary_location_id: number;
	province: string;
	province_code: string;
	requires_extra_payments_agreement: boolean;
	setup_required: boolean;
	shop_owner: string;
	source: null | string;
	tax_shipping: boolean | null;
	taxes_included: boolean | null;
	timezone: string;
	transactional_sms_disabled: boolean;
	updated_at: null | string;
	weight_unit: string;
	zip: string;
	[k: string]: unknown;
}
/**
* Shopify webhook payload for the "app/uninstalled" topic
*/
export interface ShopifyAppUninstalledTrigger extends ShopifyWebhookActionTrigger {
	topic: "app/uninstalled";
	payload: ShopifyAppUninstalledPayload;
}
/**
* Shopify webhook payload for the "customers/data_request" topic
*/
export interface ShopifyCustomersDataRequestPayload {
	customer: {
		email: string
		id: number
		phone: string
		[k: string]: unknown
	};
	data_request: {
		id: number
		[k: string]: unknown
	};
	orders_requested: number[];
	shop_domain: string;
	shop_id: number;
	[k: string]: unknown;
}
/**
* Shopify webhook payload for the "customers/data_request" topic
*/
export interface ShopifyCustomersDataRequestTrigger extends ShopifyWebhookActionTrigger {
	topic: "customers/data_request";
	payload: ShopifyCustomersDataRequestPayload;
}
/**
* Shopify webhook payload for the "customers/redact" topic
*/
export interface ShopifyCustomersRedactPayload {
	customer: {
		email: string
		id: number
		phone: string
		[k: string]: unknown
	};
	orders_to_redact: number[];
	shop_domain: string;
	shop_id: number;
	[k: string]: unknown;
}
/**
* Shopify webhook payload for the "customers/redact" topic
*/
export interface ShopifyCustomersRedactTrigger extends ShopifyWebhookActionTrigger {
	topic: "customers/redact";
	payload: ShopifyCustomersRedactPayload;
}
/**
* Shopify webhook payload for the "shop/redact" topic
*/
export interface ShopifyShopRedactPayload {
	shop_domain: string;
	shop_id: number;
	[k: string]: unknown;
}
/**
* Shopify webhook payload for the "shop/redact" topic
*/
export interface ShopifyShopRedactTrigger extends ShopifyWebhookActionTrigger {
	topic: "shop/redact";
	payload: ShopifyShopRedactPayload;
}
/**
* Shopify webhook payload for the "shop/update" topic
*/
export interface ShopifyShopUpdatePayload {
	address1: string;
	address2: null | string;
	auto_configure_tax_inclusivity: boolean | null;
	checkout_api_supported: boolean;
	city: string;
	country: string;
	country_code: string;
	country_name: string;
	county_taxes: boolean | null;
	created_at: null | string;
	currency: string;
	customer_email: string;
	domain: null | string;
	eligible_for_payments: boolean;
	email: string;
	enabled_presentment_currencies: string[];
	finances: boolean;
	google_apps_domain: null | string;
	google_apps_login_enabled: boolean | null;
	has_discounts: boolean;
	has_gift_cards: boolean;
	has_storefront: boolean;
	iana_timezone: null | string;
	id: number;
	latitude: null | number;
	longitude: null | number;
	marketing_sms_consent_enabled_at_checkout: boolean;
	money_format: string;
	money_in_emails_format: string;
	money_with_currency_format: string;
	money_with_currency_in_emails_format: string;
	multi_location_enabled: boolean;
	myshopify_domain: null | string;
	name: string;
	password_enabled: boolean | null;
	phone: string;
	plan_display_name: string;
	plan_name: string;
	pre_launch_enabled: boolean;
	primary_locale: string;
	primary_location_id: number;
	province: string;
	province_code: null | string;
	requires_extra_payments_agreement: boolean;
	setup_required: boolean;
	shop_owner: string;
	source: null | string;
	tax_shipping: boolean | null;
	taxes_included: boolean | null;
	timezone: string;
	transactional_sms_disabled: boolean;
	updated_at: null | string;
	weight_unit: string;
	zip: string;
	[k: string]: unknown;
}
/**
* Shopify webhook payload for the "shop/update" topic
*/
export interface ShopifyShopUpdateTrigger extends ShopifyWebhookActionTrigger {
	topic: "shop/update";
	payload: ShopifyShopUpdatePayload;
}
/**
* Union type of all Shopify webhook payloads
*/
export type ShopifyWebhookTrigger = ShopifyAppUninstalledTrigger | ShopifyCustomersDataRequestTrigger | ShopifyCustomersRedactTrigger | ShopifyShopRedactTrigger | ShopifyShopUpdateTrigger;
/**
* Shopify webhook payload for a specific topic
*/
export type ShopifyWebhookTriggerForTopic<T extends string> = Extract<ShopifyWebhookTrigger, {
	topic: T
}>;
