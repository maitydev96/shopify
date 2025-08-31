import { FieldSelection, FilterNever } from "@gadgetinc/api-client-core";
import { ComputedViewWithoutVariables, ComputedViewWithVariables, ComputedViewFunctionWithoutVariables, ComputedViewFunctionWithVariables } from "./computedViews.js";
export type JSONValue = string | number | boolean | JSONObject | JSONArray;
interface JSONObject {
    [x: string]: JSONValue;
}
interface JSONArray extends Array<JSONValue> {
}
export declare enum GadgetFieldType {
    Any = 0,
    Array = 1,
    BelongsTo = 2,
    Boolean = 3,
    Code = 4,
    Color = 5,
    Computed = 6,
    DateTime = 7,
    Email = 8,
    EncryptedString = 9,
    Enum = 10,
    File = 11,
    HasMany = 12,
    HasManyThrough = 13,
    HasOne = 14,
    ID = 15,
    JSON = 16,
    Money = 17,
    Null = 18,
    Number = 19,
    Object = 20,
    Password = 21,
    RecordState = 22,
    RichText = 23,
    RoleAssignments = 24,
    String = 25,
    URL = 26,
    Vector = 27
}
export declare enum BackgroundActionPriority {
    DEFAULT = 0,
    HIGH = 1,
    LOW = 2,
    PLATFORM = 3
}
export declare enum BackgroundActionOutcome {
    failed = 0,
    completed = 1
}
export type GadgetFieldValidationUnion = AvailableGadgetRegexFieldValidationSelection | AvailableGadgetRangeFieldValidationSelection | AvailableGadgetOnlyImageFileFieldValidationSelection | AvailableGadgetGenericFieldValidationSelection;
export type AvailableGadgetFieldValidationUnionSelection = GadgetRegexFieldValidation | GadgetRangeFieldValidation | GadgetOnlyImageFileFieldValidation | GadgetGenericFieldValidation;
/** Represents the possible values of the Currency enum. */
export type ShopifyShopCurrencyEnum = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BYR" | "BZD" | "CAD" | "CDF" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JEP" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KID" | "KMF" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTL" | "LVL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STD" | "STN" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USDC" | "UYU" | "UZS" | "VED" | "VEF" | "VES" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XOF" | "XPF" | "XXX" | "YER" | "ZAR" | "ZMW" | string;
/** Represents the possible values of the Enabled Presentment Currencies enum. */
export type ShopifyShopEnabledPresentmentCurrenciesEnum = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BYR" | "BZD" | "CAD" | "CDF" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JEP" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KID" | "KMF" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTL" | "LVL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STD" | "STN" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USDC" | "UYU" | "UZS" | "VED" | "VEF" | "VES" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XOF" | "XPF" | "XXX" | "YER" | "ZAR" | "ZMW" | string;
/** Represents the possible values of the Weight Unit enum. */
export type ShopifyShopWeightUnitEnum = "GRAMS" | "KILOGRAMS" | "OUNCES" | "POUNDS" | string;
/** Represents the possible values of the Customer Accounts enum. */
export type ShopifyShopCustomerAccountsEnum = "DISABLED" | "OPTIONAL" | "REQUIRED" | string;
/** Represents the possible values of the Ships To Countries enum. */
export type ShopifyShopShipsToCountriesEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AR" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MK" | "ML" | "MM" | "MN" | "MO" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PS" | "PT" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | "ZZ" | string;
/** Represents the possible values of the Unit System enum. */
export type ShopifyShopUnitSystemEnum = "IMPERIAL_SYSTEM" | "METRIC_SYSTEM" | string;
/** Represents the possible values of the Sync Since By enum. */
export type ShopifySyncSyncSinceByEnum = "updated_at" | "created_at";
/** A sort order for a field. Can be Ascending or Descending. */
export type SortOrder = "Ascending" | "Descending";
/** The `StateValue` scalar type represents an input value for a recordState field. It can be a string, like 'created.active', or a JSON object, like { created: 'active' }. */
export type StateValue = any;
/** Represents the possible values of the Topic enum. */
export type ShopifyGdprRequestTopicEnum = "customers/data_request" | "customers/redact" | "shop/redact";
/** Represents the possible values of the Cancel Reason enum. */
export type ShopifyOrderCancelReasonEnum = "CUSTOMER" | "DECLINED" | "FRAUD" | "INVENTORY" | "OTHER" | "STAFF" | string;
/** Represents the possible values of the Currency enum. */
export type ShopifyOrderCurrencyEnum = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BYR" | "BZD" | "CAD" | "CDF" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JEP" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KID" | "KMF" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTL" | "LVL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STD" | "STN" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USDC" | "UYU" | "UZS" | "VED" | "VEF" | "VES" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XOF" | "XPF" | "XXX" | "YER" | "ZAR" | "ZMW" | string;
/** Represents the possible values of the Financial Status enum. */
export type ShopifyOrderFinancialStatusEnum = "AUTHORIZED" | "EXPIRED" | "PAID" | "PARTIALLY_PAID" | "PARTIALLY_REFUNDED" | "PENDING" | "REFUNDED" | "VOIDED" | string;
/** Represents the possible values of the Fulfillment Status enum. */
export type ShopifyOrderFulfillmentStatusEnum = "FULFILLED" | "IN_PROGRESS" | "ON_HOLD" | "OPEN" | "PARTIALLY_FULFILLED" | "PENDING_FULFILLMENT" | "REQUEST_DECLINED" | "RESTOCKED" | "SCHEDULED" | "UNFULFILLED" | string;
/** Represents the possible values of the Presentment Currency enum. */
export type ShopifyOrderPresentmentCurrencyEnum = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BYR" | "BZD" | "CAD" | "CDF" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JEP" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KID" | "KMF" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTL" | "LVL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STD" | "STN" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USDC" | "UYU" | "UZS" | "VED" | "VEF" | "VES" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XOF" | "XPF" | "XXX" | "YER" | "ZAR" | "ZMW" | string;
/** Represents the possible values of the Return Status enum. */
export type ShopifyOrderReturnStatusEnum = "INSPECTION_COMPLETE" | "IN_PROGRESS" | "NO_RETURN" | "RETURNED" | "RETURN_FAILED" | "RETURN_REQUESTED" | string;
/** Represents the possible values of the deliveryStatus enum. */
export type OrderTrackingDeliveryStatusEnum = "pending" | "shipped" | "delivered";
/** Represents the possible values of the Status enum. */
export type ShopifyProductStatusEnum = "ACTIVE" | "ARCHIVED" | "DRAFT" | string;
/** Represents one shopifyShop result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyShopRecord = Scalars["JSONObject"];
/** Represents one shopifyGdprRequest result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyGdprRequestRecord = Scalars["JSONObject"];
/** Represents one shopifyOrder result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyOrderRecord = Scalars["JSONObject"];
/** Represents one shopifyProduct result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductRecord = Scalars["JSONObject"];
/** Represents one shopifySync result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifySyncRecord = Scalars["JSONObject"];
/** Represents one orderTracking result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalOrderTrackingRecord = Scalars["JSONObject"];
/** Represents one productCustomization result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalProductCustomizationRecord = Scalars["JSONObject"];
/** Represents one session result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalSessionRecord = Scalars["JSONObject"];
export type BackgroundActionResult = AvailableAbortShopifySyncResultSelection | AvailableCompleteShopifySyncResultSelection | AvailableErrorShopifySyncResultSelection | AvailableRunShopifySyncResultSelection | AvailableCreateOrderTrackingResultSelection | AvailableUpdateOrderTrackingResultSelection | AvailableDeleteOrderTrackingResultSelection | AvailableCreateProductCustomizationResultSelection | AvailableUpdateProductCustomizationResultSelection | AvailableDeleteProductCustomizationResultSelection;
export type AvailableBackgroundActionResultSelection = AbortShopifySyncResult | CompleteShopifySyncResult | ErrorShopifySyncResult | RunShopifySyncResult | CreateOrderTrackingResult | UpdateOrderTrackingResult | DeleteOrderTrackingResult | CreateProductCustomizationResult | UpdateProductCustomizationResult | DeleteProductCustomizationResult;
export type ShopifySyncSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the state field. Defaults to ascending (smallest value first). */
    state?: SortOrder | null;
    /** Sort the results by the syncSince field. Defaults to ascending (smallest value first). */
    syncSince?: SortOrder | null;
    /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
    domain?: SortOrder | null;
    /** Sort the results by the errorDetails field. Defaults to ascending (smallest value first). */
    errorDetails?: SortOrder | null;
    /** Sort the results by the errorMessage field. Defaults to ascending (smallest value first). */
    errorMessage?: SortOrder | null;
    /** Sort the results by the syncSinceBy field. Defaults to ascending (smallest value first). */
    syncSinceBy?: SortOrder | null;
    /** Sort the results by the force field. Defaults to ascending (smallest value first). */
    force?: SortOrder | null;
    /** Sort the results by the models field. Defaults to ascending (smallest value first). */
    models?: SortOrder | null;
};
export type ShopifySyncFilter = {
    AND?: (ShopifySyncFilter | null)[];
    OR?: (ShopifySyncFilter | null)[];
    NOT?: (ShopifySyncFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    state?: StateFilter | null;
    shopId?: IDFilter | null;
    shop?: ShopifyShopRelationshipFilter | null;
    syncSince?: DateTimeFilter | null;
    domain?: StringFilter | null;
    errorDetails?: StringFilter | null;
    errorMessage?: StringFilter | null;
    syncSinceBy?: SingleEnumFilter | null;
    force?: BooleanFilter | null;
    models?: JSONFilter | null;
};
export type IDFilter = {
    equals?: (Scalars['GadgetID'] | null) | null;
    notEquals?: (Scalars['GadgetID'] | null) | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    in?: ((Scalars['GadgetID'] | null) | null)[];
    notIn?: ((Scalars['GadgetID'] | null) | null)[];
    lessThan?: (Scalars['GadgetID'] | null) | null;
    lessThanOrEqual?: (Scalars['GadgetID'] | null) | null;
    greaterThan?: (Scalars['GadgetID'] | null) | null;
    greaterThanOrEqual?: (Scalars['GadgetID'] | null) | null;
};
export type DateTimeFilter = {
    equals?: Date | Scalars['ISO8601DateString'] | null;
    notEquals?: Date | Scalars['ISO8601DateString'] | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    in?: (Date | Scalars['ISO8601DateString'] | null)[];
    notIn?: (Date | Scalars['ISO8601DateString'] | null)[];
    lessThan?: Date | Scalars['ISO8601DateString'] | null;
    lessThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;
    greaterThan?: Date | Scalars['ISO8601DateString'] | null;
    greaterThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;
    before?: Date | Scalars['ISO8601DateString'] | null;
    after?: Date | Scalars['ISO8601DateString'] | null;
};
export type StateFilter = {
    /** If true, return only records that have a state value set. If false, return only records that do not have a state value set. */
    isSet?: (Scalars['Boolean'] | null) | null;
    /** Return only records that are in this given state. The state must be specified as a dot separated string of nested state names, like 'created.installed' or 'deleted'. */
    inState?: (Scalars['String'] | null) | null;
    /** Return only records that are in this given state. The state can be specified as a dot separated string of nested state names, like 'created.installed' or 'deleted', or as a JSON object, like { created: 'active' }. */
    equals?: (Scalars['StateValue'] | null) | null;
    /** Return only records that are in any of these given states. The states can be specified as a dot separated string of nested state names, like 'created.installed' or 'deleted', or as a JSON object, like { created: 'active' }. */
    in?: ((Scalars['StateValue'] | null))[];
    /** Return only records that are not in any of these given states. The states can be specified as a dot separated string of nested state names, like 'created.installed' or 'deleted', or as a JSON object, like { created: 'active' }. */
    notIn?: ((Scalars['StateValue'] | null))[];
    /** Return only records that are not in this given state. The state value must be specified as a dot separated string of nested state names, like 'created.installed' or 'deleted', or as a JSON object, like { created: 'active' }. */
    notEquals?: (Scalars['StateValue'] | null) | null;
};
export type ShopifyShopRelationshipFilter = {
    AND?: (ShopifyShopRelationshipFilter | null)[];
    OR?: (ShopifyShopRelationshipFilter | null)[];
    NOT?: (ShopifyShopRelationshipFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    state?: StateFilter | null;
    plan?: JSONFilter | null;
    address1?: StringFilter | null;
    marketingSmsContentEnabledAtCheckout?: BooleanFilter | null;
    planPublicDisplayName?: StringFilter | null;
    planDisplayName?: StringFilter | null;
    transactionalSmsDisabled?: BooleanFilter | null;
    address2?: StringFilter | null;
    checkoutApiSupported?: BooleanFilter | null;
    city?: StringFilter | null;
    country?: StringFilter | null;
    countryCode?: StringFilter | null;
    countryName?: StringFilter | null;
    countyTaxes?: JSONFilter | null;
    currency?: SingleEnumFilter | null;
    customerEmail?: StringFilter | null;
    domain?: StringFilter | null;
    eligibleForPayments?: BooleanFilter | null;
    email?: StringFilter | null;
    enabledPresentmentCurrencies?: MultiEnumFilter | null;
    finances?: BooleanFilter | null;
    googleAppsDomain?: StringFilter | null;
    googleAppsLoginEnabled?: BooleanFilter | null;
    hasDiscounts?: BooleanFilter | null;
    hasGiftCards?: BooleanFilter | null;
    hasStorefront?: BooleanFilter | null;
    ianaTimezone?: StringFilter | null;
    latitude?: FloatFilter | null;
    longitude?: FloatFilter | null;
    moneyFormat?: StringFilter | null;
    moneyInEmailsFormat?: StringFilter | null;
    moneyWithCurrencyFormat?: StringFilter | null;
    moneyWithCurrencyInEmailsFormat?: StringFilter | null;
    multiLocationEnabled?: BooleanFilter | null;
    myshopifyDomain?: StringFilter | null;
    name?: StringFilter | null;
    passwordEnabled?: BooleanFilter | null;
    phone?: StringFilter | null;
    planName?: StringFilter | null;
    preLaunchEnabled?: BooleanFilter | null;
    primaryLocale?: StringFilter | null;
    shopifyCreatedAt?: DateTimeFilter | null;
    province?: StringFilter | null;
    provinceCode?: StringFilter | null;
    requiresExtraPaymentsAgreement?: BooleanFilter | null;
    setupRequired?: BooleanFilter | null;
    shopOwner?: StringFilter | null;
    source?: StringFilter | null;
    taxShipping?: BooleanFilter | null;
    taxesIncluded?: BooleanFilter | null;
    timezone?: StringFilter | null;
    shopifyUpdatedAt?: DateTimeFilter | null;
    weightUnit?: SingleEnumFilter | null;
    alerts?: JSONFilter | null;
    billingAddress?: JSONFilter | null;
    countriesInShippingZones?: JSONFilter | null;
    currencyFormats?: JSONFilter | null;
    customerAccounts?: SingleEnumFilter | null;
    zipCode?: StringFilter | null;
    description?: StringFilter | null;
    orderNumberFormatPrefix?: StringFilter | null;
    orderNumberFormatSuffix?: StringFilter | null;
    resourceLimits?: JSONFilter | null;
    richTextEditorUrl?: StringFilter | null;
    shipsToCountries?: MultiEnumFilter | null;
    timezoneAbbreviation?: StringFilter | null;
    timezoneOffset?: StringFilter | null;
    timezoneOffsetMinutes?: FloatFilter | null;
    unitSystem?: SingleEnumFilter | null;
    customerAccountsV2?: JSONFilter | null;
    url?: StringFilter | null;
    grantedScopes?: JSONFilter | null;
    registeredWebhooks?: JSONFilter | null;
    syncs?: ShopifySyncsRelationshipFilter | null;
    disabledWebhooks?: JSONFilter | null;
    installedViaApiKey?: StringFilter | null;
};
export type JSONFilter = {
    isSet?: (Scalars['Boolean'] | null) | null;
    equals?: (Scalars['JSON'] | null) | null;
    in?: ((Scalars['JSON'] | null) | null)[];
    notIn?: ((Scalars['JSON'] | null) | null)[];
    notEquals?: (Scalars['JSON'] | null) | null;
    matches?: (Scalars['JSON'] | null) | null;
};
export type StringFilter = {
    equals?: (Scalars['String'] | null) | null;
    notEquals?: (Scalars['String'] | null) | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    in?: ((Scalars['String'] | null) | null)[];
    notIn?: ((Scalars['String'] | null) | null)[];
    lessThan?: (Scalars['String'] | null) | null;
    lessThanOrEqual?: (Scalars['String'] | null) | null;
    greaterThan?: (Scalars['String'] | null) | null;
    greaterThanOrEqual?: (Scalars['String'] | null) | null;
    startsWith?: (Scalars['String'] | null) | null;
};
export type BooleanFilter = {
    isSet?: (Scalars['Boolean'] | null) | null;
    equals?: (Scalars['Boolean'] | null) | null;
    notEquals?: (Scalars['Boolean'] | null) | null;
};
export type SingleEnumFilter = {
    isSet?: (Scalars['Boolean'] | null) | null;
    equals?: (Scalars['String'] | null) | null;
    notEquals?: (Scalars['String'] | null) | null;
    in?: ((Scalars['String'] | null) | null)[];
};
export type MultiEnumFilter = {
    isSet?: (Scalars['Boolean'] | null) | null;
    equals?: ((Scalars['String'] | null) | null)[];
    notEquals?: ((Scalars['String'] | null) | null)[];
    contains?: ((Scalars['String'] | null) | null)[];
};
export type FloatFilter = {
    equals?: (Scalars['Float'] | null) | null;
    notEquals?: (Scalars['Float'] | null) | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    in?: ((Scalars['Float'] | null) | null)[];
    notIn?: ((Scalars['Float'] | null) | null)[];
    lessThan?: (Scalars['Float'] | null) | null;
    lessThanOrEqual?: (Scalars['Float'] | null) | null;
    greaterThan?: (Scalars['Float'] | null) | null;
    greaterThanOrEqual?: (Scalars['Float'] | null) | null;
};
export type ShopifySyncsRelationshipFilter = {
    some?: ShopifySyncsInnerRelationshipFilter | null;
    every?: ShopifySyncsInnerRelationshipFilter | null;
};
export type ShopifySyncsInnerRelationshipFilter = {
    AND?: (ShopifySyncsInnerRelationshipFilter | null)[];
    OR?: (ShopifySyncsInnerRelationshipFilter | null)[];
    NOT?: (ShopifySyncsInnerRelationshipFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    state?: StateFilter | null;
    shopId?: IDFilter | null;
    shop?: ShopifyShopRelationshipFilter | null;
    syncSince?: DateTimeFilter | null;
    domain?: StringFilter | null;
    errorDetails?: StringFilter | null;
    errorMessage?: StringFilter | null;
    syncSinceBy?: SingleEnumFilter | null;
    force?: BooleanFilter | null;
    models?: JSONFilter | null;
};
export type ShopifyShopSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the state field. Defaults to ascending (smallest value first). */
    state?: SortOrder | null;
    /** Sort the results by the plan field. Defaults to ascending (smallest value first). */
    plan?: SortOrder | null;
    /** Sort the results by the address1 field. Defaults to ascending (smallest value first). */
    address1?: SortOrder | null;
    /** Sort the results by the marketingSmsContentEnabledAtCheckout field. Defaults to ascending (smallest value first). */
    marketingSmsContentEnabledAtCheckout?: SortOrder | null;
    /** Sort the results by the planPublicDisplayName field. Defaults to ascending (smallest value first). */
    planPublicDisplayName?: SortOrder | null;
    /** Sort the results by the planDisplayName field. Defaults to ascending (smallest value first). */
    planDisplayName?: SortOrder | null;
    /** Sort the results by the transactionalSmsDisabled field. Defaults to ascending (smallest value first). */
    transactionalSmsDisabled?: SortOrder | null;
    /** Sort the results by the address2 field. Defaults to ascending (smallest value first). */
    address2?: SortOrder | null;
    /** Sort the results by the checkoutApiSupported field. Defaults to ascending (smallest value first). */
    checkoutApiSupported?: SortOrder | null;
    /** Sort the results by the city field. Defaults to ascending (smallest value first). */
    city?: SortOrder | null;
    /** Sort the results by the country field. Defaults to ascending (smallest value first). */
    country?: SortOrder | null;
    /** Sort the results by the countryCode field. Defaults to ascending (smallest value first). */
    countryCode?: SortOrder | null;
    /** Sort the results by the countryName field. Defaults to ascending (smallest value first). */
    countryName?: SortOrder | null;
    /** Sort the results by the countyTaxes field. Defaults to ascending (smallest value first). */
    countyTaxes?: SortOrder | null;
    /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
    currency?: SortOrder | null;
    /** Sort the results by the customerEmail field. Defaults to ascending (smallest value first). */
    customerEmail?: SortOrder | null;
    /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
    domain?: SortOrder | null;
    /** Sort the results by the eligibleForPayments field. Defaults to ascending (smallest value first). */
    eligibleForPayments?: SortOrder | null;
    /** Sort the results by the email field. Defaults to ascending (smallest value first). */
    email?: SortOrder | null;
    /** Sort the results by the enabledPresentmentCurrencies field. Defaults to ascending (smallest value first). */
    enabledPresentmentCurrencies?: SortOrder | null;
    /** Sort the results by the finances field. Defaults to ascending (smallest value first). */
    finances?: SortOrder | null;
    /** Sort the results by the googleAppsDomain field. Defaults to ascending (smallest value first). */
    googleAppsDomain?: SortOrder | null;
    /** Sort the results by the googleAppsLoginEnabled field. Defaults to ascending (smallest value first). */
    googleAppsLoginEnabled?: SortOrder | null;
    /** Sort the results by the hasDiscounts field. Defaults to ascending (smallest value first). */
    hasDiscounts?: SortOrder | null;
    /** Sort the results by the hasGiftCards field. Defaults to ascending (smallest value first). */
    hasGiftCards?: SortOrder | null;
    /** Sort the results by the hasStorefront field. Defaults to ascending (smallest value first). */
    hasStorefront?: SortOrder | null;
    /** Sort the results by the ianaTimezone field. Defaults to ascending (smallest value first). */
    ianaTimezone?: SortOrder | null;
    /** Sort the results by the latitude field. Defaults to ascending (smallest value first). */
    latitude?: SortOrder | null;
    /** Sort the results by the longitude field. Defaults to ascending (smallest value first). */
    longitude?: SortOrder | null;
    /** Sort the results by the moneyFormat field. Defaults to ascending (smallest value first). */
    moneyFormat?: SortOrder | null;
    /** Sort the results by the moneyInEmailsFormat field. Defaults to ascending (smallest value first). */
    moneyInEmailsFormat?: SortOrder | null;
    /** Sort the results by the moneyWithCurrencyFormat field. Defaults to ascending (smallest value first). */
    moneyWithCurrencyFormat?: SortOrder | null;
    /** Sort the results by the moneyWithCurrencyInEmailsFormat field. Defaults to ascending (smallest value first). */
    moneyWithCurrencyInEmailsFormat?: SortOrder | null;
    /** Sort the results by the multiLocationEnabled field. Defaults to ascending (smallest value first). */
    multiLocationEnabled?: SortOrder | null;
    /** Sort the results by the myshopifyDomain field. Defaults to ascending (smallest value first). */
    myshopifyDomain?: SortOrder | null;
    /** Sort the results by the name field. Defaults to ascending (smallest value first). */
    name?: SortOrder | null;
    /** Sort the results by the passwordEnabled field. Defaults to ascending (smallest value first). */
    passwordEnabled?: SortOrder | null;
    /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
    phone?: SortOrder | null;
    /** Sort the results by the planName field. Defaults to ascending (smallest value first). */
    planName?: SortOrder | null;
    /** Sort the results by the preLaunchEnabled field. Defaults to ascending (smallest value first). */
    preLaunchEnabled?: SortOrder | null;
    /** Sort the results by the primaryLocale field. Defaults to ascending (smallest value first). */
    primaryLocale?: SortOrder | null;
    /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
    shopifyCreatedAt?: SortOrder | null;
    /** Sort the results by the province field. Defaults to ascending (smallest value first). */
    province?: SortOrder | null;
    /** Sort the results by the provinceCode field. Defaults to ascending (smallest value first). */
    provinceCode?: SortOrder | null;
    /** Sort the results by the requiresExtraPaymentsAgreement field. Defaults to ascending (smallest value first). */
    requiresExtraPaymentsAgreement?: SortOrder | null;
    /** Sort the results by the setupRequired field. Defaults to ascending (smallest value first). */
    setupRequired?: SortOrder | null;
    /** Sort the results by the shopOwner field. Defaults to ascending (smallest value first). */
    shopOwner?: SortOrder | null;
    /** Sort the results by the source field. Defaults to ascending (smallest value first). */
    source?: SortOrder | null;
    /** Sort the results by the taxShipping field. Defaults to ascending (smallest value first). */
    taxShipping?: SortOrder | null;
    /** Sort the results by the taxesIncluded field. Defaults to ascending (smallest value first). */
    taxesIncluded?: SortOrder | null;
    /** Sort the results by the timezone field. Defaults to ascending (smallest value first). */
    timezone?: SortOrder | null;
    /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
    shopifyUpdatedAt?: SortOrder | null;
    /** Sort the results by the weightUnit field. Defaults to ascending (smallest value first). */
    weightUnit?: SortOrder | null;
    /** Sort the results by the alerts field. Defaults to ascending (smallest value first). */
    alerts?: SortOrder | null;
    /** Sort the results by the billingAddress field. Defaults to ascending (smallest value first). */
    billingAddress?: SortOrder | null;
    /** Sort the results by the countriesInShippingZones field. Defaults to ascending (smallest value first). */
    countriesInShippingZones?: SortOrder | null;
    /** Sort the results by the currencyFormats field. Defaults to ascending (smallest value first). */
    currencyFormats?: SortOrder | null;
    /** Sort the results by the customerAccounts field. Defaults to ascending (smallest value first). */
    customerAccounts?: SortOrder | null;
    /** Sort the results by the zipCode field. Defaults to ascending (smallest value first). */
    zipCode?: SortOrder | null;
    /** Sort the results by the description field. Defaults to ascending (smallest value first). */
    description?: SortOrder | null;
    /** Sort the results by the orderNumberFormatPrefix field. Defaults to ascending (smallest value first). */
    orderNumberFormatPrefix?: SortOrder | null;
    /** Sort the results by the orderNumberFormatSuffix field. Defaults to ascending (smallest value first). */
    orderNumberFormatSuffix?: SortOrder | null;
    /** Sort the results by the resourceLimits field. Defaults to ascending (smallest value first). */
    resourceLimits?: SortOrder | null;
    /** Sort the results by the richTextEditorUrl field. Defaults to ascending (smallest value first). */
    richTextEditorUrl?: SortOrder | null;
    /** Sort the results by the shipsToCountries field. Defaults to ascending (smallest value first). */
    shipsToCountries?: SortOrder | null;
    /** Sort the results by the timezoneAbbreviation field. Defaults to ascending (smallest value first). */
    timezoneAbbreviation?: SortOrder | null;
    /** Sort the results by the timezoneOffset field. Defaults to ascending (smallest value first). */
    timezoneOffset?: SortOrder | null;
    /** Sort the results by the timezoneOffsetMinutes field. Defaults to ascending (smallest value first). */
    timezoneOffsetMinutes?: SortOrder | null;
    /** Sort the results by the unitSystem field. Defaults to ascending (smallest value first). */
    unitSystem?: SortOrder | null;
    /** Sort the results by the customerAccountsV2 field. Defaults to ascending (smallest value first). */
    customerAccountsV2?: SortOrder | null;
    /** Sort the results by the url field. Defaults to ascending (smallest value first). */
    url?: SortOrder | null;
    /** Sort the results by the grantedScopes field. Defaults to ascending (smallest value first). */
    grantedScopes?: SortOrder | null;
    /** Sort the results by the registeredWebhooks field. Defaults to ascending (smallest value first). */
    registeredWebhooks?: SortOrder | null;
    /** Sort the results by the disabledWebhooks field. Defaults to ascending (smallest value first). */
    disabledWebhooks?: SortOrder | null;
    /** Sort the results by the installedViaApiKey field. Defaults to ascending (smallest value first). */
    installedViaApiKey?: SortOrder | null;
};
export type ShopifyShopFilter = {
    AND?: (ShopifyShopFilter | null)[];
    OR?: (ShopifyShopFilter | null)[];
    NOT?: (ShopifyShopFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    state?: StateFilter | null;
    plan?: JSONFilter | null;
    address1?: StringFilter | null;
    marketingSmsContentEnabledAtCheckout?: BooleanFilter | null;
    planPublicDisplayName?: StringFilter | null;
    planDisplayName?: StringFilter | null;
    transactionalSmsDisabled?: BooleanFilter | null;
    address2?: StringFilter | null;
    checkoutApiSupported?: BooleanFilter | null;
    city?: StringFilter | null;
    country?: StringFilter | null;
    countryCode?: StringFilter | null;
    countryName?: StringFilter | null;
    countyTaxes?: JSONFilter | null;
    currency?: SingleEnumFilter | null;
    customerEmail?: StringFilter | null;
    domain?: StringFilter | null;
    eligibleForPayments?: BooleanFilter | null;
    email?: StringFilter | null;
    enabledPresentmentCurrencies?: MultiEnumFilter | null;
    finances?: BooleanFilter | null;
    googleAppsDomain?: StringFilter | null;
    googleAppsLoginEnabled?: BooleanFilter | null;
    hasDiscounts?: BooleanFilter | null;
    hasGiftCards?: BooleanFilter | null;
    hasStorefront?: BooleanFilter | null;
    ianaTimezone?: StringFilter | null;
    latitude?: FloatFilter | null;
    longitude?: FloatFilter | null;
    moneyFormat?: StringFilter | null;
    moneyInEmailsFormat?: StringFilter | null;
    moneyWithCurrencyFormat?: StringFilter | null;
    moneyWithCurrencyInEmailsFormat?: StringFilter | null;
    multiLocationEnabled?: BooleanFilter | null;
    myshopifyDomain?: StringFilter | null;
    name?: StringFilter | null;
    passwordEnabled?: BooleanFilter | null;
    phone?: StringFilter | null;
    planName?: StringFilter | null;
    preLaunchEnabled?: BooleanFilter | null;
    primaryLocale?: StringFilter | null;
    shopifyCreatedAt?: DateTimeFilter | null;
    province?: StringFilter | null;
    provinceCode?: StringFilter | null;
    requiresExtraPaymentsAgreement?: BooleanFilter | null;
    setupRequired?: BooleanFilter | null;
    shopOwner?: StringFilter | null;
    source?: StringFilter | null;
    taxShipping?: BooleanFilter | null;
    taxesIncluded?: BooleanFilter | null;
    timezone?: StringFilter | null;
    shopifyUpdatedAt?: DateTimeFilter | null;
    weightUnit?: SingleEnumFilter | null;
    alerts?: JSONFilter | null;
    billingAddress?: JSONFilter | null;
    countriesInShippingZones?: JSONFilter | null;
    currencyFormats?: JSONFilter | null;
    customerAccounts?: SingleEnumFilter | null;
    zipCode?: StringFilter | null;
    description?: StringFilter | null;
    orderNumberFormatPrefix?: StringFilter | null;
    orderNumberFormatSuffix?: StringFilter | null;
    resourceLimits?: JSONFilter | null;
    richTextEditorUrl?: StringFilter | null;
    shipsToCountries?: MultiEnumFilter | null;
    timezoneAbbreviation?: StringFilter | null;
    timezoneOffset?: StringFilter | null;
    timezoneOffsetMinutes?: FloatFilter | null;
    unitSystem?: SingleEnumFilter | null;
    customerAccountsV2?: JSONFilter | null;
    url?: StringFilter | null;
    grantedScopes?: JSONFilter | null;
    registeredWebhooks?: JSONFilter | null;
    syncs?: ShopifySyncsRelationshipFilter | null;
    disabledWebhooks?: JSONFilter | null;
    installedViaApiKey?: StringFilter | null;
};
export type ShopifyGdprRequestSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the payload field. Defaults to ascending (smallest value first). */
    payload?: SortOrder | null;
    /** Sort the results by the topic field. Defaults to ascending (smallest value first). */
    topic?: SortOrder | null;
};
export type ShopifyGdprRequestFilter = {
    AND?: (ShopifyGdprRequestFilter | null)[];
    OR?: (ShopifyGdprRequestFilter | null)[];
    NOT?: (ShopifyGdprRequestFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    shopId?: IDFilter | null;
    shop?: ShopifyShopRelationshipFilter | null;
    payload?: JSONFilter | null;
    topic?: SingleEnumFilter | null;
};
export type ShopifyOrderSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the billingAddress field. Defaults to ascending (smallest value first). */
    billingAddress?: SortOrder | null;
    /** Sort the results by the browserIp field. Defaults to ascending (smallest value first). */
    browserIp?: SortOrder | null;
    /** Sort the results by the buyerAcceptsMarketing field. Defaults to ascending (smallest value first). */
    buyerAcceptsMarketing?: SortOrder | null;
    /** Sort the results by the cancelReason field. Defaults to ascending (smallest value first). */
    cancelReason?: SortOrder | null;
    /** Sort the results by the cancelledAt field. Defaults to ascending (smallest value first). */
    cancelledAt?: SortOrder | null;
    /** Sort the results by the cartToken field. Defaults to ascending (smallest value first). */
    cartToken?: SortOrder | null;
    /** Sort the results by the checkoutToken field. Defaults to ascending (smallest value first). */
    checkoutToken?: SortOrder | null;
    /** Sort the results by the clientDetails field. Defaults to ascending (smallest value first). */
    clientDetails?: SortOrder | null;
    /** Sort the results by the closedAt field. Defaults to ascending (smallest value first). */
    closedAt?: SortOrder | null;
    /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
    currency?: SortOrder | null;
    /** Sort the results by the currentSubtotalPrice field. Defaults to ascending (smallest value first). */
    currentSubtotalPrice?: SortOrder | null;
    /** Sort the results by the currentSubtotalPriceSet field. Defaults to ascending (smallest value first). */
    currentSubtotalPriceSet?: SortOrder | null;
    /** Sort the results by the currentTotalDiscounts field. Defaults to ascending (smallest value first). */
    currentTotalDiscounts?: SortOrder | null;
    /** Sort the results by the currentTotalDiscountsSet field. Defaults to ascending (smallest value first). */
    currentTotalDiscountsSet?: SortOrder | null;
    /** Sort the results by the currentTotalDutiesSet field. Defaults to ascending (smallest value first). */
    currentTotalDutiesSet?: SortOrder | null;
    /** Sort the results by the currentTotalPrice field. Defaults to ascending (smallest value first). */
    currentTotalPrice?: SortOrder | null;
    /** Sort the results by the currentTotalPriceSet field. Defaults to ascending (smallest value first). */
    currentTotalPriceSet?: SortOrder | null;
    /** Sort the results by the currentTotalTax field. Defaults to ascending (smallest value first). */
    currentTotalTax?: SortOrder | null;
    /** Sort the results by the currentTotalTaxSet field. Defaults to ascending (smallest value first). */
    currentTotalTaxSet?: SortOrder | null;
    /** Sort the results by the customerLocale field. Defaults to ascending (smallest value first). */
    customerLocale?: SortOrder | null;
    /** Sort the results by the discountApplications field. Defaults to ascending (smallest value first). */
    discountApplications?: SortOrder | null;
    /** Sort the results by the discountCodes field. Defaults to ascending (smallest value first). */
    discountCodes?: SortOrder | null;
    /** Sort the results by the email field. Defaults to ascending (smallest value first). */
    email?: SortOrder | null;
    /** Sort the results by the estimatedTaxes field. Defaults to ascending (smallest value first). */
    estimatedTaxes?: SortOrder | null;
    /** Sort the results by the financialStatus field. Defaults to ascending (smallest value first). */
    financialStatus?: SortOrder | null;
    /** Sort the results by the fulfillmentStatus field. Defaults to ascending (smallest value first). */
    fulfillmentStatus?: SortOrder | null;
    /** Sort the results by the landingSite field. Defaults to ascending (smallest value first). */
    landingSite?: SortOrder | null;
    /** Sort the results by the name field. Defaults to ascending (smallest value first). */
    name?: SortOrder | null;
    /** Sort the results by the note field. Defaults to ascending (smallest value first). */
    note?: SortOrder | null;
    /** Sort the results by the noteAttributes field. Defaults to ascending (smallest value first). */
    noteAttributes?: SortOrder | null;
    /** Sort the results by the orderStatusUrl field. Defaults to ascending (smallest value first). */
    orderStatusUrl?: SortOrder | null;
    /** Sort the results by the originalTotalDutiesSet field. Defaults to ascending (smallest value first). */
    originalTotalDutiesSet?: SortOrder | null;
    /** Sort the results by the paymentGatewayNames field. Defaults to ascending (smallest value first). */
    paymentGatewayNames?: SortOrder | null;
    /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
    phone?: SortOrder | null;
    /** Sort the results by the presentmentCurrency field. Defaults to ascending (smallest value first). */
    presentmentCurrency?: SortOrder | null;
    /** Sort the results by the processedAt field. Defaults to ascending (smallest value first). */
    processedAt?: SortOrder | null;
    /** Sort the results by the processingMethod field. Defaults to ascending (smallest value first). */
    processingMethod?: SortOrder | null;
    /** Sort the results by the referringSite field. Defaults to ascending (smallest value first). */
    referringSite?: SortOrder | null;
    /** Sort the results by the shippingAddress field. Defaults to ascending (smallest value first). */
    shippingAddress?: SortOrder | null;
    /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
    shopifyCreatedAt?: SortOrder | null;
    /** Sort the results by the sourceName field. Defaults to ascending (smallest value first). */
    sourceName?: SortOrder | null;
    /** Sort the results by the subtotalPrice field. Defaults to ascending (smallest value first). */
    subtotalPrice?: SortOrder | null;
    /** Sort the results by the subtotalPriceSet field. Defaults to ascending (smallest value first). */
    subtotalPriceSet?: SortOrder | null;
    /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
    tags?: SortOrder | null;
    /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
    shopifyUpdatedAt?: SortOrder | null;
    /** Sort the results by the taxLines field. Defaults to ascending (smallest value first). */
    taxLines?: SortOrder | null;
    /** Sort the results by the taxesIncluded field. Defaults to ascending (smallest value first). */
    taxesIncluded?: SortOrder | null;
    /** Sort the results by the test field. Defaults to ascending (smallest value first). */
    test?: SortOrder | null;
    /** Sort the results by the token field. Defaults to ascending (smallest value first). */
    token?: SortOrder | null;
    /** Sort the results by the totalDiscounts field. Defaults to ascending (smallest value first). */
    totalDiscounts?: SortOrder | null;
    /** Sort the results by the totalDiscountsSet field. Defaults to ascending (smallest value first). */
    totalDiscountsSet?: SortOrder | null;
    /** Sort the results by the totalLineItemsPrice field. Defaults to ascending (smallest value first). */
    totalLineItemsPrice?: SortOrder | null;
    /** Sort the results by the totalLineItemsPriceSet field. Defaults to ascending (smallest value first). */
    totalLineItemsPriceSet?: SortOrder | null;
    /** Sort the results by the totalOutstanding field. Defaults to ascending (smallest value first). */
    totalOutstanding?: SortOrder | null;
    /** Sort the results by the totalPrice field. Defaults to ascending (smallest value first). */
    totalPrice?: SortOrder | null;
    /** Sort the results by the totalPriceSet field. Defaults to ascending (smallest value first). */
    totalPriceSet?: SortOrder | null;
    /** Sort the results by the totalShippingPriceSet field. Defaults to ascending (smallest value first). */
    totalShippingPriceSet?: SortOrder | null;
    /** Sort the results by the totalTax field. Defaults to ascending (smallest value first). */
    totalTax?: SortOrder | null;
    /** Sort the results by the totalTaxSet field. Defaults to ascending (smallest value first). */
    totalTaxSet?: SortOrder | null;
    /** Sort the results by the totalTipReceived field. Defaults to ascending (smallest value first). */
    totalTipReceived?: SortOrder | null;
    /** Sort the results by the totalWeight field. Defaults to ascending (smallest value first). */
    totalWeight?: SortOrder | null;
    /** Sort the results by the additionalFees field. Defaults to ascending (smallest value first). */
    additionalFees?: SortOrder | null;
    /** Sort the results by the currentTotalAdditionalFeesSet field. Defaults to ascending (smallest value first). */
    currentTotalAdditionalFeesSet?: SortOrder | null;
    /** Sort the results by the merchantOfRecordAppId field. Defaults to ascending (smallest value first). */
    merchantOfRecordAppId?: SortOrder | null;
    /** Sort the results by the originalTotalAdditionalFeesSet field. Defaults to ascending (smallest value first). */
    originalTotalAdditionalFeesSet?: SortOrder | null;
    /** Sort the results by the sourceIdentifier field. Defaults to ascending (smallest value first). */
    sourceIdentifier?: SortOrder | null;
    /** Sort the results by the sourceUrl field. Defaults to ascending (smallest value first). */
    sourceUrl?: SortOrder | null;
    /** Sort the results by the taxExempt field. Defaults to ascending (smallest value first). */
    taxExempt?: SortOrder | null;
    /** Sort the results by the fulfillmentsCount field. Defaults to ascending (smallest value first). */
    fulfillmentsCount?: SortOrder | null;
    /** Sort the results by the cancellation field. Defaults to ascending (smallest value first). */
    cancellation?: SortOrder | null;
    /** Sort the results by the risk field. Defaults to ascending (smallest value first). */
    risk?: SortOrder | null;
    /** Sort the results by the shopifyProtect field. Defaults to ascending (smallest value first). */
    shopifyProtect?: SortOrder | null;
    /** Sort the results by the totalCashRoundingAdjustment field. Defaults to ascending (smallest value first). */
    totalCashRoundingAdjustment?: SortOrder | null;
    /** Sort the results by the transactionsCount field. Defaults to ascending (smallest value first). */
    transactionsCount?: SortOrder | null;
    /** Sort the results by the billingStatusMatchesShippingAddress field. Defaults to ascending (smallest value first). */
    billingStatusMatchesShippingAddress?: SortOrder | null;
    /** Sort the results by the poNumber field. Defaults to ascending (smallest value first). */
    poNumber?: SortOrder | null;
    /** Sort the results by the alerts field. Defaults to ascending (smallest value first). */
    alerts?: SortOrder | null;
    /** Sort the results by the canMarkAsPaid field. Defaults to ascending (smallest value first). */
    canMarkAsPaid?: SortOrder | null;
    /** Sort the results by the canNotifyCustomer field. Defaults to ascending (smallest value first). */
    canNotifyCustomer?: SortOrder | null;
    /** Sort the results by the capturable field. Defaults to ascending (smallest value first). */
    capturable?: SortOrder | null;
    /** Sort the results by the cartDiscountAmountSet field. Defaults to ascending (smallest value first). */
    cartDiscountAmountSet?: SortOrder | null;
    /** Sort the results by the closed field. Defaults to ascending (smallest value first). */
    closed?: SortOrder | null;
    /** Sort the results by the confirmationNumber field. Defaults to ascending (smallest value first). */
    confirmationNumber?: SortOrder | null;
    /** Sort the results by the confirmed field. Defaults to ascending (smallest value first). */
    confirmed?: SortOrder | null;
    /** Sort the results by the currentCartDiscountAmountSet field. Defaults to ascending (smallest value first). */
    currentCartDiscountAmountSet?: SortOrder | null;
    /** Sort the results by the currentSubtotalLineItemsQuantity field. Defaults to ascending (smallest value first). */
    currentSubtotalLineItemsQuantity?: SortOrder | null;
    /** Sort the results by the currentTotalWeight field. Defaults to ascending (smallest value first). */
    currentTotalWeight?: SortOrder | null;
    /** Sort the results by the currentShippingPriceSet field. Defaults to ascending (smallest value first). */
    currentShippingPriceSet?: SortOrder | null;
    /** Sort the results by the dutiesIncluded field. Defaults to ascending (smallest value first). */
    dutiesIncluded?: SortOrder | null;
    /** Sort the results by the edited field. Defaults to ascending (smallest value first). */
    edited?: SortOrder | null;
    /** Sort the results by the fulfillable field. Defaults to ascending (smallest value first). */
    fulfillable?: SortOrder | null;
    /** Sort the results by the fullyPaid field. Defaults to ascending (smallest value first). */
    fullyPaid?: SortOrder | null;
    /** Sort the results by the hasTimelineComment field. Defaults to ascending (smallest value first). */
    hasTimelineComment?: SortOrder | null;
    /** Sort the results by the legacyResourceId field. Defaults to ascending (smallest value first). */
    legacyResourceId?: SortOrder | null;
    /** Sort the results by the merchantEditable field. Defaults to ascending (smallest value first). */
    merchantEditable?: SortOrder | null;
    /** Sort the results by the merchantEditableErrors field. Defaults to ascending (smallest value first). */
    merchantEditableErrors?: SortOrder | null;
    /** Sort the results by the netPaymentSet field. Defaults to ascending (smallest value first). */
    netPaymentSet?: SortOrder | null;
    /** Sort the results by the originalTotalPriceSet field. Defaults to ascending (smallest value first). */
    originalTotalPriceSet?: SortOrder | null;
    /** Sort the results by the refundDiscrepencySet field. Defaults to ascending (smallest value first). */
    refundDiscrepencySet?: SortOrder | null;
    /** Sort the results by the refundable field. Defaults to ascending (smallest value first). */
    refundable?: SortOrder | null;
    /** Sort the results by the requiresShipping field. Defaults to ascending (smallest value first). */
    requiresShipping?: SortOrder | null;
    /** Sort the results by the restockable field. Defaults to ascending (smallest value first). */
    restockable?: SortOrder | null;
    /** Sort the results by the returnStatus field. Defaults to ascending (smallest value first). */
    returnStatus?: SortOrder | null;
    /** Sort the results by the totalCapturableSet field. Defaults to ascending (smallest value first). */
    totalCapturableSet?: SortOrder | null;
    /** Sort the results by the totalOutstandingSet field. Defaults to ascending (smallest value first). */
    totalOutstandingSet?: SortOrder | null;
    /** Sort the results by the totalReceivedSet field. Defaults to ascending (smallest value first). */
    totalReceivedSet?: SortOrder | null;
    /** Sort the results by the totalRefundedSet field. Defaults to ascending (smallest value first). */
    totalRefundedSet?: SortOrder | null;
    /** Sort the results by the totalRefundedShippingSet field. Defaults to ascending (smallest value first). */
    totalRefundedShippingSet?: SortOrder | null;
    /** Sort the results by the totalTipReceivedSet field. Defaults to ascending (smallest value first). */
    totalTipReceivedSet?: SortOrder | null;
    /** Sort the results by the unpaid field. Defaults to ascending (smallest value first). */
    unpaid?: SortOrder | null;
    /** Sort the results by the customerJourneySummary field. Defaults to ascending (smallest value first). */
    customerJourneySummary?: SortOrder | null;
};
export type ShopifyOrderFilter = {
    AND?: (ShopifyOrderFilter | null)[];
    OR?: (ShopifyOrderFilter | null)[];
    NOT?: (ShopifyOrderFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    billingAddress?: JSONFilter | null;
    browserIp?: StringFilter | null;
    buyerAcceptsMarketing?: BooleanFilter | null;
    cancelReason?: SingleEnumFilter | null;
    cancelledAt?: DateTimeFilter | null;
    cartToken?: StringFilter | null;
    checkoutToken?: StringFilter | null;
    clientDetails?: JSONFilter | null;
    closedAt?: DateTimeFilter | null;
    currency?: SingleEnumFilter | null;
    currentSubtotalPrice?: StringFilter | null;
    currentSubtotalPriceSet?: JSONFilter | null;
    currentTotalDiscounts?: StringFilter | null;
    currentTotalDiscountsSet?: JSONFilter | null;
    currentTotalDutiesSet?: JSONFilter | null;
    currentTotalPrice?: StringFilter | null;
    currentTotalPriceSet?: JSONFilter | null;
    currentTotalTax?: StringFilter | null;
    currentTotalTaxSet?: JSONFilter | null;
    customerLocale?: StringFilter | null;
    discountApplications?: JSONFilter | null;
    discountCodes?: JSONFilter | null;
    email?: StringFilter | null;
    estimatedTaxes?: BooleanFilter | null;
    financialStatus?: SingleEnumFilter | null;
    fulfillmentStatus?: SingleEnumFilter | null;
    landingSite?: StringFilter | null;
    name?: StringFilter | null;
    note?: StringFilter | null;
    noteAttributes?: JSONFilter | null;
    orderStatusUrl?: StringFilter | null;
    originalTotalDutiesSet?: JSONFilter | null;
    paymentGatewayNames?: JSONFilter | null;
    phone?: StringFilter | null;
    presentmentCurrency?: SingleEnumFilter | null;
    processedAt?: DateTimeFilter | null;
    processingMethod?: StringFilter | null;
    referringSite?: StringFilter | null;
    shippingAddress?: JSONFilter | null;
    shopifyCreatedAt?: DateTimeFilter | null;
    sourceName?: StringFilter | null;
    subtotalPrice?: StringFilter | null;
    subtotalPriceSet?: JSONFilter | null;
    tags?: JSONFilter | null;
    shopifyUpdatedAt?: DateTimeFilter | null;
    taxLines?: JSONFilter | null;
    taxesIncluded?: BooleanFilter | null;
    test?: BooleanFilter | null;
    token?: StringFilter | null;
    totalDiscounts?: StringFilter | null;
    totalDiscountsSet?: JSONFilter | null;
    totalLineItemsPrice?: StringFilter | null;
    totalLineItemsPriceSet?: JSONFilter | null;
    totalOutstanding?: StringFilter | null;
    totalPrice?: StringFilter | null;
    totalPriceSet?: JSONFilter | null;
    totalShippingPriceSet?: JSONFilter | null;
    totalTax?: StringFilter | null;
    totalTaxSet?: JSONFilter | null;
    totalTipReceived?: StringFilter | null;
    totalWeight?: FloatFilter | null;
    additionalFees?: JSONFilter | null;
    currentTotalAdditionalFeesSet?: JSONFilter | null;
    merchantOfRecordAppId?: FloatFilter | null;
    originalTotalAdditionalFeesSet?: JSONFilter | null;
    sourceIdentifier?: StringFilter | null;
    sourceUrl?: StringFilter | null;
    taxExempt?: BooleanFilter | null;
    fulfillmentsCount?: JSONFilter | null;
    cancellation?: JSONFilter | null;
    risk?: JSONFilter | null;
    shopifyProtect?: JSONFilter | null;
    totalCashRoundingAdjustment?: JSONFilter | null;
    transactionsCount?: JSONFilter | null;
    billingStatusMatchesShippingAddress?: BooleanFilter | null;
    poNumber?: StringFilter | null;
    alerts?: JSONFilter | null;
    canMarkAsPaid?: BooleanFilter | null;
    canNotifyCustomer?: BooleanFilter | null;
    capturable?: BooleanFilter | null;
    cartDiscountAmountSet?: JSONFilter | null;
    closed?: BooleanFilter | null;
    confirmationNumber?: StringFilter | null;
    confirmed?: BooleanFilter | null;
    currentCartDiscountAmountSet?: JSONFilter | null;
    currentSubtotalLineItemsQuantity?: FloatFilter | null;
    currentTotalWeight?: StringFilter | null;
    currentShippingPriceSet?: JSONFilter | null;
    dutiesIncluded?: BooleanFilter | null;
    edited?: BooleanFilter | null;
    fulfillable?: BooleanFilter | null;
    fullyPaid?: BooleanFilter | null;
    hasTimelineComment?: BooleanFilter | null;
    legacyResourceId?: StringFilter | null;
    merchantEditable?: BooleanFilter | null;
    merchantEditableErrors?: JSONFilter | null;
    netPaymentSet?: JSONFilter | null;
    originalTotalPriceSet?: JSONFilter | null;
    refundDiscrepencySet?: JSONFilter | null;
    refundable?: BooleanFilter | null;
    requiresShipping?: BooleanFilter | null;
    restockable?: BooleanFilter | null;
    returnStatus?: SingleEnumFilter | null;
    totalCapturableSet?: JSONFilter | null;
    totalOutstandingSet?: JSONFilter | null;
    totalReceivedSet?: JSONFilter | null;
    totalRefundedSet?: JSONFilter | null;
    totalRefundedShippingSet?: JSONFilter | null;
    totalTipReceivedSet?: JSONFilter | null;
    unpaid?: BooleanFilter | null;
    customerJourneySummary?: JSONFilter | null;
    shopId?: IDFilter | null;
    shop?: ShopifyShopRelationshipFilter | null;
    tracking?: OrderTrackingRelationshipFilter | null;
};
export type OrderTrackingRelationshipFilter = {
    AND?: (OrderTrackingRelationshipFilter | null)[];
    OR?: (OrderTrackingRelationshipFilter | null)[];
    NOT?: (OrderTrackingRelationshipFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    shippingCarrier?: StringFilter | null;
    trackingNumber?: StringFilter | null;
    deliveryStatus?: SingleEnumFilter | null;
    orderId?: IDFilter | null;
    order?: ShopifyOrderRelationshipFilter | null;
    shopId?: IDFilter | null;
    shop?: ShopifyShopRelationshipFilter | null;
};
export type ShopifyOrderRelationshipFilter = {
    AND?: (ShopifyOrderRelationshipFilter | null)[];
    OR?: (ShopifyOrderRelationshipFilter | null)[];
    NOT?: (ShopifyOrderRelationshipFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    billingAddress?: JSONFilter | null;
    browserIp?: StringFilter | null;
    buyerAcceptsMarketing?: BooleanFilter | null;
    cancelReason?: SingleEnumFilter | null;
    cancelledAt?: DateTimeFilter | null;
    cartToken?: StringFilter | null;
    checkoutToken?: StringFilter | null;
    clientDetails?: JSONFilter | null;
    closedAt?: DateTimeFilter | null;
    currency?: SingleEnumFilter | null;
    currentSubtotalPrice?: StringFilter | null;
    currentSubtotalPriceSet?: JSONFilter | null;
    currentTotalDiscounts?: StringFilter | null;
    currentTotalDiscountsSet?: JSONFilter | null;
    currentTotalDutiesSet?: JSONFilter | null;
    currentTotalPrice?: StringFilter | null;
    currentTotalPriceSet?: JSONFilter | null;
    currentTotalTax?: StringFilter | null;
    currentTotalTaxSet?: JSONFilter | null;
    customerLocale?: StringFilter | null;
    discountApplications?: JSONFilter | null;
    discountCodes?: JSONFilter | null;
    email?: StringFilter | null;
    estimatedTaxes?: BooleanFilter | null;
    financialStatus?: SingleEnumFilter | null;
    fulfillmentStatus?: SingleEnumFilter | null;
    landingSite?: StringFilter | null;
    name?: StringFilter | null;
    note?: StringFilter | null;
    noteAttributes?: JSONFilter | null;
    orderStatusUrl?: StringFilter | null;
    originalTotalDutiesSet?: JSONFilter | null;
    paymentGatewayNames?: JSONFilter | null;
    phone?: StringFilter | null;
    presentmentCurrency?: SingleEnumFilter | null;
    processedAt?: DateTimeFilter | null;
    processingMethod?: StringFilter | null;
    referringSite?: StringFilter | null;
    shippingAddress?: JSONFilter | null;
    shopifyCreatedAt?: DateTimeFilter | null;
    sourceName?: StringFilter | null;
    subtotalPrice?: StringFilter | null;
    subtotalPriceSet?: JSONFilter | null;
    tags?: JSONFilter | null;
    shopifyUpdatedAt?: DateTimeFilter | null;
    taxLines?: JSONFilter | null;
    taxesIncluded?: BooleanFilter | null;
    test?: BooleanFilter | null;
    token?: StringFilter | null;
    totalDiscounts?: StringFilter | null;
    totalDiscountsSet?: JSONFilter | null;
    totalLineItemsPrice?: StringFilter | null;
    totalLineItemsPriceSet?: JSONFilter | null;
    totalOutstanding?: StringFilter | null;
    totalPrice?: StringFilter | null;
    totalPriceSet?: JSONFilter | null;
    totalShippingPriceSet?: JSONFilter | null;
    totalTax?: StringFilter | null;
    totalTaxSet?: JSONFilter | null;
    totalTipReceived?: StringFilter | null;
    totalWeight?: FloatFilter | null;
    additionalFees?: JSONFilter | null;
    currentTotalAdditionalFeesSet?: JSONFilter | null;
    merchantOfRecordAppId?: FloatFilter | null;
    originalTotalAdditionalFeesSet?: JSONFilter | null;
    sourceIdentifier?: StringFilter | null;
    sourceUrl?: StringFilter | null;
    taxExempt?: BooleanFilter | null;
    fulfillmentsCount?: JSONFilter | null;
    cancellation?: JSONFilter | null;
    risk?: JSONFilter | null;
    shopifyProtect?: JSONFilter | null;
    totalCashRoundingAdjustment?: JSONFilter | null;
    transactionsCount?: JSONFilter | null;
    billingStatusMatchesShippingAddress?: BooleanFilter | null;
    poNumber?: StringFilter | null;
    alerts?: JSONFilter | null;
    canMarkAsPaid?: BooleanFilter | null;
    canNotifyCustomer?: BooleanFilter | null;
    capturable?: BooleanFilter | null;
    cartDiscountAmountSet?: JSONFilter | null;
    closed?: BooleanFilter | null;
    confirmationNumber?: StringFilter | null;
    confirmed?: BooleanFilter | null;
    currentCartDiscountAmountSet?: JSONFilter | null;
    currentSubtotalLineItemsQuantity?: FloatFilter | null;
    currentTotalWeight?: StringFilter | null;
    currentShippingPriceSet?: JSONFilter | null;
    dutiesIncluded?: BooleanFilter | null;
    edited?: BooleanFilter | null;
    fulfillable?: BooleanFilter | null;
    fullyPaid?: BooleanFilter | null;
    hasTimelineComment?: BooleanFilter | null;
    legacyResourceId?: StringFilter | null;
    merchantEditable?: BooleanFilter | null;
    merchantEditableErrors?: JSONFilter | null;
    netPaymentSet?: JSONFilter | null;
    originalTotalPriceSet?: JSONFilter | null;
    refundDiscrepencySet?: JSONFilter | null;
    refundable?: BooleanFilter | null;
    requiresShipping?: BooleanFilter | null;
    restockable?: BooleanFilter | null;
    returnStatus?: SingleEnumFilter | null;
    totalCapturableSet?: JSONFilter | null;
    totalOutstandingSet?: JSONFilter | null;
    totalReceivedSet?: JSONFilter | null;
    totalRefundedSet?: JSONFilter | null;
    totalRefundedShippingSet?: JSONFilter | null;
    totalTipReceivedSet?: JSONFilter | null;
    unpaid?: BooleanFilter | null;
    customerJourneySummary?: JSONFilter | null;
    shopId?: IDFilter | null;
    shop?: ShopifyShopRelationshipFilter | null;
    tracking?: OrderTrackingRelationshipFilter | null;
};
export type ProductCustomizationSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the productVariantId field. Defaults to ascending (smallest value first). */
    productVariantId?: SortOrder | null;
    /** Sort the results by the customizationValue field. Defaults to ascending (smallest value first). */
    customizationValue?: SortOrder | null;
    /** Sort the results by the customizationType field. Defaults to ascending (smallest value first). */
    customizationType?: SortOrder | null;
};
export type ProductCustomizationFilter = {
    AND?: (ProductCustomizationFilter | null)[];
    OR?: (ProductCustomizationFilter | null)[];
    NOT?: (ProductCustomizationFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    productId?: IDFilter | null;
    product?: ShopifyProductRelationshipFilter | null;
    productVariantId?: FloatFilter | null;
    customizationValue?: StringFilter | null;
    customizationType?: StringFilter | null;
    shopId?: IDFilter | null;
    shop?: ShopifyShopRelationshipFilter | null;
};
export type ShopifyProductRelationshipFilter = {
    AND?: (ShopifyProductRelationshipFilter | null)[];
    OR?: (ShopifyProductRelationshipFilter | null)[];
    NOT?: (ShopifyProductRelationshipFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    body?: StringFilter | null;
    handle?: StringFilter | null;
    category?: JSONFilter | null;
    hasVariantsThatRequiresComponents?: BooleanFilter | null;
    shopifyCreatedAt?: DateTimeFilter | null;
    productType?: StringFilter | null;
    publishedAt?: DateTimeFilter | null;
    title?: StringFilter | null;
    shopifyUpdatedAt?: DateTimeFilter | null;
    vendor?: StringFilter | null;
    compareAtPriceRange?: JSONFilter | null;
    productCategory?: JSONFilter | null;
    status?: SingleEnumFilter | null;
    tags?: JSONFilter | null;
    templateSuffix?: StringFilter | null;
    shopId?: IDFilter | null;
    shop?: ShopifyShopRelationshipFilter | null;
    customizations?: ProductCustomizationsRelationshipFilter | null;
};
export type ProductCustomizationsRelationshipFilter = {
    some?: ProductCustomizationsInnerRelationshipFilter | null;
    every?: ProductCustomizationsInnerRelationshipFilter | null;
};
export type ProductCustomizationsInnerRelationshipFilter = {
    AND?: (ProductCustomizationsInnerRelationshipFilter | null)[];
    OR?: (ProductCustomizationsInnerRelationshipFilter | null)[];
    NOT?: (ProductCustomizationsInnerRelationshipFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    productId?: IDFilter | null;
    product?: ShopifyProductRelationshipFilter | null;
    productVariantId?: FloatFilter | null;
    customizationValue?: StringFilter | null;
    customizationType?: StringFilter | null;
    shopId?: IDFilter | null;
    shop?: ShopifyShopRelationshipFilter | null;
};
export type ShopifyProductSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the body field. Defaults to ascending (smallest value first). */
    body?: SortOrder | null;
    /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
    handle?: SortOrder | null;
    /** Sort the results by the category field. Defaults to ascending (smallest value first). */
    category?: SortOrder | null;
    /** Sort the results by the hasVariantsThatRequiresComponents field. Defaults to ascending (smallest value first). */
    hasVariantsThatRequiresComponents?: SortOrder | null;
    /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
    shopifyCreatedAt?: SortOrder | null;
    /** Sort the results by the productType field. Defaults to ascending (smallest value first). */
    productType?: SortOrder | null;
    /** Sort the results by the publishedAt field. Defaults to ascending (smallest value first). */
    publishedAt?: SortOrder | null;
    /** Sort the results by the title field. Defaults to ascending (smallest value first). */
    title?: SortOrder | null;
    /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
    shopifyUpdatedAt?: SortOrder | null;
    /** Sort the results by the vendor field. Defaults to ascending (smallest value first). */
    vendor?: SortOrder | null;
    /** Sort the results by the compareAtPriceRange field. Defaults to ascending (smallest value first). */
    compareAtPriceRange?: SortOrder | null;
    /** Sort the results by the productCategory field. Defaults to ascending (smallest value first). */
    productCategory?: SortOrder | null;
    /** Sort the results by the status field. Defaults to ascending (smallest value first). */
    status?: SortOrder | null;
    /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
    tags?: SortOrder | null;
    /** Sort the results by the templateSuffix field. Defaults to ascending (smallest value first). */
    templateSuffix?: SortOrder | null;
};
export type ShopifyProductFilter = {
    AND?: (ShopifyProductFilter | null)[];
    OR?: (ShopifyProductFilter | null)[];
    NOT?: (ShopifyProductFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    body?: StringFilter | null;
    handle?: StringFilter | null;
    category?: JSONFilter | null;
    hasVariantsThatRequiresComponents?: BooleanFilter | null;
    shopifyCreatedAt?: DateTimeFilter | null;
    productType?: StringFilter | null;
    publishedAt?: DateTimeFilter | null;
    title?: StringFilter | null;
    shopifyUpdatedAt?: DateTimeFilter | null;
    vendor?: StringFilter | null;
    compareAtPriceRange?: JSONFilter | null;
    productCategory?: JSONFilter | null;
    status?: SingleEnumFilter | null;
    tags?: JSONFilter | null;
    templateSuffix?: StringFilter | null;
    shopId?: IDFilter | null;
    shop?: ShopifyShopRelationshipFilter | null;
    customizations?: ProductCustomizationsRelationshipFilter | null;
};
export type OrderTrackingSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the shippingCarrier field. Defaults to ascending (smallest value first). */
    shippingCarrier?: SortOrder | null;
    /** Sort the results by the trackingNumber field. Defaults to ascending (smallest value first). */
    trackingNumber?: SortOrder | null;
    /** Sort the results by the deliveryStatus field. Defaults to ascending (smallest value first). */
    deliveryStatus?: SortOrder | null;
};
export type OrderTrackingFilter = {
    AND?: (OrderTrackingFilter | null)[];
    OR?: (OrderTrackingFilter | null)[];
    NOT?: (OrderTrackingFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    shippingCarrier?: StringFilter | null;
    trackingNumber?: StringFilter | null;
    deliveryStatus?: SingleEnumFilter | null;
    orderId?: IDFilter | null;
    order?: ShopifyOrderRelationshipFilter | null;
    shopId?: IDFilter | null;
    shop?: ShopifyShopRelationshipFilter | null;
};
export type SessionFilter = {
    id?: IDEqualsFilter | null;
    shop?: IDEqualsFilter | null;
    shopId?: IDEqualsFilter | null;
    shopifySID?: StringEqualsFilter | null;
};
export type IDEqualsFilter = {
    equals?: (Scalars['GadgetID'] | null) | null;
};
export type StringEqualsFilter = {
    equals?: (Scalars['String'] | null) | null;
};
export type AbortShopifySyncInput = {
    shop?: ShopifyShopBelongsToInput | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    domain?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    syncSinceBy?: ShopifySyncSyncSinceByEnum | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
};
export type ShopifyShopBelongsToInput = {
    /** Existing ID of another record, which you would like to associate this record with */
    _link?: (Scalars['GadgetID'] | null) | null;
};
export type BulkAbortShopifySyncsInput = {
    shopifySync?: AbortShopifySyncInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type CompleteShopifySyncInput = {
    shop?: ShopifyShopBelongsToInput | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    domain?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    syncSinceBy?: ShopifySyncSyncSinceByEnum | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
};
export type BulkCompleteShopifySyncsInput = {
    shopifySync?: CompleteShopifySyncInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type ErrorShopifySyncInput = {
    shop?: ShopifyShopBelongsToInput | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    domain?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    syncSinceBy?: ShopifySyncSyncSinceByEnum | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
};
export type BulkErrorShopifySyncsInput = {
    shopifySync?: ErrorShopifySyncInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type RunShopifySyncInput = {
    shop?: ShopifyShopBelongsToInput | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    domain?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    syncSinceBy?: ShopifySyncSyncSinceByEnum | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
};
export type BulkRunShopifySyncsInput = {
    shopifySync?: RunShopifySyncInput | null;
    startReason?: (Scalars['String'] | null) | null;
};
export type UpsertShopifySyncInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    domain?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    syncSinceBy?: ShopifySyncSyncSinceByEnum | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
};
export type BulkUpsertShopifySyncsInput = {
    /** An array of Strings */
    on?: ((Scalars['String'] | null))[];
    shopifySync?: UpsertShopifySyncInput | null;
    startReason?: (Scalars['String'] | null) | null;
};
export type CreateOrderTrackingInput = {
    shippingCarrier?: (Scalars['String'] | null) | null;
    trackingNumber?: (Scalars['String'] | null) | null;
    deliveryStatus?: OrderTrackingDeliveryStatusEnum | null;
    order?: ShopifyOrderBelongsToInput | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type ShopifyOrderBelongsToInput = {
    /** Existing ID of another record, which you would like to associate this record with */
    _link?: (Scalars['GadgetID'] | null) | null;
};
export type BulkCreateOrderTrackingsInput = {
    orderTracking?: CreateOrderTrackingInput | null;
};
export type UpdateOrderTrackingInput = {
    shippingCarrier?: (Scalars['String'] | null) | null;
    trackingNumber?: (Scalars['String'] | null) | null;
    deliveryStatus?: OrderTrackingDeliveryStatusEnum | null;
    order?: ShopifyOrderBelongsToInput | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type BulkUpdateOrderTrackingsInput = {
    orderTracking?: UpdateOrderTrackingInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type UpsertOrderTrackingInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    shippingCarrier?: (Scalars['String'] | null) | null;
    trackingNumber?: (Scalars['String'] | null) | null;
    deliveryStatus?: OrderTrackingDeliveryStatusEnum | null;
    order?: ShopifyOrderBelongsToInput | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type BulkUpsertOrderTrackingsInput = {
    /** An array of Strings */
    on?: ((Scalars['String'] | null))[];
    orderTracking?: UpsertOrderTrackingInput | null;
};
export type CreateProductCustomizationInput = {
    product?: ShopifyProductBelongsToInput | null;
    productVariantId?: (Scalars['Float'] | null) | null;
    customizationValue?: (Scalars['String'] | null) | null;
    customizationType?: (Scalars['String'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type ShopifyProductBelongsToInput = {
    /** Existing ID of another record, which you would like to associate this record with */
    _link?: (Scalars['GadgetID'] | null) | null;
};
export type BulkCreateProductCustomizationsInput = {
    productCustomization?: CreateProductCustomizationInput | null;
};
export type UpdateProductCustomizationInput = {
    product?: ShopifyProductBelongsToInput | null;
    productVariantId?: (Scalars['Float'] | null) | null;
    customizationValue?: (Scalars['String'] | null) | null;
    customizationType?: (Scalars['String'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type BulkUpdateProductCustomizationsInput = {
    productCustomization?: UpdateProductCustomizationInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type UpsertProductCustomizationInput = {
    id?: (Scalars['GadgetID'] | null) | null;
    product?: ShopifyProductBelongsToInput | null;
    productVariantId?: (Scalars['Float'] | null) | null;
    customizationValue?: (Scalars['String'] | null) | null;
    customizationType?: (Scalars['String'] | null) | null;
    shop?: ShopifyShopBelongsToInput | null;
};
export type BulkUpsertProductCustomizationsInput = {
    /** An array of Strings */
    on?: ((Scalars['String'] | null))[];
    productCustomization?: UpsertProductCustomizationInput | null;
};
export type EnqueueBackgroundActionOptions = {
    /** A fixed ID to assign to this background action. If not passed, a random ID will be generated and assigned. */
    id?: (Scalars['String'] | null) | null;
    /** The priority for executing this action. */
    priority?: BackgroundActionPriority | null;
    /** Group actions into the same queue and limit the concurrency they can run with. */
    queue?: BackgroundActionQueue | null;
    /** Options governing if and how this action will be retried if it fails. */
    retries?: BackgroundActionRetryPolicy | null;
    /** Actions won't be started until after this time. */
    startAt?: Date | Scalars['ISO8601DateString'] | null;
};
export type BackgroundActionQueue = {
    /** The identifier for this queue. */
    name: (Scalars['String'] | null);
    /** The maximum number of actions that will be run at the same time. Defaults to 1 if not passed (only one job per key at once). */
    maxConcurrency?: (Scalars['Int'] | null) | null;
};
export type BackgroundActionRetryPolicy = {
    /** The number of repeat attempts to make if the initial attempt fails. Defaults to 10. Note: the total number of attempts will be this number plus one -- this counts the number of retries *after* the first attempt. */
    retryCount?: (Scalars['Int'] | null) | null;
    /** How long to delay the first retry attempt, in milliseconds. Default is 1000. */
    initialInterval?: (Scalars['Int'] | null) | null;
    /** The maximum amount of time to delay a retry while exponentially backing off in milliseconds. Default is not set, so the retry can backoff indefinitely */
    maxInterval?: (Scalars['Int'] | null) | null;
    /** The exponential backoff factor to use for calculating the retry delay for successive retries. Set this higher to grow the delay faster with each retry attempt. Default is 2. */
    backoffFactor?: (Scalars['Int'] | null) | null;
    /** If true, the retry interval will be randomized by a small amount to avoid all retries happening at the same time. Default is false. */
    randomizeInterval?: (Scalars['Boolean'] | null) | null;
};
export type InternalShopifyShopInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    plan?: (Scalars['JSON'] | null) | null;
    address1?: (Scalars['String'] | null) | null;
    marketingSmsContentEnabledAtCheckout?: (Scalars['Boolean'] | null) | null;
    planPublicDisplayName?: (Scalars['String'] | null) | null;
    planDisplayName?: (Scalars['String'] | null) | null;
    transactionalSmsDisabled?: (Scalars['Boolean'] | null) | null;
    address2?: (Scalars['String'] | null) | null;
    checkoutApiSupported?: (Scalars['Boolean'] | null) | null;
    city?: (Scalars['String'] | null) | null;
    country?: (Scalars['String'] | null) | null;
    countryCode?: (Scalars['String'] | null) | null;
    countryName?: (Scalars['String'] | null) | null;
    countyTaxes?: (Scalars['JSON'] | null) | null;
    currency?: ShopifyShopCurrencyEnum | null;
    customerEmail?: (Scalars['String'] | null) | null;
    domain?: (Scalars['String'] | null) | null;
    eligibleForPayments?: (Scalars['Boolean'] | null) | null;
    email?: (Scalars['String'] | null) | null;
    enabledPresentmentCurrencies?: (ShopifyShopEnabledPresentmentCurrenciesEnum)[];
    finances?: (Scalars['Boolean'] | null) | null;
    googleAppsDomain?: (Scalars['String'] | null) | null;
    googleAppsLoginEnabled?: (Scalars['Boolean'] | null) | null;
    hasDiscounts?: (Scalars['Boolean'] | null) | null;
    hasGiftCards?: (Scalars['Boolean'] | null) | null;
    hasStorefront?: (Scalars['Boolean'] | null) | null;
    ianaTimezone?: (Scalars['String'] | null) | null;
    latitude?: (Scalars['Float'] | null) | null;
    longitude?: (Scalars['Float'] | null) | null;
    moneyFormat?: (Scalars['String'] | null) | null;
    moneyInEmailsFormat?: (Scalars['String'] | null) | null;
    moneyWithCurrencyFormat?: (Scalars['String'] | null) | null;
    moneyWithCurrencyInEmailsFormat?: (Scalars['String'] | null) | null;
    multiLocationEnabled?: (Scalars['Boolean'] | null) | null;
    myshopifyDomain?: (Scalars['String'] | null) | null;
    name?: (Scalars['String'] | null) | null;
    passwordEnabled?: (Scalars['Boolean'] | null) | null;
    phone?: (Scalars['String'] | null) | null;
    planName?: (Scalars['String'] | null) | null;
    preLaunchEnabled?: (Scalars['Boolean'] | null) | null;
    primaryLocale?: (Scalars['String'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    province?: (Scalars['String'] | null) | null;
    provinceCode?: (Scalars['String'] | null) | null;
    requiresExtraPaymentsAgreement?: (Scalars['Boolean'] | null) | null;
    setupRequired?: (Scalars['Boolean'] | null) | null;
    shopOwner?: (Scalars['String'] | null) | null;
    source?: (Scalars['String'] | null) | null;
    taxShipping?: (Scalars['Boolean'] | null) | null;
    taxesIncluded?: (Scalars['Boolean'] | null) | null;
    timezone?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    weightUnit?: ShopifyShopWeightUnitEnum | null;
    alerts?: (Scalars['JSON'] | null) | null;
    billingAddress?: (Scalars['JSON'] | null) | null;
    countriesInShippingZones?: (Scalars['JSON'] | null) | null;
    currencyFormats?: (Scalars['JSON'] | null) | null;
    customerAccounts?: ShopifyShopCustomerAccountsEnum | null;
    zipCode?: (Scalars['String'] | null) | null;
    description?: (Scalars['String'] | null) | null;
    orderNumberFormatPrefix?: (Scalars['String'] | null) | null;
    orderNumberFormatSuffix?: (Scalars['String'] | null) | null;
    resourceLimits?: (Scalars['JSON'] | null) | null;
    richTextEditorUrl?: (Scalars['String'] | null) | null;
    shipsToCountries?: (ShopifyShopShipsToCountriesEnum)[];
    timezoneAbbreviation?: (Scalars['String'] | null) | null;
    timezoneOffset?: (Scalars['String'] | null) | null;
    timezoneOffsetMinutes?: (Scalars['Float'] | null) | null;
    unitSystem?: ShopifyShopUnitSystemEnum | null;
    customerAccountsV2?: (Scalars['JSON'] | null) | null;
    url?: (Scalars['String'] | null) | null;
    grantedScopes?: (Scalars['JSON'] | null) | null;
    registeredWebhooks?: (Scalars['JSON'] | null) | null;
    accessToken?: (Scalars['String'] | null) | null;
    disabledWebhooks?: (Scalars['JSON'] | null) | null;
    installedViaApiKey?: (Scalars['String'] | null) | null;
    /** An optional list of atomically applied commands for race-safe mutations of the record */
    _atomics?: InternalShopifyShopAtomicsInput | null;
};
export type InternalShopifyShopAtomicsInput = {
    /** Numeric atomic commands for operating on latitude. */
    latitude?: (NumericAtomicFieldUpdateInput)[];
    /** Numeric atomic commands for operating on longitude. */
    longitude?: (NumericAtomicFieldUpdateInput)[];
    /** Numeric atomic commands for operating on timezoneOffsetMinutes. */
    timezoneOffsetMinutes?: (NumericAtomicFieldUpdateInput)[];
};
export type NumericAtomicFieldUpdateInput = {
    /** A number to atomically increment the field value by. Can only be used on numeric fields. */
    increment?: (Scalars['Float'] | null) | null;
    /** A number to atomically decrement the field value by. Can only be used on numeric fields. */
    decrement?: (Scalars['Float'] | null) | null;
};
export type AppGraphQLTriggerMutationContext = {
    /** The ID of the session that triggered this mutation. Will be the session that's loaded in the mutation context. */
    sessionID?: (Scalars['GadgetID'] | null) | null;
};
export type InternalShopifyGdprRequestInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    shop?: InternalBelongsToInput | null;
    payload?: (Scalars['JSON'] | null) | null;
    topic?: ShopifyGdprRequestTopicEnum | null;
};
export type InternalBelongsToInput = {
    /** Existing ID of another record, which you would like to associate this record with */
    _link?: (Scalars['GadgetID'] | null) | null;
};
export type InternalShopifyOrderInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    billingAddress?: (Scalars['JSON'] | null) | null;
    browserIp?: (Scalars['String'] | null) | null;
    buyerAcceptsMarketing?: (Scalars['Boolean'] | null) | null;
    cancelReason?: ShopifyOrderCancelReasonEnum | null;
    cancelledAt?: Date | Scalars['ISO8601DateString'] | null;
    cartToken?: (Scalars['String'] | null) | null;
    checkoutToken?: (Scalars['String'] | null) | null;
    clientDetails?: (Scalars['JSON'] | null) | null;
    closedAt?: Date | Scalars['ISO8601DateString'] | null;
    currency?: ShopifyOrderCurrencyEnum | null;
    currentSubtotalPrice?: (Scalars['String'] | null) | null;
    currentSubtotalPriceSet?: (Scalars['JSON'] | null) | null;
    currentTotalDiscounts?: (Scalars['String'] | null) | null;
    currentTotalDiscountsSet?: (Scalars['JSON'] | null) | null;
    currentTotalDutiesSet?: (Scalars['JSON'] | null) | null;
    currentTotalPrice?: (Scalars['String'] | null) | null;
    currentTotalPriceSet?: (Scalars['JSON'] | null) | null;
    currentTotalTax?: (Scalars['String'] | null) | null;
    currentTotalTaxSet?: (Scalars['JSON'] | null) | null;
    customerLocale?: (Scalars['String'] | null) | null;
    discountApplications?: (Scalars['JSON'] | null) | null;
    discountCodes?: (Scalars['JSON'] | null) | null;
    email?: (Scalars['String'] | null) | null;
    estimatedTaxes?: (Scalars['Boolean'] | null) | null;
    financialStatus?: ShopifyOrderFinancialStatusEnum | null;
    fulfillmentStatus?: ShopifyOrderFulfillmentStatusEnum | null;
    landingSite?: (Scalars['String'] | null) | null;
    name?: (Scalars['String'] | null) | null;
    note?: (Scalars['String'] | null) | null;
    noteAttributes?: (Scalars['JSON'] | null) | null;
    orderStatusUrl?: (Scalars['String'] | null) | null;
    originalTotalDutiesSet?: (Scalars['JSON'] | null) | null;
    paymentGatewayNames?: (Scalars['JSON'] | null) | null;
    phone?: (Scalars['String'] | null) | null;
    presentmentCurrency?: ShopifyOrderPresentmentCurrencyEnum | null;
    processedAt?: Date | Scalars['ISO8601DateString'] | null;
    processingMethod?: (Scalars['String'] | null) | null;
    referringSite?: (Scalars['String'] | null) | null;
    shippingAddress?: (Scalars['JSON'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    sourceName?: (Scalars['String'] | null) | null;
    subtotalPrice?: (Scalars['String'] | null) | null;
    subtotalPriceSet?: (Scalars['JSON'] | null) | null;
    tags?: (Scalars['JSON'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    taxLines?: (Scalars['JSON'] | null) | null;
    taxesIncluded?: (Scalars['Boolean'] | null) | null;
    test?: (Scalars['Boolean'] | null) | null;
    token?: (Scalars['String'] | null) | null;
    totalDiscounts?: (Scalars['String'] | null) | null;
    totalDiscountsSet?: (Scalars['JSON'] | null) | null;
    totalLineItemsPrice?: (Scalars['String'] | null) | null;
    totalLineItemsPriceSet?: (Scalars['JSON'] | null) | null;
    totalOutstanding?: (Scalars['String'] | null) | null;
    totalPrice?: (Scalars['String'] | null) | null;
    totalPriceSet?: (Scalars['JSON'] | null) | null;
    totalShippingPriceSet?: (Scalars['JSON'] | null) | null;
    totalTax?: (Scalars['String'] | null) | null;
    totalTaxSet?: (Scalars['JSON'] | null) | null;
    totalTipReceived?: (Scalars['String'] | null) | null;
    totalWeight?: (Scalars['Float'] | null) | null;
    additionalFees?: (Scalars['JSON'] | null) | null;
    currentTotalAdditionalFeesSet?: (Scalars['JSON'] | null) | null;
    merchantOfRecordAppId?: (Scalars['Float'] | null) | null;
    originalTotalAdditionalFeesSet?: (Scalars['JSON'] | null) | null;
    sourceIdentifier?: (Scalars['String'] | null) | null;
    sourceUrl?: (Scalars['String'] | null) | null;
    taxExempt?: (Scalars['Boolean'] | null) | null;
    fulfillmentsCount?: (Scalars['JSON'] | null) | null;
    cancellation?: (Scalars['JSON'] | null) | null;
    risk?: (Scalars['JSON'] | null) | null;
    shopifyProtect?: (Scalars['JSON'] | null) | null;
    totalCashRoundingAdjustment?: (Scalars['JSON'] | null) | null;
    transactionsCount?: (Scalars['JSON'] | null) | null;
    billingStatusMatchesShippingAddress?: (Scalars['Boolean'] | null) | null;
    poNumber?: (Scalars['String'] | null) | null;
    alerts?: (Scalars['JSON'] | null) | null;
    canMarkAsPaid?: (Scalars['Boolean'] | null) | null;
    canNotifyCustomer?: (Scalars['Boolean'] | null) | null;
    capturable?: (Scalars['Boolean'] | null) | null;
    cartDiscountAmountSet?: (Scalars['JSON'] | null) | null;
    closed?: (Scalars['Boolean'] | null) | null;
    confirmationNumber?: (Scalars['String'] | null) | null;
    confirmed?: (Scalars['Boolean'] | null) | null;
    currentCartDiscountAmountSet?: (Scalars['JSON'] | null) | null;
    currentSubtotalLineItemsQuantity?: (Scalars['Float'] | null) | null;
    currentTotalWeight?: (Scalars['String'] | null) | null;
    currentShippingPriceSet?: (Scalars['JSON'] | null) | null;
    dutiesIncluded?: (Scalars['Boolean'] | null) | null;
    edited?: (Scalars['Boolean'] | null) | null;
    fulfillable?: (Scalars['Boolean'] | null) | null;
    fullyPaid?: (Scalars['Boolean'] | null) | null;
    hasTimelineComment?: (Scalars['Boolean'] | null) | null;
    legacyResourceId?: (Scalars['String'] | null) | null;
    merchantEditable?: (Scalars['Boolean'] | null) | null;
    merchantEditableErrors?: (Scalars['JSON'] | null) | null;
    netPaymentSet?: (Scalars['JSON'] | null) | null;
    originalTotalPriceSet?: (Scalars['JSON'] | null) | null;
    refundDiscrepencySet?: (Scalars['JSON'] | null) | null;
    refundable?: (Scalars['Boolean'] | null) | null;
    requiresShipping?: (Scalars['Boolean'] | null) | null;
    restockable?: (Scalars['Boolean'] | null) | null;
    returnStatus?: ShopifyOrderReturnStatusEnum | null;
    totalCapturableSet?: (Scalars['JSON'] | null) | null;
    totalOutstandingSet?: (Scalars['JSON'] | null) | null;
    totalReceivedSet?: (Scalars['JSON'] | null) | null;
    totalRefundedSet?: (Scalars['JSON'] | null) | null;
    totalRefundedShippingSet?: (Scalars['JSON'] | null) | null;
    totalTipReceivedSet?: (Scalars['JSON'] | null) | null;
    unpaid?: (Scalars['Boolean'] | null) | null;
    customerJourneySummary?: (Scalars['JSON'] | null) | null;
    shop?: InternalBelongsToInput | null;
    /** An optional list of atomically applied commands for race-safe mutations of the record */
    _atomics?: InternalShopifyOrderAtomicsInput | null;
};
export type InternalShopifyOrderAtomicsInput = {
    /** Numeric atomic commands for operating on totalWeight. */
    totalWeight?: (NumericAtomicFieldUpdateInput)[];
    /** Numeric atomic commands for operating on merchantOfRecordAppId. */
    merchantOfRecordAppId?: (NumericAtomicFieldUpdateInput)[];
    /** Numeric atomic commands for operating on currentSubtotalLineItemsQuantity. */
    currentSubtotalLineItemsQuantity?: (NumericAtomicFieldUpdateInput)[];
};
export type InternalShopifyProductInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    body?: (Scalars['String'] | null) | null;
    handle?: (Scalars['String'] | null) | null;
    category?: (Scalars['JSON'] | null) | null;
    hasVariantsThatRequiresComponents?: (Scalars['Boolean'] | null) | null;
    shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;
    productType?: (Scalars['String'] | null) | null;
    publishedAt?: Date | Scalars['ISO8601DateString'] | null;
    title?: (Scalars['String'] | null) | null;
    shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;
    vendor?: (Scalars['String'] | null) | null;
    compareAtPriceRange?: (Scalars['JSON'] | null) | null;
    productCategory?: (Scalars['JSON'] | null) | null;
    status?: ShopifyProductStatusEnum | null;
    tags?: (Scalars['JSON'] | null) | null;
    templateSuffix?: (Scalars['String'] | null) | null;
    shop?: InternalBelongsToInput | null;
};
export type InternalShopifySyncInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    shop?: InternalBelongsToInput | null;
    syncSince?: Date | Scalars['ISO8601DateString'] | null;
    domain?: (Scalars['String'] | null) | null;
    errorDetails?: (Scalars['String'] | null) | null;
    errorMessage?: (Scalars['String'] | null) | null;
    syncSinceBy?: ShopifySyncSyncSinceByEnum | null;
    force?: (Scalars['Boolean'] | null) | null;
    models?: (Scalars['JSON'] | null) | null;
};
export type InternalOrderTrackingInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    shippingCarrier?: (Scalars['String'] | null) | null;
    trackingNumber?: (Scalars['String'] | null) | null;
    deliveryStatus?: OrderTrackingDeliveryStatusEnum | null;
    order?: InternalBelongsToInput | null;
    shop?: InternalBelongsToInput | null;
};
export type InternalProductCustomizationInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    product?: InternalBelongsToInput | null;
    productVariantId?: (Scalars['Float'] | null) | null;
    customizationValue?: (Scalars['String'] | null) | null;
    customizationType?: (Scalars['String'] | null) | null;
    shop?: InternalBelongsToInput | null;
    /** An optional list of atomically applied commands for race-safe mutations of the record */
    _atomics?: InternalProductCustomizationAtomicsInput | null;
};
export type InternalProductCustomizationAtomicsInput = {
    /** Numeric atomic commands for operating on productVariantId. */
    productVariantId?: (NumericAtomicFieldUpdateInput)[];
};
export type InternalSessionInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    /** A string list of Gadget platform Role keys to assign to this record */
    roles?: ((Scalars['String'] | null))[];
    shop?: InternalBelongsToInput | null;
    shopifySID?: (Scalars['String'] | null) | null;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    /** Represents an amount of some currency. Specified as a string so user's aren't tempted to do math on the value. */
    CurrencyAmount: string;
    /** Represents a UTC date formatted an ISO-8601 formatted 'full-date' string. */
    ISO8601DateString: string;
    /** A file object produced by a browser for uploading to cloud storage */
    Upload: File;
    /** A record's current state for a recordState type field */
    StateValue: Record<string, string>;
    /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
    String: string;
    /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSONObject: JSONObject;
    /** The `Boolean` scalar type represents `true` or `false`. */
    Boolean: boolean;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: JSONValue;
    /** Integer type that can handle bigints and Big numbers */
    Int: number;
    /** The ID of a record in Gadget */
    GadgetID: string;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: Date;
    /** Represents the state of one record in a Gadget database. Represented as either a string or set of strings nested in objects. */
    RecordState: (string | {
        [key: string]: Scalars['RecordState'];
    });
    /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
    Float: number;
    /** Instructions for a client to turn raw transport types (like strings) into useful client side types (like Dates). Unstable and not intended for developer use. */
    HydrationPlan: unknown;
}
/** This Error object is returned for errors which don't have other specific handling. It has a message which is safe to display to users, but is often technical in nature. It also has a `code` field which is documented in the Gadget API Error Codes docs. */
export interface SimpleError extends ExecutionError {
    __typename: 'SimpleError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The Gadget platform error code for this error. */
    code: Scalars['String'];
    /** The stack for any exception that caused the error */
    stack: (Scalars['String'] | null);
}
export type AvailableSimpleErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The Gadget platform error code for this error. */
    code?: boolean | null | undefined;
    /** The stack for any exception that caused the error */
    stack?: boolean | null | undefined;
};
export type ExecutionError = {
    __typename: 'SimpleError' | 'InvalidRecordError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The Gadget platform error code for this error. */
    code: Scalars['String'];
    /** The stack for any exception that caused the error. Only available for super users. */
    stack: (Scalars['String'] | null);
};
export type AvailableExecutionErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The Gadget platform error code for this error. */
    code?: boolean | null | undefined;
    /** The stack for any exception that caused the error. Only available for super users. */
    stack?: boolean | null | undefined;
};
/** This object is returned as an error when a record doesn't pass the defined validations on the model. The validation messages for each of the invalid fields are available via the other fields on this error type. */
export interface InvalidRecordError extends ExecutionError {
    __typename: 'InvalidRecordError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The Gadget platform error code for this InvalidRecordError. */
    code: Scalars['String'];
    /** The stack for any exception that caused the error */
    stack: (Scalars['String'] | null);
    /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
    validationErrorsByField: (Scalars['JSONObject'] | null);
    /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
    validationErrors: InvalidFieldError[];
    /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
    record: (Scalars['JSONObject'] | null);
    /** The model of the record which failed validation */
    model: (GadgetModel | null);
}
export type AvailableInvalidRecordErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The Gadget platform error code for this InvalidRecordError. */
    code?: boolean | null | undefined;
    /** The stack for any exception that caused the error */
    stack?: boolean | null | undefined;
    /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
    validationErrorsByField?: boolean | null | undefined;
    /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
    validationErrors?: AvailableInvalidFieldErrorSelection;
    /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
    record?: boolean | null | undefined;
    /** The model of the record which failed validation */
    model?: AvailableGadgetModelSelection;
};
/** This Error object represents one individual failed validation for a record field. It has a message which is appropriate for display to a user, and lists the apiIdentifier of the field in question. The `apiIdentifier` for the field is not guaranteed to exist on the model. */
export type InvalidFieldError = {
    __typename: 'InvalidFieldError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The apiIdentifier of the field this error occurred on. */
    apiIdentifier: Scalars['String'];
};
export type AvailableInvalidFieldErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The apiIdentifier of the field this error occurred on. */
    apiIdentifier?: boolean | null | undefined;
};
export type GadgetModel = {
    __typename: 'GadgetModel';
    key: Scalars['String'];
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    namespace: Scalars['String'][];
    filterable: Scalars['Boolean'];
    sortable: Scalars['Boolean'];
    searchable: Scalars['Boolean'];
    defaultDisplayField: GadgetModelField;
    fields: GadgetModelField[];
    actions: GadgetAction[];
    action: (GadgetAction | null);
    views: GadgetComputedView[];
    view: (GadgetComputedView | null);
    hasViews: Scalars['Boolean'];
    pluralName: Scalars['String'];
    pluralApiIdentifier: Scalars['String'];
    currentSingletonApiIdentifier: (Scalars['String'] | null);
    defaultRecord: Scalars['JSON'];
    initialCreatedState: (Scalars['String'] | null);
};
export type AvailableGadgetModelSelection = {
    __typename?: boolean | null | undefined;
    key?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    namespace?: boolean | null | undefined;
    filterable?: boolean | null | undefined;
    sortable?: boolean | null | undefined;
    searchable?: boolean | null | undefined;
    defaultDisplayField?: AvailableGadgetModelFieldSelection;
    fields?: AvailableGadgetModelFieldSelection;
    actions?: AvailableGadgetActionSelection;
    action?: AvailableGadgetActionSelection;
    views?: AvailableGadgetComputedViewSelection;
    view?: AvailableGadgetComputedViewSelection;
    hasViews?: boolean | null | undefined;
    pluralName?: boolean | null | undefined;
    pluralApiIdentifier?: boolean | null | undefined;
    currentSingletonApiIdentifier?: boolean | null | undefined;
    defaultRecord?: boolean | null | undefined;
    initialCreatedState?: boolean | null | undefined;
};
/** One field of a Gadget model */
export interface GadgetModelField extends GadgetField {
    __typename: 'GadgetModelField';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    fieldType: GadgetFieldType;
    hasDefault: Scalars['Boolean'];
    required: Scalars['Boolean'];
    requiredArgumentForInput: Scalars['Boolean'];
    configuration: GadgetFieldConfigInterface;
    isUniqueField: Scalars['Boolean'];
    sortable: Scalars['Boolean'];
    filterable: Scalars['Boolean'];
    examples: GadgetModelFieldExamples;
}
export type AvailableGadgetModelFieldSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    hasDefault?: boolean | null | undefined;
    required?: boolean | null | undefined;
    requiredArgumentForInput?: boolean | null | undefined;
    configuration?: AvailableGadgetFieldConfigInterfaceSelection;
    isUniqueField?: boolean | null | undefined;
    sortable?: boolean | null | undefined;
    filterable?: boolean | null | undefined;
    examples?: AvailableGadgetModelFieldExamplesSelection;
};
export type GadgetField = {
    __typename: 'GadgetModelField' | 'GadgetObjectField';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    fieldType: GadgetFieldType;
    hasDefault: Scalars['Boolean'];
    required: Scalars['Boolean'];
    requiredArgumentForInput: Scalars['Boolean'];
    configuration: GadgetFieldConfigInterface;
};
export type AvailableGadgetFieldSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    hasDefault?: boolean | null | undefined;
    required?: boolean | null | undefined;
    requiredArgumentForInput?: boolean | null | undefined;
    configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};
/** The common bits that all field configuration types share */
export type GadgetFieldConfigInterface = {
    __typename: 'GadgetGenericFieldConfig' | 'GadgetObjectFieldConfig' | 'GadgetBelongsToConfig' | 'GadgetHasOneConfig' | 'GadgetHasManyConfig' | 'GadgetHasManyThroughConfig' | 'GadgetEnumConfig' | 'GadgetDateTimeConfig' | 'GadgetNumberConfig';
    fieldType: GadgetFieldType;
    validations: (GadgetFieldValidationUnion | null)[];
};
export type AvailableGadgetFieldConfigInterfaceSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    validations?: AvailableGadgetFieldValidationUnionSelection;
};
export type GadgetModelFieldExamples = {
    __typename: 'GadgetModelFieldExamples';
    linkExistingChild: (GadgetFieldUsageExample | null);
    linkNewChild: (GadgetFieldUsageExample | null);
    linkToExistingParent: (GadgetFieldUsageExample | null);
    createNestedInParent: (GadgetFieldUsageExample | null);
};
export type AvailableGadgetModelFieldExamplesSelection = {
    __typename?: boolean | null | undefined;
    linkExistingChild?: AvailableGadgetFieldUsageExampleSelection;
    linkNewChild?: AvailableGadgetFieldUsageExampleSelection;
    linkToExistingParent?: AvailableGadgetFieldUsageExampleSelection;
    createNestedInParent?: AvailableGadgetFieldUsageExampleSelection;
};
export type GadgetFieldUsageExample = {
    __typename: 'GadgetFieldUsageExample';
    exampleGraphQLMutation: Scalars['String'];
    exampleGraphQLVariables: Scalars['JSON'];
    exampleImperativeInvocation: Scalars['String'];
    exampleReactHook: Scalars['String'];
};
export type AvailableGadgetFieldUsageExampleSelection = {
    __typename?: boolean | null | undefined;
    exampleGraphQLMutation?: boolean | null | undefined;
    exampleGraphQLVariables?: boolean | null | undefined;
    exampleImperativeInvocation?: boolean | null | undefined;
    exampleReactHook?: boolean | null | undefined;
};
export type GadgetAction = {
    __typename: 'GadgetAction';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    namespace: Scalars['String'][];
    requiresInput: Scalars['Boolean'];
    acceptsInput: Scalars['Boolean'];
    /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
    hasDeleteRecordEffect: Scalars['Boolean'];
    /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
    hasCreateOrUpdateEffect: Scalars['Boolean'];
    isDeleteAction: Scalars['Boolean'];
    isCreateOrUpdateAction: Scalars['Boolean'];
    isUpsertMetaAction: Scalars['Boolean'];
    operatesWithRecordIdentity: Scalars['Boolean'];
    /** @deprecated This field will be removed. */
    possibleTransitions: Scalars['JSONObject'];
    availableInBulk: Scalars['Boolean'];
    bulkApiIdentifier: (Scalars['String'] | null);
    hasAmbiguousIdentifier: Scalars['Boolean'];
    inputFields: GadgetObjectField[];
    bulkInvokedByIDOnly: Scalars['Boolean'];
    triggers: GadgetTrigger[];
    examples: (GadgetActionGraphQLType | null);
};
export type AvailableGadgetActionSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    namespace?: boolean | null | undefined;
    requiresInput?: boolean | null | undefined;
    acceptsInput?: boolean | null | undefined;
    /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
    hasDeleteRecordEffect?: boolean | null | undefined;
    /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
    hasCreateOrUpdateEffect?: boolean | null | undefined;
    isDeleteAction?: boolean | null | undefined;
    isCreateOrUpdateAction?: boolean | null | undefined;
    isUpsertMetaAction?: boolean | null | undefined;
    operatesWithRecordIdentity?: boolean | null | undefined;
    /** @deprecated This field will be removed. */
    possibleTransitions?: boolean | null | undefined;
    availableInBulk?: boolean | null | undefined;
    bulkApiIdentifier?: boolean | null | undefined;
    hasAmbiguousIdentifier?: boolean | null | undefined;
    inputFields?: AvailableGadgetObjectFieldSelection;
    bulkInvokedByIDOnly?: boolean | null | undefined;
    triggers?: AvailableGadgetTriggerSelection;
    examples?: AvailableGadgetActionGraphQLTypeSelection;
};
/** One field of an action input or other transitory object in Gadget */
export interface GadgetObjectField extends GadgetField {
    __typename: 'GadgetObjectField';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    fieldType: GadgetFieldType;
    hasDefault: Scalars['Boolean'];
    required: Scalars['Boolean'];
    requiredArgumentForInput: Scalars['Boolean'];
    configuration: GadgetFieldConfigInterface;
}
export type AvailableGadgetObjectFieldSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    hasDefault?: boolean | null | undefined;
    required?: boolean | null | undefined;
    requiredArgumentForInput?: boolean | null | undefined;
    configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};
export type GadgetTrigger = {
    __typename: 'GadgetTrigger';
    specID: Scalars['String'];
};
export type AvailableGadgetTriggerSelection = {
    __typename?: boolean | null | undefined;
    specID?: boolean | null | undefined;
};
export type GadgetActionGraphQLType = {
    __typename: 'GadgetActionGraphQLType';
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation: Scalars['String'];
    exampleGraphQLMutation: Scalars['String'];
    inputGraphQLTypeSDL: (Scalars['String'] | null);
    outputGraphQLTypeSDL: Scalars['String'];
    inputTypeScriptInterface: (Scalars['String'] | null);
    outputTypeScriptInterface: Scalars['String'];
    exampleGraphQLVariables: Scalars['JSON'];
    exampleJSInputs: Scalars['JSON'];
    exampleImperativeInvocation: Scalars['String'];
    exampleReactHook: Scalars['String'];
    /** @deprecated moved to exampleBulkGraphQLMutation */
    exampleBulkMutation: (Scalars['String'] | null);
    exampleBulkGraphQLMutation: (Scalars['String'] | null);
    exampleBulkGraphQLVariables: (Scalars['JSON'] | null);
    exampleBulkImperativeInvocation: (Scalars['String'] | null);
    exampleBulkReactHook: (Scalars['String'] | null);
    bulkOutputGraphQLTypeSDL: (Scalars['String'] | null);
};
export type AvailableGadgetActionGraphQLTypeSelection = {
    __typename?: boolean | null | undefined;
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation?: boolean | null | undefined;
    exampleGraphQLMutation?: boolean | null | undefined;
    inputGraphQLTypeSDL?: boolean | null | undefined;
    outputGraphQLTypeSDL?: boolean | null | undefined;
    inputTypeScriptInterface?: boolean | null | undefined;
    outputTypeScriptInterface?: boolean | null | undefined;
    exampleGraphQLVariables?: boolean | null | undefined;
    exampleJSInputs?: boolean | null | undefined;
    exampleImperativeInvocation?: boolean | null | undefined;
    exampleReactHook?: boolean | null | undefined;
    /** @deprecated moved to exampleBulkGraphQLMutation */
    exampleBulkMutation?: boolean | null | undefined;
    exampleBulkGraphQLMutation?: boolean | null | undefined;
    exampleBulkGraphQLVariables?: boolean | null | undefined;
    exampleBulkImperativeInvocation?: boolean | null | undefined;
    exampleBulkReactHook?: boolean | null | undefined;
    bulkOutputGraphQLTypeSDL?: boolean | null | undefined;
};
export type GadgetComputedView = {
    __typename: 'GadgetComputedView';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    namespace: Scalars['String'][];
    namespacedApiIdentifier: Scalars['String'];
    examples: (GadgetComputedViewExamples | null);
};
export type AvailableGadgetComputedViewSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    namespace?: boolean | null | undefined;
    namespacedApiIdentifier?: boolean | null | undefined;
    examples?: AvailableGadgetComputedViewExamplesSelection;
};
export type GadgetComputedViewExamples = {
    __typename: 'GadgetComputedViewExamples';
    acceptsInput: Scalars['Boolean'];
    inputTypescriptType: (Scalars['String'] | null);
    outputTypescriptType: Scalars['String'];
    inputGraphQLTypeSDL: (Scalars['String'] | null);
    exampleJSInputs: Scalars['JSON'];
    exampleImperativeInvocation: (Scalars['String'] | null);
    referencedModelKeys: Scalars['String'][];
    allowedRoles: Scalars['String'][];
    exampleReactHook: Scalars['String'];
};
export type AvailableGadgetComputedViewExamplesSelection = {
    __typename?: boolean | null | undefined;
    acceptsInput?: boolean | null | undefined;
    inputTypescriptType?: boolean | null | undefined;
    outputTypescriptType?: boolean | null | undefined;
    inputGraphQLTypeSDL?: boolean | null | undefined;
    exampleJSInputs?: boolean | null | undefined;
    exampleImperativeInvocation?: boolean | null | undefined;
    referencedModelKeys?: boolean | null | undefined;
    allowedRoles?: boolean | null | undefined;
    exampleReactHook?: boolean | null | undefined;
};
export interface GadgetGenericFieldConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetGenericFieldConfig';
    fieldType: GadgetFieldType;
    validations: (GadgetFieldValidationUnion | null)[];
}
export type AvailableGadgetGenericFieldConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    validations?: AvailableGadgetFieldValidationUnionSelection;
};
export interface GadgetObjectFieldConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetObjectFieldConfig';
    fieldType: GadgetFieldType;
    validations: (GadgetFieldValidationUnion | null)[];
    name: (Scalars['String'] | null);
    fields: GadgetModelField[];
}
export type AvailableGadgetObjectFieldConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    validations?: AvailableGadgetFieldValidationUnionSelection;
    name?: boolean | null | undefined;
    fields?: AvailableGadgetModelFieldSelection;
};
export interface GadgetBelongsToConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetBelongsToConfig';
    fieldType: GadgetFieldType;
    validations: (GadgetFieldValidationUnion | null)[];
    relatedModelKey: (Scalars['String'] | null);
    relatedModel: (GadgetModel | null);
    isConfigured: Scalars['Boolean'];
    isInverseConfigured: Scalars['Boolean'];
}
export type AvailableGadgetBelongsToConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    validations?: AvailableGadgetFieldValidationUnionSelection;
    relatedModelKey?: boolean | null | undefined;
    relatedModel?: AvailableGadgetModelSelection;
    isConfigured?: boolean | null | undefined;
    isInverseConfigured?: boolean | null | undefined;
};
export interface GadgetHasOneConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetHasOneConfig';
    fieldType: GadgetFieldType;
    validations: (GadgetFieldValidationUnion | null)[];
    relatedModelKey: (Scalars['String'] | null);
    relatedModel: (GadgetModel | null);
    inverseField: (GadgetModelField | null);
    isConfigured: Scalars['Boolean'];
    isInverseConfigured: Scalars['Boolean'];
}
export type AvailableGadgetHasOneConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    validations?: AvailableGadgetFieldValidationUnionSelection;
    relatedModelKey?: boolean | null | undefined;
    relatedModel?: AvailableGadgetModelSelection;
    inverseField?: AvailableGadgetModelFieldSelection;
    isConfigured?: boolean | null | undefined;
    isInverseConfigured?: boolean | null | undefined;
};
export interface GadgetHasManyConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetHasManyConfig';
    fieldType: GadgetFieldType;
    validations: (GadgetFieldValidationUnion | null)[];
    relatedModelKey: (Scalars['String'] | null);
    relatedModel: (GadgetModel | null);
    inverseField: (GadgetModelField | null);
    isConfigured: Scalars['Boolean'];
    isInverseConfigured: Scalars['Boolean'];
    isJoinModelHasManyField: Scalars['Boolean'];
}
export type AvailableGadgetHasManyConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    validations?: AvailableGadgetFieldValidationUnionSelection;
    relatedModelKey?: boolean | null | undefined;
    relatedModel?: AvailableGadgetModelSelection;
    inverseField?: AvailableGadgetModelFieldSelection;
    isConfigured?: boolean | null | undefined;
    isInverseConfigured?: boolean | null | undefined;
    isJoinModelHasManyField?: boolean | null | undefined;
};
export interface GadgetHasManyThroughConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetHasManyThroughConfig';
    fieldType: GadgetFieldType;
    validations: (GadgetFieldValidationUnion | null)[];
    relatedModelKey: (Scalars['String'] | null);
    relatedModel: (GadgetModel | null);
    inverseField: (GadgetModelField | null);
    joinModelKey: (Scalars['String'] | null);
    joinModel: (GadgetModel | null);
    inverseJoinModelField: (GadgetModelField | null);
    inverseRelatedModelField: (GadgetModelField | null);
    isConfigured: Scalars['Boolean'];
    isInverseConfigured: Scalars['Boolean'];
    joinModelHasManyFieldApiIdentifier: (Scalars['String'] | null);
}
export type AvailableGadgetHasManyThroughConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    validations?: AvailableGadgetFieldValidationUnionSelection;
    relatedModelKey?: boolean | null | undefined;
    relatedModel?: AvailableGadgetModelSelection;
    inverseField?: AvailableGadgetModelFieldSelection;
    joinModelKey?: boolean | null | undefined;
    joinModel?: AvailableGadgetModelSelection;
    inverseJoinModelField?: AvailableGadgetModelFieldSelection;
    inverseRelatedModelField?: AvailableGadgetModelFieldSelection;
    isConfigured?: boolean | null | undefined;
    isInverseConfigured?: boolean | null | undefined;
    joinModelHasManyFieldApiIdentifier?: boolean | null | undefined;
};
export interface GadgetEnumConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetEnumConfig';
    fieldType: GadgetFieldType;
    validations: (GadgetFieldValidationUnion | null)[];
    allowMultiple: Scalars['Boolean'];
    allowOther: Scalars['Boolean'];
    options: GadgetEnumOption[];
}
export type AvailableGadgetEnumConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    validations?: AvailableGadgetFieldValidationUnionSelection;
    allowMultiple?: boolean | null | undefined;
    allowOther?: boolean | null | undefined;
    options?: AvailableGadgetEnumOptionSelection;
};
export type GadgetEnumOption = {
    __typename: 'GadgetEnumOption';
    name: Scalars['String'];
    color: Scalars['String'];
};
export type AvailableGadgetEnumOptionSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    color?: boolean | null | undefined;
};
export interface GadgetDateTimeConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetDateTimeConfig';
    fieldType: GadgetFieldType;
    validations: (GadgetFieldValidationUnion | null)[];
    includeTime: Scalars['Boolean'];
}
export type AvailableGadgetDateTimeConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    validations?: AvailableGadgetFieldValidationUnionSelection;
    includeTime?: boolean | null | undefined;
};
export interface GadgetNumberConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetNumberConfig';
    fieldType: GadgetFieldType;
    validations: (GadgetFieldValidationUnion | null)[];
    decimals: (Scalars['Int'] | null);
}
export type AvailableGadgetNumberConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    validations?: AvailableGadgetFieldValidationUnionSelection;
    decimals?: boolean | null | undefined;
};
export interface GadgetRegexFieldValidation extends GadgetFieldValidationInterface {
    __typename: 'GadgetRegexFieldValidation';
    name: Scalars['String'];
    specID: Scalars['String'];
    pattern: (Scalars['String'] | null);
}
export type AvailableGadgetRegexFieldValidationSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    specID?: boolean | null | undefined;
    pattern?: boolean | null | undefined;
};
/** The common bits that all field validation types share */
export type GadgetFieldValidationInterface = {
    __typename: 'GadgetRegexFieldValidation' | 'GadgetRangeFieldValidation' | 'GadgetOnlyImageFileFieldValidation' | 'GadgetGenericFieldValidation';
    name: Scalars['String'];
    specID: Scalars['String'];
};
export type AvailableGadgetFieldValidationInterfaceSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    specID?: boolean | null | undefined;
};
export interface GadgetRangeFieldValidation extends GadgetFieldValidationInterface {
    __typename: 'GadgetRangeFieldValidation';
    name: Scalars['String'];
    specID: Scalars['String'];
    min: (Scalars['Int'] | null);
    max: (Scalars['Int'] | null);
}
export type AvailableGadgetRangeFieldValidationSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    specID?: boolean | null | undefined;
    min?: boolean | null | undefined;
    max?: boolean | null | undefined;
};
export interface GadgetOnlyImageFileFieldValidation extends GadgetFieldValidationInterface {
    __typename: 'GadgetOnlyImageFileFieldValidation';
    name: Scalars['String'];
    specID: Scalars['String'];
    allowAnimatedImages: Scalars['Boolean'];
}
export type AvailableGadgetOnlyImageFileFieldValidationSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    specID?: boolean | null | undefined;
    allowAnimatedImages?: boolean | null | undefined;
};
export interface GadgetGenericFieldValidation extends GadgetFieldValidationInterface {
    __typename: 'GadgetGenericFieldValidation';
    name: Scalars['String'];
    specID: Scalars['String'];
}
export type AvailableGadgetGenericFieldValidationSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    specID?: boolean | null | undefined;
};
export interface UpsertError extends UpsertShopifyShopResult, UpsertShopifyGdprRequestResult, UpsertShopifyOrderResult, UpsertShopifyProductResult, UpsertShopifySyncResult, UpsertOrderTrackingResult, UpsertProductCustomizationResult {
    __typename: 'UpsertError';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
}
export type AvailableUpsertErrorSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
};
export type UpsertShopifyShopResult = {
    __typename: 'UpsertError' | 'UpdateShopifyShopResult' | 'InstallShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
};
export type AvailableUpsertShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
};
export type UpsertShopifyGdprRequestResult = {
    __typename: 'UpsertError' | 'CreateShopifyGdprRequestResult' | 'UpdateShopifyGdprRequestResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
};
export type AvailableUpsertShopifyGdprRequestResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
};
export type UpsertShopifyOrderResult = {
    __typename: 'UpsertError' | 'CreateShopifyOrderResult' | 'UpdateShopifyOrderResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
};
export type AvailableUpsertShopifyOrderResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
};
export type UpsertShopifyProductResult = {
    __typename: 'UpsertError' | 'CreateShopifyProductResult' | 'UpdateShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
};
export type AvailableUpsertShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
};
export type UpsertShopifySyncResult = {
    __typename: 'UpsertError' | 'AbortShopifySyncResult' | 'RunShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
};
export type AvailableUpsertShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
};
export type UpsertOrderTrackingResult = {
    __typename: 'UpsertError' | 'CreateOrderTrackingResult' | 'UpdateOrderTrackingResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
};
export type AvailableUpsertOrderTrackingResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
};
export type UpsertProductCustomizationResult = {
    __typename: 'UpsertError' | 'CreateProductCustomizationResult' | 'UpdateProductCustomizationResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
};
export type AvailableUpsertProductCustomizationResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
};
export type Query = {
    __typename: 'Query';
    shopifyShop: (ShopifyShop | null);
    shopifyShops: ShopifyShopConnection;
    shopifyShopGellyView: (Scalars['JSON'] | null);
    shopifyGdprRequest: (ShopifyGdprRequest | null);
    shopifyGdprRequests: ShopifyGdprRequestConnection;
    shopifyGdprRequestGellyView: (Scalars['JSON'] | null);
    shopifyOrder: (ShopifyOrder | null);
    shopifyOrders: ShopifyOrderConnection;
    shopifyOrderGellyView: (Scalars['JSON'] | null);
    shopifyProduct: (ShopifyProduct | null);
    shopifyProducts: ShopifyProductConnection;
    shopifyProductGellyView: (Scalars['JSON'] | null);
    shopifySync: (ShopifySync | null);
    shopifySyncs: ShopifySyncConnection;
    shopifySyncGellyView: (Scalars['JSON'] | null);
    orderTracking: (OrderTracking | null);
    orderTrackings: OrderTrackingConnection;
    orderTrackingGellyView: (Scalars['JSON'] | null);
    productCustomization: (ProductCustomization | null);
    productCustomizations: ProductCustomizationConnection;
    productCustomizationGellyView: (Scalars['JSON'] | null);
    session: (Session | null);
    sessions: SessionConnection;
    sessionGellyView: (Scalars['JSON'] | null);
    gellyView: (Scalars['JSON'] | null);
    currentSession: (Session | null);
    shopifyConnection: Shopify;
    internal: InternalQueries;
};
export type AvailableQuerySelection = {
    __typename?: boolean | null | undefined;
    shopifyShop?: AvailableShopifyShopSelection;
    shopifyShops?: AvailableShopifyShopConnectionSelection;
    shopifyShopGellyView?: boolean | null | undefined;
    shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
    shopifyGdprRequests?: AvailableShopifyGdprRequestConnectionSelection;
    shopifyGdprRequestGellyView?: boolean | null | undefined;
    shopifyOrder?: AvailableShopifyOrderSelection;
    shopifyOrders?: AvailableShopifyOrderConnectionSelection;
    shopifyOrderGellyView?: boolean | null | undefined;
    shopifyProduct?: AvailableShopifyProductSelection;
    shopifyProducts?: AvailableShopifyProductConnectionSelection;
    shopifyProductGellyView?: boolean | null | undefined;
    shopifySync?: AvailableShopifySyncSelection;
    shopifySyncs?: AvailableShopifySyncConnectionSelection;
    shopifySyncGellyView?: boolean | null | undefined;
    orderTracking?: AvailableOrderTrackingSelection;
    orderTrackings?: AvailableOrderTrackingConnectionSelection;
    orderTrackingGellyView?: boolean | null | undefined;
    productCustomization?: AvailableProductCustomizationSelection;
    productCustomizations?: AvailableProductCustomizationConnectionSelection;
    productCustomizationGellyView?: boolean | null | undefined;
    session?: AvailableSessionSelection;
    sessions?: AvailableSessionConnectionSelection;
    sessionGellyView?: boolean | null | undefined;
    gellyView?: boolean | null | undefined;
    currentSession?: AvailableSessionSelection;
    shopifyConnection?: AvailableShopifySelection;
    internal?: AvailableInternalQueriesSelection;
};
export type ShopifyShop = {
    __typename: 'ShopifyShop';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state: Scalars['RecordState'];
    plan: (Scalars['JSON'] | null);
    address1: (Scalars['String'] | null);
    marketingSmsContentEnabledAtCheckout: (Scalars['Boolean'] | null);
    planPublicDisplayName: (Scalars['String'] | null);
    planDisplayName: (Scalars['String'] | null);
    transactionalSmsDisabled: (Scalars['Boolean'] | null);
    address2: (Scalars['String'] | null);
    checkoutApiSupported: (Scalars['Boolean'] | null);
    city: (Scalars['String'] | null);
    country: (Scalars['String'] | null);
    countryCode: (Scalars['String'] | null);
    countryName: (Scalars['String'] | null);
    countyTaxes: (Scalars['JSON'] | null);
    currency: ShopifyShopCurrencyEnum;
    customerEmail: (Scalars['String'] | null);
    domain: (Scalars['String'] | null);
    eligibleForPayments: (Scalars['Boolean'] | null);
    email: (Scalars['String'] | null);
    enabledPresentmentCurrencies: ShopifyShopEnabledPresentmentCurrenciesEnum[];
    finances: (Scalars['Boolean'] | null);
    googleAppsDomain: (Scalars['String'] | null);
    googleAppsLoginEnabled: (Scalars['Boolean'] | null);
    hasDiscounts: (Scalars['Boolean'] | null);
    hasGiftCards: (Scalars['Boolean'] | null);
    hasStorefront: (Scalars['Boolean'] | null);
    ianaTimezone: (Scalars['String'] | null);
    latitude: (Scalars['Float'] | null);
    longitude: (Scalars['Float'] | null);
    moneyFormat: (Scalars['String'] | null);
    moneyInEmailsFormat: (Scalars['String'] | null);
    moneyWithCurrencyFormat: (Scalars['String'] | null);
    moneyWithCurrencyInEmailsFormat: (Scalars['String'] | null);
    multiLocationEnabled: (Scalars['Boolean'] | null);
    myshopifyDomain: (Scalars['String'] | null);
    name: (Scalars['String'] | null);
    passwordEnabled: (Scalars['Boolean'] | null);
    phone: (Scalars['String'] | null);
    planName: (Scalars['String'] | null);
    preLaunchEnabled: (Scalars['Boolean'] | null);
    primaryLocale: (Scalars['String'] | null);
    shopifyCreatedAt: (Scalars['DateTime'] | null);
    province: (Scalars['String'] | null);
    provinceCode: (Scalars['String'] | null);
    requiresExtraPaymentsAgreement: (Scalars['Boolean'] | null);
    setupRequired: (Scalars['Boolean'] | null);
    shopOwner: (Scalars['String'] | null);
    source: (Scalars['String'] | null);
    taxShipping: (Scalars['Boolean'] | null);
    taxesIncluded: (Scalars['Boolean'] | null);
    timezone: (Scalars['String'] | null);
    shopifyUpdatedAt: (Scalars['DateTime'] | null);
    weightUnit: ShopifyShopWeightUnitEnum;
    alerts: (Scalars['JSON'] | null);
    billingAddress: (Scalars['JSON'] | null);
    countriesInShippingZones: (Scalars['JSON'] | null);
    currencyFormats: (Scalars['JSON'] | null);
    customerAccounts: ShopifyShopCustomerAccountsEnum;
    zipCode: (Scalars['String'] | null);
    description: (Scalars['String'] | null);
    orderNumberFormatPrefix: (Scalars['String'] | null);
    orderNumberFormatSuffix: (Scalars['String'] | null);
    resourceLimits: (Scalars['JSON'] | null);
    richTextEditorUrl: (Scalars['String'] | null);
    shipsToCountries: ShopifyShopShipsToCountriesEnum[];
    timezoneAbbreviation: (Scalars['String'] | null);
    timezoneOffset: (Scalars['String'] | null);
    timezoneOffsetMinutes: (Scalars['Float'] | null);
    unitSystem: ShopifyShopUnitSystemEnum;
    customerAccountsV2: (Scalars['JSON'] | null);
    url: (Scalars['String'] | null);
    grantedScopes: (Scalars['JSON'] | null);
    registeredWebhooks: (Scalars['JSON'] | null);
    syncs: ShopifySyncConnection;
    disabledWebhooks: (Scalars['JSON'] | null);
    installedViaApiKey: (Scalars['String'] | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableShopifyShopSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state?: boolean | null | undefined;
    plan?: boolean | null | undefined;
    address1?: boolean | null | undefined;
    marketingSmsContentEnabledAtCheckout?: boolean | null | undefined;
    planPublicDisplayName?: boolean | null | undefined;
    planDisplayName?: boolean | null | undefined;
    transactionalSmsDisabled?: boolean | null | undefined;
    address2?: boolean | null | undefined;
    checkoutApiSupported?: boolean | null | undefined;
    city?: boolean | null | undefined;
    country?: boolean | null | undefined;
    countryCode?: boolean | null | undefined;
    countryName?: boolean | null | undefined;
    countyTaxes?: boolean | null | undefined;
    currency?: boolean | null | undefined;
    customerEmail?: boolean | null | undefined;
    domain?: boolean | null | undefined;
    eligibleForPayments?: boolean | null | undefined;
    email?: boolean | null | undefined;
    enabledPresentmentCurrencies?: boolean | null | undefined;
    finances?: boolean | null | undefined;
    googleAppsDomain?: boolean | null | undefined;
    googleAppsLoginEnabled?: boolean | null | undefined;
    hasDiscounts?: boolean | null | undefined;
    hasGiftCards?: boolean | null | undefined;
    hasStorefront?: boolean | null | undefined;
    ianaTimezone?: boolean | null | undefined;
    latitude?: boolean | null | undefined;
    longitude?: boolean | null | undefined;
    moneyFormat?: boolean | null | undefined;
    moneyInEmailsFormat?: boolean | null | undefined;
    moneyWithCurrencyFormat?: boolean | null | undefined;
    moneyWithCurrencyInEmailsFormat?: boolean | null | undefined;
    multiLocationEnabled?: boolean | null | undefined;
    myshopifyDomain?: boolean | null | undefined;
    name?: boolean | null | undefined;
    passwordEnabled?: boolean | null | undefined;
    phone?: boolean | null | undefined;
    planName?: boolean | null | undefined;
    preLaunchEnabled?: boolean | null | undefined;
    primaryLocale?: boolean | null | undefined;
    shopifyCreatedAt?: boolean | null | undefined;
    province?: boolean | null | undefined;
    provinceCode?: boolean | null | undefined;
    requiresExtraPaymentsAgreement?: boolean | null | undefined;
    setupRequired?: boolean | null | undefined;
    shopOwner?: boolean | null | undefined;
    source?: boolean | null | undefined;
    taxShipping?: boolean | null | undefined;
    taxesIncluded?: boolean | null | undefined;
    timezone?: boolean | null | undefined;
    shopifyUpdatedAt?: boolean | null | undefined;
    weightUnit?: boolean | null | undefined;
    alerts?: boolean | null | undefined;
    billingAddress?: boolean | null | undefined;
    countriesInShippingZones?: boolean | null | undefined;
    currencyFormats?: boolean | null | undefined;
    customerAccounts?: boolean | null | undefined;
    zipCode?: boolean | null | undefined;
    description?: boolean | null | undefined;
    orderNumberFormatPrefix?: boolean | null | undefined;
    orderNumberFormatSuffix?: boolean | null | undefined;
    resourceLimits?: boolean | null | undefined;
    richTextEditorUrl?: boolean | null | undefined;
    shipsToCountries?: boolean | null | undefined;
    timezoneAbbreviation?: boolean | null | undefined;
    timezoneOffset?: boolean | null | undefined;
    timezoneOffsetMinutes?: boolean | null | undefined;
    unitSystem?: boolean | null | undefined;
    customerAccountsV2?: boolean | null | undefined;
    url?: boolean | null | undefined;
    grantedScopes?: boolean | null | undefined;
    registeredWebhooks?: boolean | null | undefined;
    syncs?: AvailableShopifySyncConnectionSelection;
    disabledWebhooks?: boolean | null | undefined;
    installedViaApiKey?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A connection to a list of ShopifySync items. */
export type ShopifySyncConnection = {
    __typename: 'ShopifySyncConnection';
    /** A list of edges. */
    edges: ShopifySyncEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableShopifySyncConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableShopifySyncEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a ShopifySync connection. */
export type ShopifySyncEdge = {
    __typename: 'ShopifySyncEdge';
    /** The item at the end of the edge */
    node: ShopifySync;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableShopifySyncEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableShopifySyncSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type ShopifySync = {
    __typename: 'ShopifySync';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state: Scalars['RecordState'];
    shop: ShopifyShop;
    shopId: Scalars['GadgetID'];
    /** DateTime that this sync was run from */
    syncSince: (Scalars['DateTime'] | null);
    domain: Scalars['String'];
    errorDetails: (Scalars['String'] | null);
    errorMessage: (Scalars['String'] | null);
    syncSinceBy: ShopifySyncSyncSinceByEnum;
    force: (Scalars['Boolean'] | null);
    models: (Scalars['JSON'] | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableShopifySyncSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
    state?: boolean | null | undefined;
    shop?: AvailableShopifyShopSelection;
    shopId?: boolean | null | undefined;
    /** DateTime that this sync was run from */
    syncSince?: boolean | null | undefined;
    domain?: boolean | null | undefined;
    errorDetails?: boolean | null | undefined;
    errorMessage?: boolean | null | undefined;
    syncSinceBy?: boolean | null | undefined;
    force?: boolean | null | undefined;
    models?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** Information about pagination in a connection. */
export type PageInfo = {
    __typename: 'PageInfo';
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean'];
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null);
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null);
};
export type AvailablePageInfoSelection = {
    __typename?: boolean | null | undefined;
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | null | undefined;
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | null | undefined;
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | null | undefined;
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | null | undefined;
};
/** A connection to a list of ShopifyShop items. */
export type ShopifyShopConnection = {
    __typename: 'ShopifyShopConnection';
    /** A list of edges. */
    edges: ShopifyShopEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableShopifyShopConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableShopifyShopEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a ShopifyShop connection. */
export type ShopifyShopEdge = {
    __typename: 'ShopifyShopEdge';
    /** The item at the end of the edge */
    node: ShopifyShop;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableShopifyShopEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableShopifyShopSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type ShopifyGdprRequest = {
    __typename: 'ShopifyGdprRequest';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    shop: ShopifyShop;
    shopId: Scalars['GadgetID'];
    payload: (Scalars['JSON'] | null);
    topic: ShopifyGdprRequestTopicEnum;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableShopifyGdprRequestSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    shop?: AvailableShopifyShopSelection;
    shopId?: boolean | null | undefined;
    payload?: boolean | null | undefined;
    topic?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A connection to a list of ShopifyGdprRequest items. */
export type ShopifyGdprRequestConnection = {
    __typename: 'ShopifyGdprRequestConnection';
    /** A list of edges. */
    edges: ShopifyGdprRequestEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableShopifyGdprRequestConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableShopifyGdprRequestEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a ShopifyGdprRequest connection. */
export type ShopifyGdprRequestEdge = {
    __typename: 'ShopifyGdprRequestEdge';
    /** The item at the end of the edge */
    node: ShopifyGdprRequest;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableShopifyGdprRequestEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableShopifyGdprRequestSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type ShopifyOrder = {
    __typename: 'ShopifyOrder';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    billingAddress: (Scalars['JSON'] | null);
    browserIp: (Scalars['String'] | null);
    buyerAcceptsMarketing: (Scalars['Boolean'] | null);
    cancelReason: ShopifyOrderCancelReasonEnum;
    cancelledAt: (Scalars['DateTime'] | null);
    cartToken: (Scalars['String'] | null);
    checkoutToken: (Scalars['String'] | null);
    clientDetails: (Scalars['JSON'] | null);
    closedAt: (Scalars['DateTime'] | null);
    currency: ShopifyOrderCurrencyEnum;
    currentSubtotalPrice: (Scalars['String'] | null);
    currentSubtotalPriceSet: (Scalars['JSON'] | null);
    currentTotalDiscounts: (Scalars['String'] | null);
    currentTotalDiscountsSet: (Scalars['JSON'] | null);
    currentTotalDutiesSet: (Scalars['JSON'] | null);
    currentTotalPrice: (Scalars['String'] | null);
    currentTotalPriceSet: (Scalars['JSON'] | null);
    currentTotalTax: (Scalars['String'] | null);
    currentTotalTaxSet: (Scalars['JSON'] | null);
    customerLocale: (Scalars['String'] | null);
    discountApplications: (Scalars['JSON'] | null);
    discountCodes: (Scalars['JSON'] | null);
    email: (Scalars['String'] | null);
    estimatedTaxes: (Scalars['Boolean'] | null);
    financialStatus: ShopifyOrderFinancialStatusEnum;
    fulfillmentStatus: ShopifyOrderFulfillmentStatusEnum;
    landingSite: (Scalars['String'] | null);
    name: (Scalars['String'] | null);
    note: (Scalars['String'] | null);
    noteAttributes: (Scalars['JSON'] | null);
    orderStatusUrl: (Scalars['String'] | null);
    originalTotalDutiesSet: (Scalars['JSON'] | null);
    paymentGatewayNames: (Scalars['JSON'] | null);
    phone: (Scalars['String'] | null);
    presentmentCurrency: ShopifyOrderPresentmentCurrencyEnum;
    processedAt: (Scalars['DateTime'] | null);
    processingMethod: (Scalars['String'] | null);
    referringSite: (Scalars['String'] | null);
    shippingAddress: (Scalars['JSON'] | null);
    shopifyCreatedAt: (Scalars['DateTime'] | null);
    sourceName: (Scalars['String'] | null);
    subtotalPrice: (Scalars['String'] | null);
    subtotalPriceSet: (Scalars['JSON'] | null);
    tags: (Scalars['JSON'] | null);
    shopifyUpdatedAt: (Scalars['DateTime'] | null);
    taxLines: (Scalars['JSON'] | null);
    taxesIncluded: (Scalars['Boolean'] | null);
    test: (Scalars['Boolean'] | null);
    token: (Scalars['String'] | null);
    totalDiscounts: (Scalars['String'] | null);
    totalDiscountsSet: (Scalars['JSON'] | null);
    totalLineItemsPrice: (Scalars['String'] | null);
    totalLineItemsPriceSet: (Scalars['JSON'] | null);
    totalOutstanding: (Scalars['String'] | null);
    totalPrice: (Scalars['String'] | null);
    totalPriceSet: (Scalars['JSON'] | null);
    totalShippingPriceSet: (Scalars['JSON'] | null);
    totalTax: (Scalars['String'] | null);
    totalTaxSet: (Scalars['JSON'] | null);
    totalTipReceived: (Scalars['String'] | null);
    totalWeight: (Scalars['Float'] | null);
    additionalFees: (Scalars['JSON'] | null);
    currentTotalAdditionalFeesSet: (Scalars['JSON'] | null);
    merchantOfRecordAppId: (Scalars['Float'] | null);
    originalTotalAdditionalFeesSet: (Scalars['JSON'] | null);
    sourceIdentifier: (Scalars['String'] | null);
    sourceUrl: (Scalars['String'] | null);
    taxExempt: (Scalars['Boolean'] | null);
    fulfillmentsCount: (Scalars['JSON'] | null);
    cancellation: (Scalars['JSON'] | null);
    risk: (Scalars['JSON'] | null);
    shopifyProtect: (Scalars['JSON'] | null);
    totalCashRoundingAdjustment: (Scalars['JSON'] | null);
    transactionsCount: (Scalars['JSON'] | null);
    billingStatusMatchesShippingAddress: (Scalars['Boolean'] | null);
    poNumber: (Scalars['String'] | null);
    alerts: (Scalars['JSON'] | null);
    canMarkAsPaid: (Scalars['Boolean'] | null);
    canNotifyCustomer: (Scalars['Boolean'] | null);
    capturable: (Scalars['Boolean'] | null);
    cartDiscountAmountSet: (Scalars['JSON'] | null);
    closed: (Scalars['Boolean'] | null);
    confirmationNumber: (Scalars['String'] | null);
    confirmed: (Scalars['Boolean'] | null);
    currentCartDiscountAmountSet: (Scalars['JSON'] | null);
    currentSubtotalLineItemsQuantity: (Scalars['Float'] | null);
    currentTotalWeight: (Scalars['String'] | null);
    currentShippingPriceSet: (Scalars['JSON'] | null);
    dutiesIncluded: (Scalars['Boolean'] | null);
    edited: (Scalars['Boolean'] | null);
    fulfillable: (Scalars['Boolean'] | null);
    fullyPaid: (Scalars['Boolean'] | null);
    hasTimelineComment: (Scalars['Boolean'] | null);
    legacyResourceId: (Scalars['String'] | null);
    merchantEditable: (Scalars['Boolean'] | null);
    merchantEditableErrors: (Scalars['JSON'] | null);
    netPaymentSet: (Scalars['JSON'] | null);
    originalTotalPriceSet: (Scalars['JSON'] | null);
    refundDiscrepencySet: (Scalars['JSON'] | null);
    refundable: (Scalars['Boolean'] | null);
    requiresShipping: (Scalars['Boolean'] | null);
    restockable: (Scalars['Boolean'] | null);
    returnStatus: ShopifyOrderReturnStatusEnum;
    totalCapturableSet: (Scalars['JSON'] | null);
    totalOutstandingSet: (Scalars['JSON'] | null);
    totalReceivedSet: (Scalars['JSON'] | null);
    totalRefundedSet: (Scalars['JSON'] | null);
    totalRefundedShippingSet: (Scalars['JSON'] | null);
    totalTipReceivedSet: (Scalars['JSON'] | null);
    unpaid: (Scalars['Boolean'] | null);
    customerJourneySummary: (Scalars['JSON'] | null);
    shop: (ShopifyShop | null);
    shopId: (Scalars['GadgetID'] | null);
    tracking: (OrderTracking | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableShopifyOrderSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    billingAddress?: boolean | null | undefined;
    browserIp?: boolean | null | undefined;
    buyerAcceptsMarketing?: boolean | null | undefined;
    cancelReason?: boolean | null | undefined;
    cancelledAt?: boolean | null | undefined;
    cartToken?: boolean | null | undefined;
    checkoutToken?: boolean | null | undefined;
    clientDetails?: boolean | null | undefined;
    closedAt?: boolean | null | undefined;
    currency?: boolean | null | undefined;
    currentSubtotalPrice?: boolean | null | undefined;
    currentSubtotalPriceSet?: boolean | null | undefined;
    currentTotalDiscounts?: boolean | null | undefined;
    currentTotalDiscountsSet?: boolean | null | undefined;
    currentTotalDutiesSet?: boolean | null | undefined;
    currentTotalPrice?: boolean | null | undefined;
    currentTotalPriceSet?: boolean | null | undefined;
    currentTotalTax?: boolean | null | undefined;
    currentTotalTaxSet?: boolean | null | undefined;
    customerLocale?: boolean | null | undefined;
    discountApplications?: boolean | null | undefined;
    discountCodes?: boolean | null | undefined;
    email?: boolean | null | undefined;
    estimatedTaxes?: boolean | null | undefined;
    financialStatus?: boolean | null | undefined;
    fulfillmentStatus?: boolean | null | undefined;
    landingSite?: boolean | null | undefined;
    name?: boolean | null | undefined;
    note?: boolean | null | undefined;
    noteAttributes?: boolean | null | undefined;
    orderStatusUrl?: boolean | null | undefined;
    originalTotalDutiesSet?: boolean | null | undefined;
    paymentGatewayNames?: boolean | null | undefined;
    phone?: boolean | null | undefined;
    presentmentCurrency?: boolean | null | undefined;
    processedAt?: boolean | null | undefined;
    processingMethod?: boolean | null | undefined;
    referringSite?: boolean | null | undefined;
    shippingAddress?: boolean | null | undefined;
    shopifyCreatedAt?: boolean | null | undefined;
    sourceName?: boolean | null | undefined;
    subtotalPrice?: boolean | null | undefined;
    subtotalPriceSet?: boolean | null | undefined;
    tags?: boolean | null | undefined;
    shopifyUpdatedAt?: boolean | null | undefined;
    taxLines?: boolean | null | undefined;
    taxesIncluded?: boolean | null | undefined;
    test?: boolean | null | undefined;
    token?: boolean | null | undefined;
    totalDiscounts?: boolean | null | undefined;
    totalDiscountsSet?: boolean | null | undefined;
    totalLineItemsPrice?: boolean | null | undefined;
    totalLineItemsPriceSet?: boolean | null | undefined;
    totalOutstanding?: boolean | null | undefined;
    totalPrice?: boolean | null | undefined;
    totalPriceSet?: boolean | null | undefined;
    totalShippingPriceSet?: boolean | null | undefined;
    totalTax?: boolean | null | undefined;
    totalTaxSet?: boolean | null | undefined;
    totalTipReceived?: boolean | null | undefined;
    totalWeight?: boolean | null | undefined;
    additionalFees?: boolean | null | undefined;
    currentTotalAdditionalFeesSet?: boolean | null | undefined;
    merchantOfRecordAppId?: boolean | null | undefined;
    originalTotalAdditionalFeesSet?: boolean | null | undefined;
    sourceIdentifier?: boolean | null | undefined;
    sourceUrl?: boolean | null | undefined;
    taxExempt?: boolean | null | undefined;
    fulfillmentsCount?: boolean | null | undefined;
    cancellation?: boolean | null | undefined;
    risk?: boolean | null | undefined;
    shopifyProtect?: boolean | null | undefined;
    totalCashRoundingAdjustment?: boolean | null | undefined;
    transactionsCount?: boolean | null | undefined;
    billingStatusMatchesShippingAddress?: boolean | null | undefined;
    poNumber?: boolean | null | undefined;
    alerts?: boolean | null | undefined;
    canMarkAsPaid?: boolean | null | undefined;
    canNotifyCustomer?: boolean | null | undefined;
    capturable?: boolean | null | undefined;
    cartDiscountAmountSet?: boolean | null | undefined;
    closed?: boolean | null | undefined;
    confirmationNumber?: boolean | null | undefined;
    confirmed?: boolean | null | undefined;
    currentCartDiscountAmountSet?: boolean | null | undefined;
    currentSubtotalLineItemsQuantity?: boolean | null | undefined;
    currentTotalWeight?: boolean | null | undefined;
    currentShippingPriceSet?: boolean | null | undefined;
    dutiesIncluded?: boolean | null | undefined;
    edited?: boolean | null | undefined;
    fulfillable?: boolean | null | undefined;
    fullyPaid?: boolean | null | undefined;
    hasTimelineComment?: boolean | null | undefined;
    legacyResourceId?: boolean | null | undefined;
    merchantEditable?: boolean | null | undefined;
    merchantEditableErrors?: boolean | null | undefined;
    netPaymentSet?: boolean | null | undefined;
    originalTotalPriceSet?: boolean | null | undefined;
    refundDiscrepencySet?: boolean | null | undefined;
    refundable?: boolean | null | undefined;
    requiresShipping?: boolean | null | undefined;
    restockable?: boolean | null | undefined;
    returnStatus?: boolean | null | undefined;
    totalCapturableSet?: boolean | null | undefined;
    totalOutstandingSet?: boolean | null | undefined;
    totalReceivedSet?: boolean | null | undefined;
    totalRefundedSet?: boolean | null | undefined;
    totalRefundedShippingSet?: boolean | null | undefined;
    totalTipReceivedSet?: boolean | null | undefined;
    unpaid?: boolean | null | undefined;
    customerJourneySummary?: boolean | null | undefined;
    shop?: AvailableShopifyShopSelection;
    shopId?: boolean | null | undefined;
    tracking?: AvailableOrderTrackingSelection;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
export type OrderTracking = {
    __typename: 'OrderTracking';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    shippingCarrier: Scalars['String'];
    trackingNumber: Scalars['String'];
    deliveryStatus: OrderTrackingDeliveryStatusEnum;
    order: (ShopifyOrder | null);
    orderId: (Scalars['GadgetID'] | null);
    shop: (ShopifyShop | null);
    shopId: (Scalars['GadgetID'] | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableOrderTrackingSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    shippingCarrier?: boolean | null | undefined;
    trackingNumber?: boolean | null | undefined;
    deliveryStatus?: boolean | null | undefined;
    order?: AvailableShopifyOrderSelection;
    orderId?: boolean | null | undefined;
    shop?: AvailableShopifyShopSelection;
    shopId?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A connection to a list of ShopifyOrder items. */
export type ShopifyOrderConnection = {
    __typename: 'ShopifyOrderConnection';
    /** A list of edges. */
    edges: ShopifyOrderEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableShopifyOrderConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableShopifyOrderEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a ShopifyOrder connection. */
export type ShopifyOrderEdge = {
    __typename: 'ShopifyOrderEdge';
    /** The item at the end of the edge */
    node: ShopifyOrder;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableShopifyOrderEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableShopifyOrderSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type ShopifyProduct = {
    __typename: 'ShopifyProduct';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    body: (Scalars['String'] | null);
    handle: (Scalars['String'] | null);
    category: (Scalars['JSON'] | null);
    hasVariantsThatRequiresComponents: (Scalars['Boolean'] | null);
    shopifyCreatedAt: (Scalars['DateTime'] | null);
    productType: (Scalars['String'] | null);
    publishedAt: (Scalars['DateTime'] | null);
    title: (Scalars['String'] | null);
    shopifyUpdatedAt: (Scalars['DateTime'] | null);
    vendor: (Scalars['String'] | null);
    compareAtPriceRange: (Scalars['JSON'] | null);
    productCategory: (Scalars['JSON'] | null);
    status: ShopifyProductStatusEnum;
    tags: (Scalars['JSON'] | null);
    templateSuffix: (Scalars['String'] | null);
    shop: (ShopifyShop | null);
    shopId: (Scalars['GadgetID'] | null);
    customizations: ProductCustomizationConnection;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableShopifyProductSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    body?: boolean | null | undefined;
    handle?: boolean | null | undefined;
    category?: boolean | null | undefined;
    hasVariantsThatRequiresComponents?: boolean | null | undefined;
    shopifyCreatedAt?: boolean | null | undefined;
    productType?: boolean | null | undefined;
    publishedAt?: boolean | null | undefined;
    title?: boolean | null | undefined;
    shopifyUpdatedAt?: boolean | null | undefined;
    vendor?: boolean | null | undefined;
    compareAtPriceRange?: boolean | null | undefined;
    productCategory?: boolean | null | undefined;
    status?: boolean | null | undefined;
    tags?: boolean | null | undefined;
    templateSuffix?: boolean | null | undefined;
    shop?: AvailableShopifyShopSelection;
    shopId?: boolean | null | undefined;
    customizations?: AvailableProductCustomizationConnectionSelection;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A connection to a list of ProductCustomization items. */
export type ProductCustomizationConnection = {
    __typename: 'ProductCustomizationConnection';
    /** A list of edges. */
    edges: ProductCustomizationEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableProductCustomizationConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableProductCustomizationEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a ProductCustomization connection. */
export type ProductCustomizationEdge = {
    __typename: 'ProductCustomizationEdge';
    /** The item at the end of the edge */
    node: ProductCustomization;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableProductCustomizationEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableProductCustomizationSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type ProductCustomization = {
    __typename: 'ProductCustomization';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    product: (ShopifyProduct | null);
    productId: (Scalars['GadgetID'] | null);
    productVariantId: Scalars['Float'];
    customizationValue: Scalars['String'];
    customizationType: Scalars['String'];
    shop: (ShopifyShop | null);
    shopId: (Scalars['GadgetID'] | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableProductCustomizationSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    product?: AvailableShopifyProductSelection;
    productId?: boolean | null | undefined;
    productVariantId?: boolean | null | undefined;
    customizationValue?: boolean | null | undefined;
    customizationType?: boolean | null | undefined;
    shop?: AvailableShopifyShopSelection;
    shopId?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A connection to a list of ShopifyProduct items. */
export type ShopifyProductConnection = {
    __typename: 'ShopifyProductConnection';
    /** A list of edges. */
    edges: ShopifyProductEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableShopifyProductConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableShopifyProductEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a ShopifyProduct connection. */
export type ShopifyProductEdge = {
    __typename: 'ShopifyProductEdge';
    /** The item at the end of the edge */
    node: ShopifyProduct;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableShopifyProductEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableShopifyProductSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of OrderTracking items. */
export type OrderTrackingConnection = {
    __typename: 'OrderTrackingConnection';
    /** A list of edges. */
    edges: OrderTrackingEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableOrderTrackingConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableOrderTrackingEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a OrderTracking connection. */
export type OrderTrackingEdge = {
    __typename: 'OrderTrackingEdge';
    /** The item at the end of the edge */
    node: OrderTracking;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableOrderTrackingEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableOrderTrackingSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type Session = {
    __typename: 'Session';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: (Scalars['GadgetID'] | null);
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    roles: Role[];
    shop: (ShopifyShop | null);
    shopId: (Scalars['GadgetID'] | null);
    shopifySID: (Scalars['String'] | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableSessionSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    roles?: AvailableRoleSelection;
    shop?: AvailableShopifyShopSelection;
    shopId?: boolean | null | undefined;
    shopifySID?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A named group of permissions granted to a particular actor in the system. Managed in the Gadget editor. */
export type Role = {
    __typename: 'Role';
    /** The stable identifier for this role. Null if the role has since been deleted. */
    key: Scalars['String'];
    /** The human readable name for this role. Can be changed. */
    name: Scalars['String'];
};
export type AvailableRoleSelection = {
    __typename?: boolean | null | undefined;
    /** The stable identifier for this role. Null if the role has since been deleted. */
    key?: boolean | null | undefined;
    /** The human readable name for this role. Can be changed. */
    name?: boolean | null | undefined;
};
/** A connection to a list of Session items. */
export type SessionConnection = {
    __typename: 'SessionConnection';
    /** A list of edges. */
    edges: SessionEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableSessionConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableSessionEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a Session connection. */
export type SessionEdge = {
    __typename: 'SessionEdge';
    /** The item at the end of the edge */
    node: Session;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableSessionEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableSessionSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** Represents one of the roles an identity in the system can be entitled to */
export type GadgetRole = {
    __typename: 'GadgetRole';
    key: Scalars['String'];
    name: Scalars['String'];
    selectable: Scalars['Boolean'];
    order: Scalars['Int'];
};
export type AvailableGadgetRoleSelection = {
    __typename?: boolean | null | undefined;
    key?: boolean | null | undefined;
    name?: boolean | null | undefined;
    selectable?: boolean | null | undefined;
    order?: boolean | null | undefined;
};
export type GadgetGlobalAction = {
    __typename: 'GadgetGlobalAction';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    namespace: Scalars['String'][];
    requiresInput: Scalars['Boolean'];
    acceptsInput: Scalars['Boolean'];
    triggers: GadgetTrigger[];
    inputFields: GadgetObjectField[];
    examples: (GadgetGlobalActionGraphQLType | null);
};
export type AvailableGadgetGlobalActionSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    namespace?: boolean | null | undefined;
    requiresInput?: boolean | null | undefined;
    acceptsInput?: boolean | null | undefined;
    triggers?: AvailableGadgetTriggerSelection;
    inputFields?: AvailableGadgetObjectFieldSelection;
    examples?: AvailableGadgetGlobalActionGraphQLTypeSelection;
};
export type GadgetGlobalActionGraphQLType = {
    __typename: 'GadgetGlobalActionGraphQLType';
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation: Scalars['String'];
    exampleGraphQLMutation: Scalars['String'];
    inputGraphQLTypeSDL: (Scalars['String'] | null);
    outputGraphQLTypeSDL: Scalars['String'];
    inputTypeScriptInterface: (Scalars['String'] | null);
    outputTypeScriptInterface: Scalars['String'];
    exampleGraphQLVariables: Scalars['JSON'];
    exampleJSInputs: Scalars['JSON'];
    exampleImperativeInvocation: Scalars['String'];
    exampleReactHook: Scalars['String'];
};
export type AvailableGadgetGlobalActionGraphQLTypeSelection = {
    __typename?: boolean | null | undefined;
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation?: boolean | null | undefined;
    exampleGraphQLMutation?: boolean | null | undefined;
    inputGraphQLTypeSDL?: boolean | null | undefined;
    outputGraphQLTypeSDL?: boolean | null | undefined;
    inputTypeScriptInterface?: boolean | null | undefined;
    outputTypeScriptInterface?: boolean | null | undefined;
    exampleGraphQLVariables?: boolean | null | undefined;
    exampleJSInputs?: boolean | null | undefined;
    exampleImperativeInvocation?: boolean | null | undefined;
    exampleReactHook?: boolean | null | undefined;
};
/** One upload target to use for the Direct Upload style of sending files to Gadget */
export type DirectUploadToken = {
    __typename: 'DirectUploadToken';
    /** The URL to upload a file to. */
    url: Scalars['String'];
    /** The token to pass to an action to reference the uploaded file. */
    token: Scalars['String'];
};
export type AvailableDirectUploadTokenSelection = {
    __typename?: boolean | null | undefined;
    /** The URL to upload a file to. */
    url?: boolean | null | undefined;
    /** The token to pass to an action to reference the uploaded file. */
    token?: boolean | null | undefined;
};
/** Information about the Shopify Connection */
export type Shopify = {
    __typename: 'Shopify';
    /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
    requiresReauthentication: (Scalars['Boolean'] | null);
    /** A list missing scopes compared to the Connection based on the current session's shop */
    missingScopes: Scalars['String'][];
};
export type AvailableShopifySelection = {
    __typename?: boolean | null | undefined;
    /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
    requiresReauthentication?: boolean | null | undefined;
    /** A list missing scopes compared to the Connection based on the current session's shop */
    missingScopes?: boolean | null | undefined;
};
export type InternalQueries = {
    __typename: 'InternalQueries';
    shopifyShop: (InternalShopifyShopRecord | null);
    listShopifyShop: InternalShopifyShopRecordConnection;
    /** Currently open platform transaction details, or null if no transaction is open */
    currentTransactionDetails: (Scalars['JSONObject'] | null);
    shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
    listShopifyGdprRequest: InternalShopifyGdprRequestRecordConnection;
    shopifyOrder: (InternalShopifyOrderRecord | null);
    listShopifyOrder: InternalShopifyOrderRecordConnection;
    shopifyProduct: (InternalShopifyProductRecord | null);
    listShopifyProduct: InternalShopifyProductRecordConnection;
    shopifySync: (InternalShopifySyncRecord | null);
    listShopifySync: InternalShopifySyncRecordConnection;
    orderTracking: (InternalOrderTrackingRecord | null);
    listOrderTracking: InternalOrderTrackingRecordConnection;
    productCustomization: (InternalProductCustomizationRecord | null);
    listProductCustomization: InternalProductCustomizationRecordConnection;
    session: (InternalSessionRecord | null);
    listSession: InternalSessionRecordConnection;
    gellyView: (Scalars['JSON'] | null);
};
export type AvailableInternalQueriesSelection = {
    __typename?: boolean | null | undefined;
    shopifyShop?: boolean | null | undefined;
    listShopifyShop?: AvailableInternalShopifyShopRecordConnectionSelection;
    /** Currently open platform transaction details, or null if no transaction is open */
    currentTransactionDetails?: boolean | null | undefined;
    shopifyGdprRequest?: boolean | null | undefined;
    listShopifyGdprRequest?: AvailableInternalShopifyGdprRequestRecordConnectionSelection;
    shopifyOrder?: boolean | null | undefined;
    listShopifyOrder?: AvailableInternalShopifyOrderRecordConnectionSelection;
    shopifyProduct?: boolean | null | undefined;
    listShopifyProduct?: AvailableInternalShopifyProductRecordConnectionSelection;
    shopifySync?: boolean | null | undefined;
    listShopifySync?: AvailableInternalShopifySyncRecordConnectionSelection;
    orderTracking?: boolean | null | undefined;
    listOrderTracking?: AvailableInternalOrderTrackingRecordConnectionSelection;
    productCustomization?: boolean | null | undefined;
    listProductCustomization?: AvailableInternalProductCustomizationRecordConnectionSelection;
    session?: boolean | null | undefined;
    listSession?: AvailableInternalSessionRecordConnectionSelection;
    gellyView?: boolean | null | undefined;
};
/** A connection to a list of InternalShopifyShopRecord items. */
export type InternalShopifyShopRecordConnection = {
    __typename: 'InternalShopifyShopRecordConnection';
    /** A list of edges. */
    edges: InternalShopifyShopRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalShopifyShopRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalShopifyShopRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalShopifyShopRecord connection. */
export type InternalShopifyShopRecordEdge = {
    __typename: 'InternalShopifyShopRecordEdge';
    /** The item at the end of the edge */
    node: InternalShopifyShopRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalShopifyShopRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalShopifyGdprRequestRecord items. */
export type InternalShopifyGdprRequestRecordConnection = {
    __typename: 'InternalShopifyGdprRequestRecordConnection';
    /** A list of edges. */
    edges: InternalShopifyGdprRequestRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalShopifyGdprRequestRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalShopifyGdprRequestRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalShopifyGdprRequestRecord connection. */
export type InternalShopifyGdprRequestRecordEdge = {
    __typename: 'InternalShopifyGdprRequestRecordEdge';
    /** The item at the end of the edge */
    node: InternalShopifyGdprRequestRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalShopifyGdprRequestRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalShopifyOrderRecord items. */
export type InternalShopifyOrderRecordConnection = {
    __typename: 'InternalShopifyOrderRecordConnection';
    /** A list of edges. */
    edges: InternalShopifyOrderRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalShopifyOrderRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalShopifyOrderRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalShopifyOrderRecord connection. */
export type InternalShopifyOrderRecordEdge = {
    __typename: 'InternalShopifyOrderRecordEdge';
    /** The item at the end of the edge */
    node: InternalShopifyOrderRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalShopifyOrderRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalShopifyProductRecord items. */
export type InternalShopifyProductRecordConnection = {
    __typename: 'InternalShopifyProductRecordConnection';
    /** A list of edges. */
    edges: InternalShopifyProductRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalShopifyProductRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalShopifyProductRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalShopifyProductRecord connection. */
export type InternalShopifyProductRecordEdge = {
    __typename: 'InternalShopifyProductRecordEdge';
    /** The item at the end of the edge */
    node: InternalShopifyProductRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalShopifyProductRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalShopifySyncRecord items. */
export type InternalShopifySyncRecordConnection = {
    __typename: 'InternalShopifySyncRecordConnection';
    /** A list of edges. */
    edges: InternalShopifySyncRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalShopifySyncRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalShopifySyncRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalShopifySyncRecord connection. */
export type InternalShopifySyncRecordEdge = {
    __typename: 'InternalShopifySyncRecordEdge';
    /** The item at the end of the edge */
    node: InternalShopifySyncRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalShopifySyncRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalOrderTrackingRecord items. */
export type InternalOrderTrackingRecordConnection = {
    __typename: 'InternalOrderTrackingRecordConnection';
    /** A list of edges. */
    edges: InternalOrderTrackingRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalOrderTrackingRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalOrderTrackingRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalOrderTrackingRecord connection. */
export type InternalOrderTrackingRecordEdge = {
    __typename: 'InternalOrderTrackingRecordEdge';
    /** The item at the end of the edge */
    node: InternalOrderTrackingRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalOrderTrackingRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalProductCustomizationRecord items. */
export type InternalProductCustomizationRecordConnection = {
    __typename: 'InternalProductCustomizationRecordConnection';
    /** A list of edges. */
    edges: InternalProductCustomizationRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalProductCustomizationRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalProductCustomizationRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalProductCustomizationRecord connection. */
export type InternalProductCustomizationRecordEdge = {
    __typename: 'InternalProductCustomizationRecordEdge';
    /** The item at the end of the edge */
    node: InternalProductCustomizationRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalProductCustomizationRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalSessionRecord items. */
export type InternalSessionRecordConnection = {
    __typename: 'InternalSessionRecordConnection';
    /** A list of edges. */
    edges: InternalSessionRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalSessionRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalSessionRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalSessionRecord connection. */
export type InternalSessionRecordEdge = {
    __typename: 'InternalSessionRecordEdge';
    /** The item at the end of the edge */
    node: InternalSessionRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalSessionRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type Mutation = {
    __typename: 'Mutation';
    abortShopifySync: (AbortShopifySyncResult | null);
    bulkAbortShopifySyncs: (BulkAbortShopifySyncsResult | null);
    completeShopifySync: (CompleteShopifySyncResult | null);
    bulkCompleteShopifySyncs: (BulkCompleteShopifySyncsResult | null);
    errorShopifySync: (ErrorShopifySyncResult | null);
    bulkErrorShopifySyncs: (BulkErrorShopifySyncsResult | null);
    runShopifySync: (RunShopifySyncResult | null);
    bulkRunShopifySyncs: (BulkRunShopifySyncsResult | null);
    upsertShopifySync: (UpsertShopifySyncResult | null);
    bulkUpsertShopifySyncs: BulkUpsertShopifySyncsResult;
    createOrderTracking: (CreateOrderTrackingResult | null);
    bulkCreateOrderTrackings: (BulkCreateOrderTrackingsResult | null);
    updateOrderTracking: (UpdateOrderTrackingResult | null);
    bulkUpdateOrderTrackings: (BulkUpdateOrderTrackingsResult | null);
    deleteOrderTracking: (DeleteOrderTrackingResult | null);
    bulkDeleteOrderTrackings: (BulkDeleteOrderTrackingsResult | null);
    upsertOrderTracking: (UpsertOrderTrackingResult | null);
    bulkUpsertOrderTrackings: BulkUpsertOrderTrackingsResult;
    createProductCustomization: (CreateProductCustomizationResult | null);
    bulkCreateProductCustomizations: (BulkCreateProductCustomizationsResult | null);
    updateProductCustomization: (UpdateProductCustomizationResult | null);
    bulkUpdateProductCustomizations: (BulkUpdateProductCustomizationsResult | null);
    deleteProductCustomization: (DeleteProductCustomizationResult | null);
    bulkDeleteProductCustomizations: (BulkDeleteProductCustomizationsResult | null);
    upsertProductCustomization: (UpsertProductCustomizationResult | null);
    bulkUpsertProductCustomizations: BulkUpsertProductCustomizationsResult;
    shopifyConnection: (ShopifyConnectionMutations | null);
    background: BackgroundMutations;
    internal: InternalMutations;
};
export type AvailableMutationSelection = {
    __typename?: boolean | null | undefined;
    abortShopifySync?: AvailableAbortShopifySyncResultSelection;
    bulkAbortShopifySyncs?: AvailableBulkAbortShopifySyncsResultSelection;
    completeShopifySync?: AvailableCompleteShopifySyncResultSelection;
    bulkCompleteShopifySyncs?: AvailableBulkCompleteShopifySyncsResultSelection;
    errorShopifySync?: AvailableErrorShopifySyncResultSelection;
    bulkErrorShopifySyncs?: AvailableBulkErrorShopifySyncsResultSelection;
    runShopifySync?: AvailableRunShopifySyncResultSelection;
    bulkRunShopifySyncs?: AvailableBulkRunShopifySyncsResultSelection;
    upsertShopifySync?: AvailableUpsertShopifySyncResultSelection;
    bulkUpsertShopifySyncs?: AvailableBulkUpsertShopifySyncsResultSelection;
    createOrderTracking?: AvailableCreateOrderTrackingResultSelection;
    bulkCreateOrderTrackings?: AvailableBulkCreateOrderTrackingsResultSelection;
    updateOrderTracking?: AvailableUpdateOrderTrackingResultSelection;
    bulkUpdateOrderTrackings?: AvailableBulkUpdateOrderTrackingsResultSelection;
    deleteOrderTracking?: AvailableDeleteOrderTrackingResultSelection;
    bulkDeleteOrderTrackings?: AvailableBulkDeleteOrderTrackingsResultSelection;
    upsertOrderTracking?: AvailableUpsertOrderTrackingResultSelection;
    bulkUpsertOrderTrackings?: AvailableBulkUpsertOrderTrackingsResultSelection;
    createProductCustomization?: AvailableCreateProductCustomizationResultSelection;
    bulkCreateProductCustomizations?: AvailableBulkCreateProductCustomizationsResultSelection;
    updateProductCustomization?: AvailableUpdateProductCustomizationResultSelection;
    bulkUpdateProductCustomizations?: AvailableBulkUpdateProductCustomizationsResultSelection;
    deleteProductCustomization?: AvailableDeleteProductCustomizationResultSelection;
    bulkDeleteProductCustomizations?: AvailableBulkDeleteProductCustomizationsResultSelection;
    upsertProductCustomization?: AvailableUpsertProductCustomizationResultSelection;
    bulkUpsertProductCustomizations?: AvailableBulkUpsertProductCustomizationsResultSelection;
    shopifyConnection?: AvailableShopifyConnectionMutationsSelection;
    background?: AvailableBackgroundMutationsSelection;
    internal?: AvailableInternalMutationsSelection;
};
export interface AbortShopifySyncResult extends UpsertShopifySyncResult {
    __typename: 'AbortShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    shopifySync: (ShopifySync | null);
}
export type AvailableAbortShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    shopifySync?: AvailableShopifySyncSelection;
};
/** The output when running the abort on the shopifySync model in bulk. */
export type BulkAbortShopifySyncsResult = {
    __typename: 'BulkAbortShopifySyncsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs: (ShopifySync | null)[];
};
export type AvailableBulkAbortShopifySyncsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs?: AvailableShopifySyncSelection;
};
export type CompleteShopifySyncResult = {
    __typename: 'CompleteShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    shopifySync: (ShopifySync | null);
};
export type AvailableCompleteShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    shopifySync?: AvailableShopifySyncSelection;
};
/** The output when running the complete on the shopifySync model in bulk. */
export type BulkCompleteShopifySyncsResult = {
    __typename: 'BulkCompleteShopifySyncsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs: (ShopifySync | null)[];
};
export type AvailableBulkCompleteShopifySyncsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs?: AvailableShopifySyncSelection;
};
export type ErrorShopifySyncResult = {
    __typename: 'ErrorShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    shopifySync: (ShopifySync | null);
};
export type AvailableErrorShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    shopifySync?: AvailableShopifySyncSelection;
};
/** The output when running the error on the shopifySync model in bulk. */
export type BulkErrorShopifySyncsResult = {
    __typename: 'BulkErrorShopifySyncsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs: (ShopifySync | null)[];
};
export type AvailableBulkErrorShopifySyncsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs?: AvailableShopifySyncSelection;
};
export interface RunShopifySyncResult extends UpsertShopifySyncResult {
    __typename: 'RunShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    shopifySync: (ShopifySync | null);
}
export type AvailableRunShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    shopifySync?: AvailableShopifySyncSelection;
};
/** The output when running the run on the shopifySync model in bulk. */
export type BulkRunShopifySyncsResult = {
    __typename: 'BulkRunShopifySyncsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs: (ShopifySync | null)[];
};
export type AvailableBulkRunShopifySyncsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
    shopifySyncs?: AvailableShopifySyncSelection;
};
/** The result of a bulk upsert operation for the shopifySync model */
export type BulkUpsertShopifySyncsResult = {
    __typename: 'BulkUpsertShopifySyncsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The results of each upsert action in the bulk operation */
    shopifySyncs: (ShopifySync | null)[];
};
export type AvailableBulkUpsertShopifySyncsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The results of each upsert action in the bulk operation */
    shopifySyncs?: AvailableShopifySyncSelection;
};
export interface CreateOrderTrackingResult extends UpsertOrderTrackingResult {
    __typename: 'CreateOrderTrackingResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    orderTracking: (OrderTracking | null);
}
export type AvailableCreateOrderTrackingResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    orderTracking?: AvailableOrderTrackingSelection;
};
/** The output when running the create on the orderTracking model in bulk. */
export type BulkCreateOrderTrackingsResult = {
    __typename: 'BulkCreateOrderTrackingsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed orderTracking records by each sent bulk action. Returned in the same order as the input bulk action params. */
    orderTrackings: (OrderTracking | null)[];
};
export type AvailableBulkCreateOrderTrackingsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed orderTracking records by each sent bulk action. Returned in the same order as the input bulk action params. */
    orderTrackings?: AvailableOrderTrackingSelection;
};
export interface UpdateOrderTrackingResult extends UpsertOrderTrackingResult {
    __typename: 'UpdateOrderTrackingResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    orderTracking: (OrderTracking | null);
}
export type AvailableUpdateOrderTrackingResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    orderTracking?: AvailableOrderTrackingSelection;
};
/** The output when running the update on the orderTracking model in bulk. */
export type BulkUpdateOrderTrackingsResult = {
    __typename: 'BulkUpdateOrderTrackingsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed orderTracking records by each sent bulk action. Returned in the same order as the input bulk action params. */
    orderTrackings: (OrderTracking | null)[];
};
export type AvailableBulkUpdateOrderTrackingsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed orderTracking records by each sent bulk action. Returned in the same order as the input bulk action params. */
    orderTrackings?: AvailableOrderTrackingSelection;
};
export type DeleteOrderTrackingResult = {
    __typename: 'DeleteOrderTrackingResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
};
export type AvailableDeleteOrderTrackingResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
};
/** The output when running the delete on the orderTracking model in bulk. */
export type BulkDeleteOrderTrackingsResult = {
    __typename: 'BulkDeleteOrderTrackingsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
};
export type AvailableBulkDeleteOrderTrackingsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
};
/** The result of a bulk upsert operation for the orderTracking model */
export type BulkUpsertOrderTrackingsResult = {
    __typename: 'BulkUpsertOrderTrackingsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The results of each upsert action in the bulk operation */
    orderTrackings: (OrderTracking | null)[];
};
export type AvailableBulkUpsertOrderTrackingsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The results of each upsert action in the bulk operation */
    orderTrackings?: AvailableOrderTrackingSelection;
};
export interface CreateProductCustomizationResult extends UpsertProductCustomizationResult {
    __typename: 'CreateProductCustomizationResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    productCustomization: (ProductCustomization | null);
}
export type AvailableCreateProductCustomizationResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    productCustomization?: AvailableProductCustomizationSelection;
};
/** The output when running the create on the productCustomization model in bulk. */
export type BulkCreateProductCustomizationsResult = {
    __typename: 'BulkCreateProductCustomizationsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed productCustomization records by each sent bulk action. Returned in the same order as the input bulk action params. */
    productCustomizations: (ProductCustomization | null)[];
};
export type AvailableBulkCreateProductCustomizationsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed productCustomization records by each sent bulk action. Returned in the same order as the input bulk action params. */
    productCustomizations?: AvailableProductCustomizationSelection;
};
export interface UpdateProductCustomizationResult extends UpsertProductCustomizationResult {
    __typename: 'UpdateProductCustomizationResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    productCustomization: (ProductCustomization | null);
}
export type AvailableUpdateProductCustomizationResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    productCustomization?: AvailableProductCustomizationSelection;
};
/** The output when running the update on the productCustomization model in bulk. */
export type BulkUpdateProductCustomizationsResult = {
    __typename: 'BulkUpdateProductCustomizationsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed productCustomization records by each sent bulk action. Returned in the same order as the input bulk action params. */
    productCustomizations: (ProductCustomization | null)[];
};
export type AvailableBulkUpdateProductCustomizationsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed productCustomization records by each sent bulk action. Returned in the same order as the input bulk action params. */
    productCustomizations?: AvailableProductCustomizationSelection;
};
export type DeleteProductCustomizationResult = {
    __typename: 'DeleteProductCustomizationResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
};
export type AvailableDeleteProductCustomizationResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
};
/** The output when running the delete on the productCustomization model in bulk. */
export type BulkDeleteProductCustomizationsResult = {
    __typename: 'BulkDeleteProductCustomizationsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
};
export type AvailableBulkDeleteProductCustomizationsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
};
/** The result of a bulk upsert operation for the productCustomization model */
export type BulkUpsertProductCustomizationsResult = {
    __typename: 'BulkUpsertProductCustomizationsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The results of each upsert action in the bulk operation */
    productCustomizations: (ProductCustomization | null)[];
};
export type AvailableBulkUpsertProductCustomizationsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The results of each upsert action in the bulk operation */
    productCustomizations?: AvailableProductCustomizationSelection;
};
export type ShopifyConnectionMutations = {
    __typename: 'ShopifyConnectionMutations';
    fetchOrInstallShop: (ShopifyConnectionFetchOrInstallShopResult | null);
};
export type AvailableShopifyConnectionMutationsSelection = {
    __typename?: boolean | null | undefined;
    fetchOrInstallShop?: AvailableShopifyConnectionFetchOrInstallShopResultSelection;
};
export type ShopifyConnectionFetchOrInstallShopResult = {
    __typename: 'ShopifyConnectionFetchOrInstallShopResult';
    isAuthenticated: Scalars['Boolean'];
    redirectToOauth: Scalars['Boolean'];
    missingScopes: Scalars['String'][];
};
export type AvailableShopifyConnectionFetchOrInstallShopResultSelection = {
    __typename?: boolean | null | undefined;
    isAuthenticated?: boolean | null | undefined;
    redirectToOauth?: boolean | null | undefined;
    missingScopes?: boolean | null | undefined;
};
export type BackgroundMutations = {
    __typename: 'BackgroundMutations';
    abortShopifySync: EnqueueBackgroundActionResult;
    bulkAbortShopifySyncs: BulkEnqueueBackgroundActionResult;
    completeShopifySync: EnqueueBackgroundActionResult;
    bulkCompleteShopifySyncs: BulkEnqueueBackgroundActionResult;
    errorShopifySync: EnqueueBackgroundActionResult;
    bulkErrorShopifySyncs: BulkEnqueueBackgroundActionResult;
    runShopifySync: EnqueueBackgroundActionResult;
    bulkRunShopifySyncs: BulkEnqueueBackgroundActionResult;
    upsertShopifySync: EnqueueBackgroundActionResult;
    bulkUpsertShopifySyncs: BulkEnqueueBackgroundActionResult;
    createOrderTracking: EnqueueBackgroundActionResult;
    bulkCreateOrderTrackings: BulkEnqueueBackgroundActionResult;
    updateOrderTracking: EnqueueBackgroundActionResult;
    bulkUpdateOrderTrackings: BulkEnqueueBackgroundActionResult;
    deleteOrderTracking: EnqueueBackgroundActionResult;
    bulkDeleteOrderTrackings: BulkEnqueueBackgroundActionResult;
    upsertOrderTracking: EnqueueBackgroundActionResult;
    bulkUpsertOrderTrackings: BulkEnqueueBackgroundActionResult;
    createProductCustomization: EnqueueBackgroundActionResult;
    bulkCreateProductCustomizations: BulkEnqueueBackgroundActionResult;
    updateProductCustomization: EnqueueBackgroundActionResult;
    bulkUpdateProductCustomizations: BulkEnqueueBackgroundActionResult;
    deleteProductCustomization: EnqueueBackgroundActionResult;
    bulkDeleteProductCustomizations: BulkEnqueueBackgroundActionResult;
    upsertProductCustomization: EnqueueBackgroundActionResult;
    bulkUpsertProductCustomizations: BulkEnqueueBackgroundActionResult;
};
export type AvailableBackgroundMutationsSelection = {
    __typename?: boolean | null | undefined;
    abortShopifySync?: AvailableEnqueueBackgroundActionResultSelection;
    bulkAbortShopifySyncs?: AvailableBulkEnqueueBackgroundActionResultSelection;
    completeShopifySync?: AvailableEnqueueBackgroundActionResultSelection;
    bulkCompleteShopifySyncs?: AvailableBulkEnqueueBackgroundActionResultSelection;
    errorShopifySync?: AvailableEnqueueBackgroundActionResultSelection;
    bulkErrorShopifySyncs?: AvailableBulkEnqueueBackgroundActionResultSelection;
    runShopifySync?: AvailableEnqueueBackgroundActionResultSelection;
    bulkRunShopifySyncs?: AvailableBulkEnqueueBackgroundActionResultSelection;
    upsertShopifySync?: AvailableEnqueueBackgroundActionResultSelection;
    bulkUpsertShopifySyncs?: AvailableBulkEnqueueBackgroundActionResultSelection;
    createOrderTracking?: AvailableEnqueueBackgroundActionResultSelection;
    bulkCreateOrderTrackings?: AvailableBulkEnqueueBackgroundActionResultSelection;
    updateOrderTracking?: AvailableEnqueueBackgroundActionResultSelection;
    bulkUpdateOrderTrackings?: AvailableBulkEnqueueBackgroundActionResultSelection;
    deleteOrderTracking?: AvailableEnqueueBackgroundActionResultSelection;
    bulkDeleteOrderTrackings?: AvailableBulkEnqueueBackgroundActionResultSelection;
    upsertOrderTracking?: AvailableEnqueueBackgroundActionResultSelection;
    bulkUpsertOrderTrackings?: AvailableBulkEnqueueBackgroundActionResultSelection;
    createProductCustomization?: AvailableEnqueueBackgroundActionResultSelection;
    bulkCreateProductCustomizations?: AvailableBulkEnqueueBackgroundActionResultSelection;
    updateProductCustomization?: AvailableEnqueueBackgroundActionResultSelection;
    bulkUpdateProductCustomizations?: AvailableBulkEnqueueBackgroundActionResultSelection;
    deleteProductCustomization?: AvailableEnqueueBackgroundActionResultSelection;
    bulkDeleteProductCustomizations?: AvailableBulkEnqueueBackgroundActionResultSelection;
    upsertProductCustomization?: AvailableEnqueueBackgroundActionResultSelection;
    bulkUpsertProductCustomizations?: AvailableBulkEnqueueBackgroundActionResultSelection;
};
/** The value returned from enqueuing an action to run in the background */
export type EnqueueBackgroundActionResult = {
    __typename: 'EnqueueBackgroundActionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    backgroundAction: (BackgroundActionHandle | null);
};
export type AvailableEnqueueBackgroundActionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    backgroundAction?: AvailableBackgroundActionHandleSelection;
};
/** One action enqueued for execution in the background */
export type BackgroundActionHandle = {
    __typename: 'BackgroundActionHandle';
    /** The ID of the background action */
    id: Scalars['String'];
};
export type AvailableBackgroundActionHandleSelection = {
    __typename?: boolean | null | undefined;
    /** The ID of the background action */
    id?: boolean | null | undefined;
};
/** The value returned from bulk enqueuing actions to run in the background */
export type BulkEnqueueBackgroundActionResult = {
    __typename: 'BulkEnqueueBackgroundActionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    backgroundActions: BackgroundActionHandle[];
};
export type AvailableBulkEnqueueBackgroundActionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    backgroundActions?: AvailableBackgroundActionHandleSelection;
};
export type InternalMutations = {
    __typename: 'InternalMutations';
    startTransaction: Scalars['String'];
    commitTransaction: Scalars['String'];
    rollbackTransaction: Scalars['String'];
    /** Acquire a backend lock, returning only once the lock has been acquired */
    acquireLock: LockOperationResult;
    createShopifyShop: (InternalCreateShopifyShopResult | null);
    updateShopifyShop: (InternalUpdateShopifyShopResult | null);
    deleteShopifyShop: (InternalDeleteShopifyShopResult | null);
    deleteManyShopifyShop: (InternalDeleteManyShopifyShopResult | null);
    bulkCreateShopifyShops: (InternalBulkCreateShopifyShopsResult | null);
    upsertShopifyShop: (InternalUpsertShopifyShopResult | null);
    triggerUpdateShopifyShop: (UpdateShopifyShopResult | null);
    triggerInstallShopifyShop: (InstallShopifyShopResult | null);
    triggerReinstallShopifyShop: (ReinstallShopifyShopResult | null);
    triggerUninstallShopifyShop: (UninstallShopifyShopResult | null);
    createShopifyGdprRequest: (InternalCreateShopifyGdprRequestResult | null);
    updateShopifyGdprRequest: (InternalUpdateShopifyGdprRequestResult | null);
    deleteShopifyGdprRequest: (InternalDeleteShopifyGdprRequestResult | null);
    deleteManyShopifyGdprRequest: (InternalDeleteManyShopifyGdprRequestResult | null);
    bulkCreateShopifyGdprRequests: (InternalBulkCreateShopifyGdprRequestsResult | null);
    upsertShopifyGdprRequest: (InternalUpsertShopifyGdprRequestResult | null);
    triggerCreateShopifyGdprRequest: (CreateShopifyGdprRequestResult | null);
    triggerUpdateShopifyGdprRequest: (UpdateShopifyGdprRequestResult | null);
    createShopifyOrder: (InternalCreateShopifyOrderResult | null);
    updateShopifyOrder: (InternalUpdateShopifyOrderResult | null);
    deleteShopifyOrder: (InternalDeleteShopifyOrderResult | null);
    deleteManyShopifyOrder: (InternalDeleteManyShopifyOrderResult | null);
    bulkCreateShopifyOrders: (InternalBulkCreateShopifyOrdersResult | null);
    upsertShopifyOrder: (InternalUpsertShopifyOrderResult | null);
    triggerCreateShopifyOrder: (CreateShopifyOrderResult | null);
    triggerUpdateShopifyOrder: (UpdateShopifyOrderResult | null);
    triggerDeleteShopifyOrder: (DeleteShopifyOrderResult | null);
    createShopifyProduct: (InternalCreateShopifyProductResult | null);
    updateShopifyProduct: (InternalUpdateShopifyProductResult | null);
    deleteShopifyProduct: (InternalDeleteShopifyProductResult | null);
    deleteManyShopifyProduct: (InternalDeleteManyShopifyProductResult | null);
    bulkCreateShopifyProducts: (InternalBulkCreateShopifyProductsResult | null);
    upsertShopifyProduct: (InternalUpsertShopifyProductResult | null);
    triggerCreateShopifyProduct: (CreateShopifyProductResult | null);
    triggerUpdateShopifyProduct: (UpdateShopifyProductResult | null);
    triggerDeleteShopifyProduct: (DeleteShopifyProductResult | null);
    createShopifySync: (InternalCreateShopifySyncResult | null);
    updateShopifySync: (InternalUpdateShopifySyncResult | null);
    deleteShopifySync: (InternalDeleteShopifySyncResult | null);
    deleteManyShopifySync: (InternalDeleteManyShopifySyncResult | null);
    bulkCreateShopifySyncs: (InternalBulkCreateShopifySyncsResult | null);
    upsertShopifySync: (InternalUpsertShopifySyncResult | null);
    triggerAbortShopifySync: (AbortShopifySyncResult | null);
    triggerCompleteShopifySync: (CompleteShopifySyncResult | null);
    triggerErrorShopifySync: (ErrorShopifySyncResult | null);
    triggerRunShopifySync: (RunShopifySyncResult | null);
    createOrderTracking: (InternalCreateOrderTrackingResult | null);
    updateOrderTracking: (InternalUpdateOrderTrackingResult | null);
    deleteOrderTracking: (InternalDeleteOrderTrackingResult | null);
    deleteManyOrderTracking: (InternalDeleteManyOrderTrackingResult | null);
    bulkCreateOrderTrackings: (InternalBulkCreateOrderTrackingsResult | null);
    upsertOrderTracking: (InternalUpsertOrderTrackingResult | null);
    triggerCreateOrderTracking: (CreateOrderTrackingResult | null);
    triggerUpdateOrderTracking: (UpdateOrderTrackingResult | null);
    triggerDeleteOrderTracking: (DeleteOrderTrackingResult | null);
    createProductCustomization: (InternalCreateProductCustomizationResult | null);
    updateProductCustomization: (InternalUpdateProductCustomizationResult | null);
    deleteProductCustomization: (InternalDeleteProductCustomizationResult | null);
    deleteManyProductCustomization: (InternalDeleteManyProductCustomizationResult | null);
    bulkCreateProductCustomizations: (InternalBulkCreateProductCustomizationsResult | null);
    upsertProductCustomization: (InternalUpsertProductCustomizationResult | null);
    triggerCreateProductCustomization: (CreateProductCustomizationResult | null);
    triggerUpdateProductCustomization: (UpdateProductCustomizationResult | null);
    triggerDeleteProductCustomization: (DeleteProductCustomizationResult | null);
    createSession: (InternalCreateSessionResult | null);
    updateSession: (InternalUpdateSessionResult | null);
    deleteSession: (InternalDeleteSessionResult | null);
    deleteManySession: (InternalDeleteManySessionResult | null);
    bulkCreateSessions: (InternalBulkCreateSessionsResult | null);
    upsertSession: (InternalUpsertSessionResult | null);
    cancelBackgroundAction: CancelBackgroundActionResult;
    bulkCancelBackgroundActions: BulkCancelBackgroundActionResult;
};
export type AvailableInternalMutationsSelection = {
    __typename?: boolean | null | undefined;
    startTransaction?: boolean | null | undefined;
    commitTransaction?: boolean | null | undefined;
    rollbackTransaction?: boolean | null | undefined;
    /** Acquire a backend lock, returning only once the lock has been acquired */
    acquireLock?: AvailableLockOperationResultSelection;
    createShopifyShop?: AvailableInternalCreateShopifyShopResultSelection;
    updateShopifyShop?: AvailableInternalUpdateShopifyShopResultSelection;
    deleteShopifyShop?: AvailableInternalDeleteShopifyShopResultSelection;
    deleteManyShopifyShop?: AvailableInternalDeleteManyShopifyShopResultSelection;
    bulkCreateShopifyShops?: AvailableInternalBulkCreateShopifyShopsResultSelection;
    upsertShopifyShop?: AvailableInternalUpsertShopifyShopResultSelection;
    triggerUpdateShopifyShop?: AvailableUpdateShopifyShopResultSelection;
    triggerInstallShopifyShop?: AvailableInstallShopifyShopResultSelection;
    triggerReinstallShopifyShop?: AvailableReinstallShopifyShopResultSelection;
    triggerUninstallShopifyShop?: AvailableUninstallShopifyShopResultSelection;
    createShopifyGdprRequest?: AvailableInternalCreateShopifyGdprRequestResultSelection;
    updateShopifyGdprRequest?: AvailableInternalUpdateShopifyGdprRequestResultSelection;
    deleteShopifyGdprRequest?: AvailableInternalDeleteShopifyGdprRequestResultSelection;
    deleteManyShopifyGdprRequest?: AvailableInternalDeleteManyShopifyGdprRequestResultSelection;
    bulkCreateShopifyGdprRequests?: AvailableInternalBulkCreateShopifyGdprRequestsResultSelection;
    upsertShopifyGdprRequest?: AvailableInternalUpsertShopifyGdprRequestResultSelection;
    triggerCreateShopifyGdprRequest?: AvailableCreateShopifyGdprRequestResultSelection;
    triggerUpdateShopifyGdprRequest?: AvailableUpdateShopifyGdprRequestResultSelection;
    createShopifyOrder?: AvailableInternalCreateShopifyOrderResultSelection;
    updateShopifyOrder?: AvailableInternalUpdateShopifyOrderResultSelection;
    deleteShopifyOrder?: AvailableInternalDeleteShopifyOrderResultSelection;
    deleteManyShopifyOrder?: AvailableInternalDeleteManyShopifyOrderResultSelection;
    bulkCreateShopifyOrders?: AvailableInternalBulkCreateShopifyOrdersResultSelection;
    upsertShopifyOrder?: AvailableInternalUpsertShopifyOrderResultSelection;
    triggerCreateShopifyOrder?: AvailableCreateShopifyOrderResultSelection;
    triggerUpdateShopifyOrder?: AvailableUpdateShopifyOrderResultSelection;
    triggerDeleteShopifyOrder?: AvailableDeleteShopifyOrderResultSelection;
    createShopifyProduct?: AvailableInternalCreateShopifyProductResultSelection;
    updateShopifyProduct?: AvailableInternalUpdateShopifyProductResultSelection;
    deleteShopifyProduct?: AvailableInternalDeleteShopifyProductResultSelection;
    deleteManyShopifyProduct?: AvailableInternalDeleteManyShopifyProductResultSelection;
    bulkCreateShopifyProducts?: AvailableInternalBulkCreateShopifyProductsResultSelection;
    upsertShopifyProduct?: AvailableInternalUpsertShopifyProductResultSelection;
    triggerCreateShopifyProduct?: AvailableCreateShopifyProductResultSelection;
    triggerUpdateShopifyProduct?: AvailableUpdateShopifyProductResultSelection;
    triggerDeleteShopifyProduct?: AvailableDeleteShopifyProductResultSelection;
    createShopifySync?: AvailableInternalCreateShopifySyncResultSelection;
    updateShopifySync?: AvailableInternalUpdateShopifySyncResultSelection;
    deleteShopifySync?: AvailableInternalDeleteShopifySyncResultSelection;
    deleteManyShopifySync?: AvailableInternalDeleteManyShopifySyncResultSelection;
    bulkCreateShopifySyncs?: AvailableInternalBulkCreateShopifySyncsResultSelection;
    upsertShopifySync?: AvailableInternalUpsertShopifySyncResultSelection;
    triggerAbortShopifySync?: AvailableAbortShopifySyncResultSelection;
    triggerCompleteShopifySync?: AvailableCompleteShopifySyncResultSelection;
    triggerErrorShopifySync?: AvailableErrorShopifySyncResultSelection;
    triggerRunShopifySync?: AvailableRunShopifySyncResultSelection;
    createOrderTracking?: AvailableInternalCreateOrderTrackingResultSelection;
    updateOrderTracking?: AvailableInternalUpdateOrderTrackingResultSelection;
    deleteOrderTracking?: AvailableInternalDeleteOrderTrackingResultSelection;
    deleteManyOrderTracking?: AvailableInternalDeleteManyOrderTrackingResultSelection;
    bulkCreateOrderTrackings?: AvailableInternalBulkCreateOrderTrackingsResultSelection;
    upsertOrderTracking?: AvailableInternalUpsertOrderTrackingResultSelection;
    triggerCreateOrderTracking?: AvailableCreateOrderTrackingResultSelection;
    triggerUpdateOrderTracking?: AvailableUpdateOrderTrackingResultSelection;
    triggerDeleteOrderTracking?: AvailableDeleteOrderTrackingResultSelection;
    createProductCustomization?: AvailableInternalCreateProductCustomizationResultSelection;
    updateProductCustomization?: AvailableInternalUpdateProductCustomizationResultSelection;
    deleteProductCustomization?: AvailableInternalDeleteProductCustomizationResultSelection;
    deleteManyProductCustomization?: AvailableInternalDeleteManyProductCustomizationResultSelection;
    bulkCreateProductCustomizations?: AvailableInternalBulkCreateProductCustomizationsResultSelection;
    upsertProductCustomization?: AvailableInternalUpsertProductCustomizationResultSelection;
    triggerCreateProductCustomization?: AvailableCreateProductCustomizationResultSelection;
    triggerUpdateProductCustomization?: AvailableUpdateProductCustomizationResultSelection;
    triggerDeleteProductCustomization?: AvailableDeleteProductCustomizationResultSelection;
    createSession?: AvailableInternalCreateSessionResultSelection;
    updateSession?: AvailableInternalUpdateSessionResultSelection;
    deleteSession?: AvailableInternalDeleteSessionResultSelection;
    deleteManySession?: AvailableInternalDeleteManySessionResultSelection;
    bulkCreateSessions?: AvailableInternalBulkCreateSessionsResultSelection;
    upsertSession?: AvailableInternalUpsertSessionResultSelection;
    cancelBackgroundAction?: AvailableCancelBackgroundActionResultSelection;
    bulkCancelBackgroundActions?: AvailableBulkCancelBackgroundActionResultSelection;
};
export type LockOperationResult = {
    __typename: 'LockOperationResult';
    /** Whether the lock operation succeeded */
    success: Scalars['Boolean'];
    /** Any errors encountered during the locking/unlocking operation */
    errors: ExecutionError[];
};
export type AvailableLockOperationResultSelection = {
    __typename?: boolean | null | undefined;
    /** Whether the lock operation succeeded */
    success?: boolean | null | undefined;
    /** Any errors encountered during the locking/unlocking operation */
    errors?: AvailableExecutionErrorSelection;
};
export type InternalCreateShopifyShopResult = {
    __typename: 'InternalCreateShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyShop: (InternalShopifyShopRecord | null);
};
export type AvailableInternalCreateShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyShop?: boolean | null | undefined;
};
export type InternalUpdateShopifyShopResult = {
    __typename: 'InternalUpdateShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyShop: (InternalShopifyShopRecord | null);
};
export type AvailableInternalUpdateShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyShop?: boolean | null | undefined;
};
export type InternalDeleteShopifyShopResult = {
    __typename: 'InternalDeleteShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyShop: (InternalShopifyShopRecord | null);
};
export type AvailableInternalDeleteShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyShop?: boolean | null | undefined;
};
export type InternalDeleteManyShopifyShopResult = {
    __typename: 'InternalDeleteManyShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateShopifyShopsResult = {
    __typename: 'InternalBulkCreateShopifyShopsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyShops: (InternalShopifyShopRecord | null)[];
};
export type AvailableInternalBulkCreateShopifyShopsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyShops?: boolean | null | undefined;
};
export type InternalUpsertShopifyShopResult = {
    __typename: 'InternalUpsertShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyShop: (InternalShopifyShopRecord | null);
};
export type AvailableInternalUpsertShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyShop?: boolean | null | undefined;
};
export interface UpdateShopifyShopResult extends UpsertShopifyShopResult {
    __typename: 'UpdateShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    shopifyShop: (ShopifyShop | null);
}
export type AvailableUpdateShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    shopifyShop?: AvailableShopifyShopSelection;
};
export interface InstallShopifyShopResult extends UpsertShopifyShopResult {
    __typename: 'InstallShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    shopifyShop: (ShopifyShop | null);
}
export type AvailableInstallShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    shopifyShop?: AvailableShopifyShopSelection;
};
export type ReinstallShopifyShopResult = {
    __typename: 'ReinstallShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    shopifyShop: (ShopifyShop | null);
};
export type AvailableReinstallShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    shopifyShop?: AvailableShopifyShopSelection;
};
export type UninstallShopifyShopResult = {
    __typename: 'UninstallShopifyShopResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    shopifyShop: (ShopifyShop | null);
};
export type AvailableUninstallShopifyShopResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    shopifyShop?: AvailableShopifyShopSelection;
};
export type InternalCreateShopifyGdprRequestResult = {
    __typename: 'InternalCreateShopifyGdprRequestResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};
export type AvailableInternalCreateShopifyGdprRequestResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyGdprRequest?: boolean | null | undefined;
};
export type InternalUpdateShopifyGdprRequestResult = {
    __typename: 'InternalUpdateShopifyGdprRequestResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};
export type AvailableInternalUpdateShopifyGdprRequestResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyGdprRequest?: boolean | null | undefined;
};
export type InternalDeleteShopifyGdprRequestResult = {
    __typename: 'InternalDeleteShopifyGdprRequestResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};
export type AvailableInternalDeleteShopifyGdprRequestResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyGdprRequest?: boolean | null | undefined;
};
export type InternalDeleteManyShopifyGdprRequestResult = {
    __typename: 'InternalDeleteManyShopifyGdprRequestResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyShopifyGdprRequestResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateShopifyGdprRequestsResult = {
    __typename: 'InternalBulkCreateShopifyGdprRequestsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyGdprRequests: (InternalShopifyGdprRequestRecord | null)[];
};
export type AvailableInternalBulkCreateShopifyGdprRequestsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyGdprRequests?: boolean | null | undefined;
};
export type InternalUpsertShopifyGdprRequestResult = {
    __typename: 'InternalUpsertShopifyGdprRequestResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};
export type AvailableInternalUpsertShopifyGdprRequestResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyGdprRequest?: boolean | null | undefined;
};
export interface CreateShopifyGdprRequestResult extends UpsertShopifyGdprRequestResult {
    __typename: 'CreateShopifyGdprRequestResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    shopifyGdprRequest: (ShopifyGdprRequest | null);
}
export type AvailableCreateShopifyGdprRequestResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
};
export interface UpdateShopifyGdprRequestResult extends UpsertShopifyGdprRequestResult {
    __typename: 'UpdateShopifyGdprRequestResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    shopifyGdprRequest: (ShopifyGdprRequest | null);
}
export type AvailableUpdateShopifyGdprRequestResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
};
export type InternalCreateShopifyOrderResult = {
    __typename: 'InternalCreateShopifyOrderResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyOrder: (InternalShopifyOrderRecord | null);
};
export type AvailableInternalCreateShopifyOrderResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyOrder?: boolean | null | undefined;
};
export type InternalUpdateShopifyOrderResult = {
    __typename: 'InternalUpdateShopifyOrderResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyOrder: (InternalShopifyOrderRecord | null);
};
export type AvailableInternalUpdateShopifyOrderResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyOrder?: boolean | null | undefined;
};
export type InternalDeleteShopifyOrderResult = {
    __typename: 'InternalDeleteShopifyOrderResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyOrder: (InternalShopifyOrderRecord | null);
};
export type AvailableInternalDeleteShopifyOrderResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyOrder?: boolean | null | undefined;
};
export type InternalDeleteManyShopifyOrderResult = {
    __typename: 'InternalDeleteManyShopifyOrderResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyShopifyOrderResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateShopifyOrdersResult = {
    __typename: 'InternalBulkCreateShopifyOrdersResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyOrders: (InternalShopifyOrderRecord | null)[];
};
export type AvailableInternalBulkCreateShopifyOrdersResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyOrders?: boolean | null | undefined;
};
export type InternalUpsertShopifyOrderResult = {
    __typename: 'InternalUpsertShopifyOrderResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyOrder: (InternalShopifyOrderRecord | null);
};
export type AvailableInternalUpsertShopifyOrderResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyOrder?: boolean | null | undefined;
};
export interface CreateShopifyOrderResult extends UpsertShopifyOrderResult {
    __typename: 'CreateShopifyOrderResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    shopifyOrder: (ShopifyOrder | null);
}
export type AvailableCreateShopifyOrderResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    shopifyOrder?: AvailableShopifyOrderSelection;
};
export interface UpdateShopifyOrderResult extends UpsertShopifyOrderResult {
    __typename: 'UpdateShopifyOrderResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    shopifyOrder: (ShopifyOrder | null);
}
export type AvailableUpdateShopifyOrderResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    shopifyOrder?: AvailableShopifyOrderSelection;
};
export type DeleteShopifyOrderResult = {
    __typename: 'DeleteShopifyOrderResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
};
export type AvailableDeleteShopifyOrderResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
};
export type InternalCreateShopifyProductResult = {
    __typename: 'InternalCreateShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyProduct: (InternalShopifyProductRecord | null);
};
export type AvailableInternalCreateShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyProduct?: boolean | null | undefined;
};
export type InternalUpdateShopifyProductResult = {
    __typename: 'InternalUpdateShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyProduct: (InternalShopifyProductRecord | null);
};
export type AvailableInternalUpdateShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyProduct?: boolean | null | undefined;
};
export type InternalDeleteShopifyProductResult = {
    __typename: 'InternalDeleteShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyProduct: (InternalShopifyProductRecord | null);
};
export type AvailableInternalDeleteShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyProduct?: boolean | null | undefined;
};
export type InternalDeleteManyShopifyProductResult = {
    __typename: 'InternalDeleteManyShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateShopifyProductsResult = {
    __typename: 'InternalBulkCreateShopifyProductsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifyProducts: (InternalShopifyProductRecord | null)[];
};
export type AvailableInternalBulkCreateShopifyProductsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifyProducts?: boolean | null | undefined;
};
export type InternalUpsertShopifyProductResult = {
    __typename: 'InternalUpsertShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifyProduct: (InternalShopifyProductRecord | null);
};
export type AvailableInternalUpsertShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifyProduct?: boolean | null | undefined;
};
export interface CreateShopifyProductResult extends UpsertShopifyProductResult {
    __typename: 'CreateShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    shopifyProduct: (ShopifyProduct | null);
}
export type AvailableCreateShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    shopifyProduct?: AvailableShopifyProductSelection;
};
export interface UpdateShopifyProductResult extends UpsertShopifyProductResult {
    __typename: 'UpdateShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
    shopifyProduct: (ShopifyProduct | null);
}
export type AvailableUpdateShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
    shopifyProduct?: AvailableShopifyProductSelection;
};
export type DeleteShopifyProductResult = {
    __typename: 'DeleteShopifyProductResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    actionRun: (Scalars['String'] | null);
};
export type AvailableDeleteShopifyProductResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    actionRun?: boolean | null | undefined;
};
export type InternalCreateShopifySyncResult = {
    __typename: 'InternalCreateShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifySync: (InternalShopifySyncRecord | null);
};
export type AvailableInternalCreateShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifySync?: boolean | null | undefined;
};
export type InternalUpdateShopifySyncResult = {
    __typename: 'InternalUpdateShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifySync: (InternalShopifySyncRecord | null);
};
export type AvailableInternalUpdateShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifySync?: boolean | null | undefined;
};
export type InternalDeleteShopifySyncResult = {
    __typename: 'InternalDeleteShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifySync: (InternalShopifySyncRecord | null);
};
export type AvailableInternalDeleteShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifySync?: boolean | null | undefined;
};
export type InternalDeleteManyShopifySyncResult = {
    __typename: 'InternalDeleteManyShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateShopifySyncsResult = {
    __typename: 'InternalBulkCreateShopifySyncsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    shopifySyncs: (InternalShopifySyncRecord | null)[];
};
export type AvailableInternalBulkCreateShopifySyncsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    shopifySyncs?: boolean | null | undefined;
};
export type InternalUpsertShopifySyncResult = {
    __typename: 'InternalUpsertShopifySyncResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    shopifySync: (InternalShopifySyncRecord | null);
};
export type AvailableInternalUpsertShopifySyncResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    shopifySync?: boolean | null | undefined;
};
export type InternalCreateOrderTrackingResult = {
    __typename: 'InternalCreateOrderTrackingResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    orderTracking: (InternalOrderTrackingRecord | null);
};
export type AvailableInternalCreateOrderTrackingResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    orderTracking?: boolean | null | undefined;
};
export type InternalUpdateOrderTrackingResult = {
    __typename: 'InternalUpdateOrderTrackingResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    orderTracking: (InternalOrderTrackingRecord | null);
};
export type AvailableInternalUpdateOrderTrackingResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    orderTracking?: boolean | null | undefined;
};
export type InternalDeleteOrderTrackingResult = {
    __typename: 'InternalDeleteOrderTrackingResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    orderTracking: (InternalOrderTrackingRecord | null);
};
export type AvailableInternalDeleteOrderTrackingResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    orderTracking?: boolean | null | undefined;
};
export type InternalDeleteManyOrderTrackingResult = {
    __typename: 'InternalDeleteManyOrderTrackingResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyOrderTrackingResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateOrderTrackingsResult = {
    __typename: 'InternalBulkCreateOrderTrackingsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    orderTrackings: (InternalOrderTrackingRecord | null)[];
};
export type AvailableInternalBulkCreateOrderTrackingsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    orderTrackings?: boolean | null | undefined;
};
export type InternalUpsertOrderTrackingResult = {
    __typename: 'InternalUpsertOrderTrackingResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    orderTracking: (InternalOrderTrackingRecord | null);
};
export type AvailableInternalUpsertOrderTrackingResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    orderTracking?: boolean | null | undefined;
};
export type InternalCreateProductCustomizationResult = {
    __typename: 'InternalCreateProductCustomizationResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    productCustomization: (InternalProductCustomizationRecord | null);
};
export type AvailableInternalCreateProductCustomizationResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    productCustomization?: boolean | null | undefined;
};
export type InternalUpdateProductCustomizationResult = {
    __typename: 'InternalUpdateProductCustomizationResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    productCustomization: (InternalProductCustomizationRecord | null);
};
export type AvailableInternalUpdateProductCustomizationResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    productCustomization?: boolean | null | undefined;
};
export type InternalDeleteProductCustomizationResult = {
    __typename: 'InternalDeleteProductCustomizationResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    productCustomization: (InternalProductCustomizationRecord | null);
};
export type AvailableInternalDeleteProductCustomizationResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    productCustomization?: boolean | null | undefined;
};
export type InternalDeleteManyProductCustomizationResult = {
    __typename: 'InternalDeleteManyProductCustomizationResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyProductCustomizationResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateProductCustomizationsResult = {
    __typename: 'InternalBulkCreateProductCustomizationsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    productCustomizations: (InternalProductCustomizationRecord | null)[];
};
export type AvailableInternalBulkCreateProductCustomizationsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    productCustomizations?: boolean | null | undefined;
};
export type InternalUpsertProductCustomizationResult = {
    __typename: 'InternalUpsertProductCustomizationResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    productCustomization: (InternalProductCustomizationRecord | null);
};
export type AvailableInternalUpsertProductCustomizationResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    productCustomization?: boolean | null | undefined;
};
export type InternalCreateSessionResult = {
    __typename: 'InternalCreateSessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    session: (InternalSessionRecord | null);
};
export type AvailableInternalCreateSessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    session?: boolean | null | undefined;
};
export type InternalUpdateSessionResult = {
    __typename: 'InternalUpdateSessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    session: (InternalSessionRecord | null);
};
export type AvailableInternalUpdateSessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    session?: boolean | null | undefined;
};
export type InternalDeleteSessionResult = {
    __typename: 'InternalDeleteSessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    session: (InternalSessionRecord | null);
};
export type AvailableInternalDeleteSessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    session?: boolean | null | undefined;
};
export type InternalDeleteManySessionResult = {
    __typename: 'InternalDeleteManySessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManySessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateSessionsResult = {
    __typename: 'InternalBulkCreateSessionsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    sessions: (InternalSessionRecord | null)[];
};
export type AvailableInternalBulkCreateSessionsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    sessions?: boolean | null | undefined;
};
export type InternalUpsertSessionResult = {
    __typename: 'InternalUpsertSessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    /** Whether the record was created by this upsert operation */
    created: Scalars['Boolean'];
    session: (InternalSessionRecord | null);
};
export type AvailableInternalUpsertSessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    /** Whether the record was created by this upsert operation */
    created?: boolean | null | undefined;
    session?: boolean | null | undefined;
};
/** The value returned from cancelling a background action */
export type CancelBackgroundActionResult = {
    __typename: 'CancelBackgroundActionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    backgroundAction: (BackgroundActionHandle | null);
};
export type AvailableCancelBackgroundActionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    backgroundAction?: AvailableBackgroundActionHandleSelection;
};
/** The value returned from cancelling a background action */
export type BulkCancelBackgroundActionResult = {
    __typename: 'BulkCancelBackgroundActionResult';
    successCount: Scalars['Int'];
    failedCount: Scalars['Int'];
};
export type AvailableBulkCancelBackgroundActionResultSelection = {
    __typename?: boolean | null | undefined;
    successCount?: boolean | null | undefined;
    failedCount?: boolean | null | undefined;
};
export type Subscription = {
    __typename: 'Subscription';
    /** Subscribe to events about the application for the development harness */
    gadgetMetaHarnessEvents: GadgetApplicationHarnessEvent;
    backgroundAction: (BackgroundAction | null);
};
export type AvailableSubscriptionSelection = {
    __typename?: boolean | null | undefined;
    /** Subscribe to events about the application for the development harness */
    gadgetMetaHarnessEvents?: AvailableGadgetApplicationHarnessEventSelection;
    backgroundAction?: AvailableBackgroundActionSelection;
};
export type GadgetApplicationHarnessEvent = {
    __typename: 'GadgetApplicationHarnessEvent';
    id: Scalars['String'];
    event: Scalars['JSON'];
};
export type AvailableGadgetApplicationHarnessEventSelection = {
    __typename?: boolean | null | undefined;
    id?: boolean | null | undefined;
    event?: boolean | null | undefined;
};
export type BackgroundAction = {
    __typename: 'BackgroundAction';
    /** The ID of the background action */
    id: Scalars['String'];
    outcome: (BackgroundActionOutcome | null);
    result: (BackgroundActionResult | null);
};
export type AvailableBackgroundActionSelection = {
    __typename?: boolean | null | undefined;
    /** The ID of the background action */
    id?: boolean | null | undefined;
    outcome?: boolean | null | undefined;
    result?: AvailableBackgroundActionResultSelection;
};
export type ExplicitNestingRequired = never;
export type DeepFilterNever<T> = T extends Record<string, unknown> ? FilterNever<{
    [Key in keyof T]: T[Key] extends Record<string, unknown> ? DeepFilterNever<T[Key]> : T[Key];
}> : T;
/**
 * Given a schema we can select values from, apply a given selection to that schema to get the output type.
 **/
export type Select<Schema, Selection extends FieldSelection | null | undefined> = Selection extends null | undefined ? never : Schema extends (infer T)[] ? Select<T, Selection>[] : Schema extends null ? Select<Exclude<Schema, null>, Selection> | null : {
    [Key in keyof Selection & keyof Schema]: Selection[Key] extends true ? Schema[Key] : Selection[Key] extends FieldSelection ? Select<Schema[Key], Selection[Key]> : never;
};
export type IDsList = {
    ids: string[];
};
/**
 * For finder functions which accept the `live: true` argument, this type decides if the return type will be one value or an async iterable stream of values
 * If {live: true}, returns an AsyncIterable<Result>
 * Anything else, returns a Promise<Result>
 **/
export type PromiseOrLiveIterator<Options extends {
    live?: boolean;
}, Result> = Options extends {
    live: true;
} ? AsyncIterable<Result> : Promise<Result>;
export type { ComputedViewWithoutVariables, ComputedViewWithVariables, ComputedViewFunctionWithoutVariables, ComputedViewFunctionWithVariables };
