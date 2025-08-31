// All the generated types for the "shopifyProduct" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger, TriggerWithType } from "../types";
import type { Scalars } from "@gadget-client/shopifyapp-dw5d";
import { GadgetRecord, ShopifyProduct } from "@gadget-client/shopifyapp-dw5d";
import { Select } from "@gadgetinc/api-client-core";
import { ShopifyWebhookTriggerForTopic } from "../WebhookPayloadTypes";

export type DefaultShopifyProductServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly body: true;
      readonly handle: true;
      readonly category: true;
      readonly hasVariantsThatRequiresComponents: true;
      readonly shopifyCreatedAt: true;
      readonly productType: true;
      readonly publishedAt: true;
      readonly title: true;
      readonly shopifyUpdatedAt: true;
      readonly vendor: true;
      readonly compareAtPriceRange: true;
      readonly productCategory: true;
      readonly status: true;
      readonly tags: true;
      readonly templateSuffix: true;
      readonly shopId: true;
    readonly shop: false;
      readonly customizations: false;
  };

  
/** Context of the `create` action on the `shopifyProduct` model. */
export interface CreateShopifyProductActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyProduct` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyProduct, DefaultShopifyProductServerSelection>>;
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
shopifyProduct?: { id?: string;body?: string;handle?: string;category?: Scalars["JSON"];hasVariantsThatRequiresComponents?: boolean;shopifyCreatedAt?: Date;productType?: string;publishedAt?: Date;title?: string;shopifyUpdatedAt?: Date;vendor?: string;compareAtPriceRange?: Scalars["JSON"];productCategory?: Scalars["JSON"];status?: string;tags?: Scalars["JSON"];templateSuffix?: string;shop?: { _link: string | null }; };
};
  /**
  * @private The context of this action.
  */
  context: CreateShopifyProductActionContext;
};


    
/** Context of the `update` action on the `shopifyProduct` model. */
export interface UpdateShopifyProductActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyProduct` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyProduct, DefaultShopifyProductServerSelection>>;
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
shopifyProduct?: { id?: string;body?: string;handle?: string;category?: Scalars["JSON"];hasVariantsThatRequiresComponents?: boolean;shopifyCreatedAt?: Date;productType?: string;publishedAt?: Date;title?: string;shopifyUpdatedAt?: Date;vendor?: string;compareAtPriceRange?: Scalars["JSON"];productCategory?: Scalars["JSON"];status?: string;tags?: Scalars["JSON"];templateSuffix?: string;shop?: { _link: string | null }; };    
id?: string;
};
  /**
  * @private The context of this action.
  */
  context: UpdateShopifyProductActionContext;
};


    
/** Context of the `delete` action on the `shopifyProduct` model. */
export interface DeleteShopifyProductActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyProduct` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyProduct, DefaultShopifyProductServerSelection>>;
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
  context: DeleteShopifyProductActionContext;
};


  