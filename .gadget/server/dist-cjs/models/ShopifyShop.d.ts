
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, TriggerWithType } from "../types";
import type { Scalars } from "@gadget-client/shopifyapp-dw5d";
import { GadgetRecord, ShopifyShop } from "@gadget-client/shopifyapp-dw5d";
import { Select } from "@gadgetinc/api-client-core";
import { ShopifyWebhookTriggerForTopic } from "../WebhookPayloadTypes";
export type DefaultShopifyShopServerSelection = {
	readonly __typename: true
	readonly id: true
	readonly createdAt: true
	readonly updatedAt: true
	readonly state: true
	readonly plan: true
	readonly address1: true
	readonly marketingSmsContentEnabledAtCheckout: true
	readonly planPublicDisplayName: true
	readonly planDisplayName: true
	readonly transactionalSmsDisabled: true
	readonly address2: true
	readonly checkoutApiSupported: true
	readonly city: true
	readonly country: true
	readonly countryCode: true
	readonly countryName: true
	readonly countyTaxes: true
	readonly currency: true
	readonly customerEmail: true
	readonly domain: true
	readonly eligibleForPayments: true
	readonly email: true
	readonly enabledPresentmentCurrencies: true
	readonly finances: true
	readonly googleAppsDomain: true
	readonly googleAppsLoginEnabled: true
	readonly hasDiscounts: true
	readonly hasGiftCards: true
	readonly hasStorefront: true
	readonly ianaTimezone: true
	readonly latitude: true
	readonly longitude: true
	readonly moneyFormat: true
	readonly moneyInEmailsFormat: true
	readonly moneyWithCurrencyFormat: true
	readonly moneyWithCurrencyInEmailsFormat: true
	readonly multiLocationEnabled: true
	readonly myshopifyDomain: true
	readonly name: true
	readonly passwordEnabled: true
	readonly phone: true
	readonly planName: true
	readonly preLaunchEnabled: true
	readonly primaryLocale: true
	readonly shopifyCreatedAt: true
	readonly province: true
	readonly provinceCode: true
	readonly requiresExtraPaymentsAgreement: true
	readonly setupRequired: true
	readonly shopOwner: true
	readonly source: true
	readonly taxShipping: true
	readonly taxesIncluded: true
	readonly timezone: true
	readonly shopifyUpdatedAt: true
	readonly weightUnit: true
	readonly alerts: true
	readonly billingAddress: true
	readonly countriesInShippingZones: true
	readonly currencyFormats: true
	readonly customerAccounts: true
	readonly zipCode: true
	readonly description: true
	readonly orderNumberFormatPrefix: true
	readonly orderNumberFormatSuffix: true
	readonly resourceLimits: true
	readonly richTextEditorUrl: true
	readonly shipsToCountries: true
	readonly timezoneAbbreviation: true
	readonly timezoneOffset: true
	readonly timezoneOffsetMinutes: true
	readonly unitSystem: true
	readonly customerAccountsV2: true
	readonly url: true
	readonly grantedScopes: true
	readonly registeredWebhooks: true
	readonly syncs: false
	readonly accessToken: true
	readonly disabledWebhooks: true
	readonly installedViaApiKey: true
};
/** Context of the `update` action on the `shopifyShop` model. */
export interface UpdateShopifyShopActionContext extends AmbientContext {
	/**
	* The model this action is operating on
	*/
	model: NotYetTyped;
	/**
	* An object specifying the `shopifyShop` record this action is operating on.
	*/
	record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
	/**
	* @deprecated Use 'return' instead.
	*/
	scope: ActionExecutionScope;
	/**
	* An object specifying the trigger to this action (e.g. API call, webhook events etc.).
	*/
	trigger: ShopifyWebhookTriggerForTopic<"shop/update"> | TriggerWithType<"shopify_sync">;
	/**
	* An object containing the incoming data(this models fields) passed by triggers or user inputs.
	*/
	params: {
		shopifyShop?: {
			id?: string
			plan?: Scalars["JSON"]
			address1?: string
			marketingSmsContentEnabledAtCheckout?: boolean
			planPublicDisplayName?: string
			planDisplayName?: string
			transactionalSmsDisabled?: boolean
			address2?: string
			checkoutApiSupported?: boolean
			city?: string
			country?: string
			countryCode?: string
			countryName?: string
			countyTaxes?: Scalars["JSON"]
			currency?: string
			customerEmail?: string
			domain?: string
			eligibleForPayments?: boolean
			email?: string
			enabledPresentmentCurrencies?: string[]
			finances?: boolean
			googleAppsDomain?: string
			googleAppsLoginEnabled?: boolean
			hasDiscounts?: boolean
			hasGiftCards?: boolean
			hasStorefront?: boolean
			ianaTimezone?: string
			latitude?: number
			longitude?: number
			moneyFormat?: string
			moneyInEmailsFormat?: string
			moneyWithCurrencyFormat?: string
			moneyWithCurrencyInEmailsFormat?: string
			multiLocationEnabled?: boolean
			myshopifyDomain?: string
			name?: string
			passwordEnabled?: boolean
			phone?: string
			planName?: string
			preLaunchEnabled?: boolean
			primaryLocale?: string
			shopifyCreatedAt?: Date
			province?: string
			provinceCode?: string
			requiresExtraPaymentsAgreement?: boolean
			setupRequired?: boolean
			shopOwner?: string
			source?: string
			taxShipping?: boolean
			taxesIncluded?: boolean
			timezone?: string
			shopifyUpdatedAt?: Date
			weightUnit?: string
			alerts?: Scalars["JSON"]
			billingAddress?: Scalars["JSON"]
			countriesInShippingZones?: Scalars["JSON"]
			currencyFormats?: Scalars["JSON"]
			customerAccounts?: string
			zipCode?: string
			description?: string
			orderNumberFormatPrefix?: string
			orderNumberFormatSuffix?: string
			resourceLimits?: Scalars["JSON"]
			richTextEditorUrl?: string
			shipsToCountries?: string[]
			timezoneAbbreviation?: string
			timezoneOffset?: string
			timezoneOffsetMinutes?: number
			unitSystem?: string
			customerAccountsV2?: Scalars["JSON"]
			url?: string
		}
		id?: string
	};
	/**
	* @private The context of this action.
	*/
	context: UpdateShopifyShopActionContext;
}
/** Context of the `install` action on the `shopifyShop` model. */
export interface InstallShopifyShopActionContext extends AmbientContext {
	/**
	* The model this action is operating on
	*/
	model: NotYetTyped;
	/**
	* An object specifying the `shopifyShop` record this action is operating on.
	*/
	record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
	/**
	* @deprecated Use 'return' instead.
	*/
	scope: ActionExecutionScope;
	/**
	* An object specifying the trigger to this action (e.g. API call, webhook events etc.).
	*/
	trigger: TriggerWithType<"shopify_oauth">;
	/**
	* An object containing the incoming data(this models fields) passed by triggers or user inputs.
	*/
	params: {
		shopifyShop?: {
			id?: string
			plan?: Scalars["JSON"]
			address1?: string
			marketingSmsContentEnabledAtCheckout?: boolean
			planPublicDisplayName?: string
			planDisplayName?: string
			transactionalSmsDisabled?: boolean
			address2?: string
			checkoutApiSupported?: boolean
			city?: string
			country?: string
			countryCode?: string
			countryName?: string
			countyTaxes?: Scalars["JSON"]
			currency?: string
			customerEmail?: string
			domain?: string
			eligibleForPayments?: boolean
			email?: string
			enabledPresentmentCurrencies?: string[]
			finances?: boolean
			googleAppsDomain?: string
			googleAppsLoginEnabled?: boolean
			hasDiscounts?: boolean
			hasGiftCards?: boolean
			hasStorefront?: boolean
			ianaTimezone?: string
			latitude?: number
			longitude?: number
			moneyFormat?: string
			moneyInEmailsFormat?: string
			moneyWithCurrencyFormat?: string
			moneyWithCurrencyInEmailsFormat?: string
			multiLocationEnabled?: boolean
			myshopifyDomain?: string
			name?: string
			passwordEnabled?: boolean
			phone?: string
			planName?: string
			preLaunchEnabled?: boolean
			primaryLocale?: string
			shopifyCreatedAt?: Date
			province?: string
			provinceCode?: string
			requiresExtraPaymentsAgreement?: boolean
			setupRequired?: boolean
			shopOwner?: string
			source?: string
			taxShipping?: boolean
			taxesIncluded?: boolean
			timezone?: string
			shopifyUpdatedAt?: Date
			weightUnit?: string
			alerts?: Scalars["JSON"]
			billingAddress?: Scalars["JSON"]
			countriesInShippingZones?: Scalars["JSON"]
			currencyFormats?: Scalars["JSON"]
			customerAccounts?: string
			zipCode?: string
			description?: string
			orderNumberFormatPrefix?: string
			orderNumberFormatSuffix?: string
			resourceLimits?: Scalars["JSON"]
			richTextEditorUrl?: string
			shipsToCountries?: string[]
			timezoneAbbreviation?: string
			timezoneOffset?: string
			timezoneOffsetMinutes?: number
			unitSystem?: string
			customerAccountsV2?: Scalars["JSON"]
			url?: string
		}
	};
	/**
	* @private The context of this action.
	*/
	context: InstallShopifyShopActionContext;
}
/** Context of the `reinstall` action on the `shopifyShop` model. */
export interface ReinstallShopifyShopActionContext extends AmbientContext {
	/**
	* The model this action is operating on
	*/
	model: NotYetTyped;
	/**
	* An object specifying the `shopifyShop` record this action is operating on.
	*/
	record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
	/**
	* @deprecated Use 'return' instead.
	*/
	scope: ActionExecutionScope;
	/**
	* An object specifying the trigger to this action (e.g. API call, webhook events etc.).
	*/
	trigger: TriggerWithType<"shopify_oauth">;
	/**
	* An object containing the incoming data(this models fields) passed by triggers or user inputs.
	*/
	params: {
		shopifyShop?: {
			id?: string
			plan?: Scalars["JSON"]
			address1?: string
			marketingSmsContentEnabledAtCheckout?: boolean
			planPublicDisplayName?: string
			planDisplayName?: string
			transactionalSmsDisabled?: boolean
			address2?: string
			checkoutApiSupported?: boolean
			city?: string
			country?: string
			countryCode?: string
			countryName?: string
			countyTaxes?: Scalars["JSON"]
			currency?: string
			customerEmail?: string
			domain?: string
			eligibleForPayments?: boolean
			email?: string
			enabledPresentmentCurrencies?: string[]
			finances?: boolean
			googleAppsDomain?: string
			googleAppsLoginEnabled?: boolean
			hasDiscounts?: boolean
			hasGiftCards?: boolean
			hasStorefront?: boolean
			ianaTimezone?: string
			latitude?: number
			longitude?: number
			moneyFormat?: string
			moneyInEmailsFormat?: string
			moneyWithCurrencyFormat?: string
			moneyWithCurrencyInEmailsFormat?: string
			multiLocationEnabled?: boolean
			myshopifyDomain?: string
			name?: string
			passwordEnabled?: boolean
			phone?: string
			planName?: string
			preLaunchEnabled?: boolean
			primaryLocale?: string
			shopifyCreatedAt?: Date
			province?: string
			provinceCode?: string
			requiresExtraPaymentsAgreement?: boolean
			setupRequired?: boolean
			shopOwner?: string
			source?: string
			taxShipping?: boolean
			taxesIncluded?: boolean
			timezone?: string
			shopifyUpdatedAt?: Date
			weightUnit?: string
			alerts?: Scalars["JSON"]
			billingAddress?: Scalars["JSON"]
			countriesInShippingZones?: Scalars["JSON"]
			currencyFormats?: Scalars["JSON"]
			customerAccounts?: string
			zipCode?: string
			description?: string
			orderNumberFormatPrefix?: string
			orderNumberFormatSuffix?: string
			resourceLimits?: Scalars["JSON"]
			richTextEditorUrl?: string
			shipsToCountries?: string[]
			timezoneAbbreviation?: string
			timezoneOffset?: string
			timezoneOffsetMinutes?: number
			unitSystem?: string
			customerAccountsV2?: Scalars["JSON"]
			url?: string
		}
		id?: string
	};
	/**
	* @private The context of this action.
	*/
	context: ReinstallShopifyShopActionContext;
}
/** Context of the `uninstall` action on the `shopifyShop` model. */
export interface UninstallShopifyShopActionContext extends AmbientContext {
	/**
	* The model this action is operating on
	*/
	model: NotYetTyped;
	/**
	* An object specifying the `shopifyShop` record this action is operating on.
	*/
	record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
	/**
	* @deprecated Use 'return' instead.
	*/
	scope: ActionExecutionScope;
	/**
	* An object specifying the trigger to this action (e.g. API call, webhook events etc.).
	*/
	trigger: ShopifyWebhookTriggerForTopic<"app/uninstalled">;
	/**
	* An object containing the incoming data(this models fields) passed by triggers or user inputs.
	*/
	params: {
		shopifyShop?: {
			id?: string
			plan?: Scalars["JSON"]
			address1?: string
			marketingSmsContentEnabledAtCheckout?: boolean
			planPublicDisplayName?: string
			planDisplayName?: string
			transactionalSmsDisabled?: boolean
			address2?: string
			checkoutApiSupported?: boolean
			city?: string
			country?: string
			countryCode?: string
			countryName?: string
			countyTaxes?: Scalars["JSON"]
			currency?: string
			customerEmail?: string
			domain?: string
			eligibleForPayments?: boolean
			email?: string
			enabledPresentmentCurrencies?: string[]
			finances?: boolean
			googleAppsDomain?: string
			googleAppsLoginEnabled?: boolean
			hasDiscounts?: boolean
			hasGiftCards?: boolean
			hasStorefront?: boolean
			ianaTimezone?: string
			latitude?: number
			longitude?: number
			moneyFormat?: string
			moneyInEmailsFormat?: string
			moneyWithCurrencyFormat?: string
			moneyWithCurrencyInEmailsFormat?: string
			multiLocationEnabled?: boolean
			myshopifyDomain?: string
			name?: string
			passwordEnabled?: boolean
			phone?: string
			planName?: string
			preLaunchEnabled?: boolean
			primaryLocale?: string
			shopifyCreatedAt?: Date
			province?: string
			provinceCode?: string
			requiresExtraPaymentsAgreement?: boolean
			setupRequired?: boolean
			shopOwner?: string
			source?: string
			taxShipping?: boolean
			taxesIncluded?: boolean
			timezone?: string
			shopifyUpdatedAt?: Date
			weightUnit?: string
			alerts?: Scalars["JSON"]
			billingAddress?: Scalars["JSON"]
			countriesInShippingZones?: Scalars["JSON"]
			currencyFormats?: Scalars["JSON"]
			customerAccounts?: string
			zipCode?: string
			description?: string
			orderNumberFormatPrefix?: string
			orderNumberFormatSuffix?: string
			resourceLimits?: Scalars["JSON"]
			richTextEditorUrl?: string
			shipsToCountries?: string[]
			timezoneAbbreviation?: string
			timezoneOffset?: string
			timezoneOffsetMinutes?: number
			unitSystem?: string
			customerAccountsV2?: Scalars["JSON"]
			url?: string
		}
		id?: string
	};
	/**
	* @private The context of this action.
	*/
	context: UninstallShopifyShopActionContext;
}
