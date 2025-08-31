// All the generated types for the "shopifyOrder" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger, TriggerWithType } from "../types";
import type { Scalars } from "@gadget-client/shopifyapp-dw5d";
import { GadgetRecord, ShopifyOrder } from "@gadget-client/shopifyapp-dw5d";
import { Select } from "@gadgetinc/api-client-core";
import { ShopifyWebhookTriggerForTopic } from "../WebhookPayloadTypes";

export type DefaultShopifyOrderServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly billingAddress: true;
      readonly browserIp: true;
      readonly buyerAcceptsMarketing: true;
      readonly cancelReason: true;
      readonly cancelledAt: true;
      readonly cartToken: true;
      readonly checkoutToken: true;
      readonly clientDetails: true;
      readonly closedAt: true;
      readonly currency: true;
      readonly currentSubtotalPrice: true;
      readonly currentSubtotalPriceSet: true;
      readonly currentTotalDiscounts: true;
      readonly currentTotalDiscountsSet: true;
      readonly currentTotalDutiesSet: true;
      readonly currentTotalPrice: true;
      readonly currentTotalPriceSet: true;
      readonly currentTotalTax: true;
      readonly currentTotalTaxSet: true;
      readonly customerLocale: true;
      readonly discountApplications: true;
      readonly discountCodes: true;
      readonly email: true;
      readonly estimatedTaxes: true;
      readonly financialStatus: true;
      readonly fulfillmentStatus: true;
      readonly landingSite: true;
      readonly name: true;
      readonly note: true;
      readonly noteAttributes: true;
      readonly orderStatusUrl: true;
      readonly originalTotalDutiesSet: true;
      readonly paymentGatewayNames: true;
      readonly phone: true;
      readonly presentmentCurrency: true;
      readonly processedAt: true;
      readonly processingMethod: true;
      readonly referringSite: true;
      readonly shippingAddress: true;
      readonly shopifyCreatedAt: true;
      readonly sourceName: true;
      readonly subtotalPrice: true;
      readonly subtotalPriceSet: true;
      readonly tags: true;
      readonly shopifyUpdatedAt: true;
      readonly taxLines: true;
      readonly taxesIncluded: true;
      readonly test: true;
      readonly token: true;
      readonly totalDiscounts: true;
      readonly totalDiscountsSet: true;
      readonly totalLineItemsPrice: true;
      readonly totalLineItemsPriceSet: true;
      readonly totalOutstanding: true;
      readonly totalPrice: true;
      readonly totalPriceSet: true;
      readonly totalShippingPriceSet: true;
      readonly totalTax: true;
      readonly totalTaxSet: true;
      readonly totalTipReceived: true;
      readonly totalWeight: true;
      readonly additionalFees: true;
      readonly currentTotalAdditionalFeesSet: true;
      readonly merchantOfRecordAppId: true;
      readonly originalTotalAdditionalFeesSet: true;
      readonly sourceIdentifier: true;
      readonly sourceUrl: true;
      readonly taxExempt: true;
      readonly fulfillmentsCount: true;
      readonly cancellation: true;
      readonly risk: true;
      readonly shopifyProtect: true;
      readonly totalCashRoundingAdjustment: true;
      readonly transactionsCount: true;
      readonly billingStatusMatchesShippingAddress: true;
      readonly poNumber: true;
      readonly alerts: true;
      readonly canMarkAsPaid: true;
      readonly canNotifyCustomer: true;
      readonly capturable: true;
      readonly cartDiscountAmountSet: true;
      readonly closed: true;
      readonly confirmationNumber: true;
      readonly confirmed: true;
      readonly currentCartDiscountAmountSet: true;
      readonly currentSubtotalLineItemsQuantity: true;
      readonly currentTotalWeight: true;
      readonly currentShippingPriceSet: true;
      readonly dutiesIncluded: true;
      readonly edited: true;
      readonly fulfillable: true;
      readonly fullyPaid: true;
      readonly hasTimelineComment: true;
      readonly legacyResourceId: true;
      readonly merchantEditable: true;
      readonly merchantEditableErrors: true;
      readonly netPaymentSet: true;
      readonly originalTotalPriceSet: true;
      readonly refundDiscrepencySet: true;
      readonly refundable: true;
      readonly requiresShipping: true;
      readonly restockable: true;
      readonly returnStatus: true;
      readonly totalCapturableSet: true;
      readonly totalOutstandingSet: true;
      readonly totalReceivedSet: true;
      readonly totalRefundedSet: true;
      readonly totalRefundedShippingSet: true;
      readonly totalTipReceivedSet: true;
      readonly unpaid: true;
      readonly customerJourneySummary: true;
      readonly shopId: true;
    readonly shop: false;
      readonly tracking: false;
  };

  
/** Context of the `create` action on the `shopifyOrder` model. */
export interface CreateShopifyOrderActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyOrder` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrder, DefaultShopifyOrderServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: never;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {
shopifyOrder?: { id?: string;billingAddress?: Scalars["JSON"];browserIp?: string;buyerAcceptsMarketing?: boolean;cancelReason?: string;cancelledAt?: Date;cartToken?: string;checkoutToken?: string;clientDetails?: Scalars["JSON"];closedAt?: Date;currency?: string;currentSubtotalPrice?: string;currentSubtotalPriceSet?: Scalars["JSON"];currentTotalDiscounts?: string;currentTotalDiscountsSet?: Scalars["JSON"];currentTotalDutiesSet?: Scalars["JSON"];currentTotalPrice?: string;currentTotalPriceSet?: Scalars["JSON"];currentTotalTax?: string;currentTotalTaxSet?: Scalars["JSON"];customerLocale?: string;discountApplications?: Scalars["JSON"];discountCodes?: Scalars["JSON"];email?: string;estimatedTaxes?: boolean;financialStatus?: string;fulfillmentStatus?: string;landingSite?: string;name?: string;note?: string;noteAttributes?: Scalars["JSON"];orderStatusUrl?: string;originalTotalDutiesSet?: Scalars["JSON"];paymentGatewayNames?: Scalars["JSON"];phone?: string;presentmentCurrency?: string;processedAt?: Date;processingMethod?: string;referringSite?: string;shippingAddress?: Scalars["JSON"];shopifyCreatedAt?: Date;sourceName?: string;subtotalPrice?: string;subtotalPriceSet?: Scalars["JSON"];tags?: Scalars["JSON"];shopifyUpdatedAt?: Date;taxLines?: Scalars["JSON"];taxesIncluded?: boolean;test?: boolean;token?: string;totalDiscounts?: string;totalDiscountsSet?: Scalars["JSON"];totalLineItemsPrice?: string;totalLineItemsPriceSet?: Scalars["JSON"];totalOutstanding?: string;totalPrice?: string;totalPriceSet?: Scalars["JSON"];totalShippingPriceSet?: Scalars["JSON"];totalTax?: string;totalTaxSet?: Scalars["JSON"];totalTipReceived?: string;totalWeight?: number;additionalFees?: Scalars["JSON"];currentTotalAdditionalFeesSet?: Scalars["JSON"];merchantOfRecordAppId?: number;originalTotalAdditionalFeesSet?: Scalars["JSON"];sourceIdentifier?: string;sourceUrl?: string;taxExempt?: boolean;fulfillmentsCount?: Scalars["JSON"];cancellation?: Scalars["JSON"];risk?: Scalars["JSON"];shopifyProtect?: Scalars["JSON"];totalCashRoundingAdjustment?: Scalars["JSON"];transactionsCount?: Scalars["JSON"];billingStatusMatchesShippingAddress?: boolean;poNumber?: string;alerts?: Scalars["JSON"];canMarkAsPaid?: boolean;canNotifyCustomer?: boolean;capturable?: boolean;cartDiscountAmountSet?: Scalars["JSON"];closed?: boolean;confirmationNumber?: string;confirmed?: boolean;currentCartDiscountAmountSet?: Scalars["JSON"];currentSubtotalLineItemsQuantity?: number;currentTotalWeight?: string;currentShippingPriceSet?: Scalars["JSON"];dutiesIncluded?: boolean;edited?: boolean;fulfillable?: boolean;fullyPaid?: boolean;hasTimelineComment?: boolean;legacyResourceId?: string;merchantEditable?: boolean;merchantEditableErrors?: Scalars["JSON"];netPaymentSet?: Scalars["JSON"];originalTotalPriceSet?: Scalars["JSON"];refundDiscrepencySet?: Scalars["JSON"];refundable?: boolean;requiresShipping?: boolean;restockable?: boolean;returnStatus?: string;totalCapturableSet?: Scalars["JSON"];totalOutstandingSet?: Scalars["JSON"];totalReceivedSet?: Scalars["JSON"];totalRefundedSet?: Scalars["JSON"];totalRefundedShippingSet?: Scalars["JSON"];totalTipReceivedSet?: Scalars["JSON"];unpaid?: boolean;customerJourneySummary?: Scalars["JSON"];shop?: { _link: string | null }; };
};
  /**
  * @private The context of this action.
  */
  context: CreateShopifyOrderActionContext;
};


    
/** Context of the `update` action on the `shopifyOrder` model. */
export interface UpdateShopifyOrderActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyOrder` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrder, DefaultShopifyOrderServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: never;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {
shopifyOrder?: { id?: string;billingAddress?: Scalars["JSON"];browserIp?: string;buyerAcceptsMarketing?: boolean;cancelReason?: string;cancelledAt?: Date;cartToken?: string;checkoutToken?: string;clientDetails?: Scalars["JSON"];closedAt?: Date;currency?: string;currentSubtotalPrice?: string;currentSubtotalPriceSet?: Scalars["JSON"];currentTotalDiscounts?: string;currentTotalDiscountsSet?: Scalars["JSON"];currentTotalDutiesSet?: Scalars["JSON"];currentTotalPrice?: string;currentTotalPriceSet?: Scalars["JSON"];currentTotalTax?: string;currentTotalTaxSet?: Scalars["JSON"];customerLocale?: string;discountApplications?: Scalars["JSON"];discountCodes?: Scalars["JSON"];email?: string;estimatedTaxes?: boolean;financialStatus?: string;fulfillmentStatus?: string;landingSite?: string;name?: string;note?: string;noteAttributes?: Scalars["JSON"];orderStatusUrl?: string;originalTotalDutiesSet?: Scalars["JSON"];paymentGatewayNames?: Scalars["JSON"];phone?: string;presentmentCurrency?: string;processedAt?: Date;processingMethod?: string;referringSite?: string;shippingAddress?: Scalars["JSON"];shopifyCreatedAt?: Date;sourceName?: string;subtotalPrice?: string;subtotalPriceSet?: Scalars["JSON"];tags?: Scalars["JSON"];shopifyUpdatedAt?: Date;taxLines?: Scalars["JSON"];taxesIncluded?: boolean;test?: boolean;token?: string;totalDiscounts?: string;totalDiscountsSet?: Scalars["JSON"];totalLineItemsPrice?: string;totalLineItemsPriceSet?: Scalars["JSON"];totalOutstanding?: string;totalPrice?: string;totalPriceSet?: Scalars["JSON"];totalShippingPriceSet?: Scalars["JSON"];totalTax?: string;totalTaxSet?: Scalars["JSON"];totalTipReceived?: string;totalWeight?: number;additionalFees?: Scalars["JSON"];currentTotalAdditionalFeesSet?: Scalars["JSON"];merchantOfRecordAppId?: number;originalTotalAdditionalFeesSet?: Scalars["JSON"];sourceIdentifier?: string;sourceUrl?: string;taxExempt?: boolean;fulfillmentsCount?: Scalars["JSON"];cancellation?: Scalars["JSON"];risk?: Scalars["JSON"];shopifyProtect?: Scalars["JSON"];totalCashRoundingAdjustment?: Scalars["JSON"];transactionsCount?: Scalars["JSON"];billingStatusMatchesShippingAddress?: boolean;poNumber?: string;alerts?: Scalars["JSON"];canMarkAsPaid?: boolean;canNotifyCustomer?: boolean;capturable?: boolean;cartDiscountAmountSet?: Scalars["JSON"];closed?: boolean;confirmationNumber?: string;confirmed?: boolean;currentCartDiscountAmountSet?: Scalars["JSON"];currentSubtotalLineItemsQuantity?: number;currentTotalWeight?: string;currentShippingPriceSet?: Scalars["JSON"];dutiesIncluded?: boolean;edited?: boolean;fulfillable?: boolean;fullyPaid?: boolean;hasTimelineComment?: boolean;legacyResourceId?: string;merchantEditable?: boolean;merchantEditableErrors?: Scalars["JSON"];netPaymentSet?: Scalars["JSON"];originalTotalPriceSet?: Scalars["JSON"];refundDiscrepencySet?: Scalars["JSON"];refundable?: boolean;requiresShipping?: boolean;restockable?: boolean;returnStatus?: string;totalCapturableSet?: Scalars["JSON"];totalOutstandingSet?: Scalars["JSON"];totalReceivedSet?: Scalars["JSON"];totalRefundedSet?: Scalars["JSON"];totalRefundedShippingSet?: Scalars["JSON"];totalTipReceivedSet?: Scalars["JSON"];unpaid?: boolean;customerJourneySummary?: Scalars["JSON"];shop?: { _link: string | null }; };    
id?: string;
};
  /**
  * @private The context of this action.
  */
  context: UpdateShopifyOrderActionContext;
};


    
/** Context of the `delete` action on the `shopifyOrder` model. */
export interface DeleteShopifyOrderActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyOrder` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyOrder, DefaultShopifyOrderServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: never;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {
id?: string;
};
  /**
  * @private The context of this action.
  */
  context: DeleteShopifyOrderActionContext;
};


  