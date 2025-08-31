
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, TriggerWithType } from "../types";
import type { Scalars } from "@gadget-client/shopifyapp-dw5d";
import { GadgetRecord, ShopifySync } from "@gadget-client/shopifyapp-dw5d";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultShopifySyncServerSelection = {
	readonly __typename: true
	readonly id: true
	readonly createdAt: true
	readonly updatedAt: true
	readonly state: true
	readonly shopId: true
	readonly shop: false
	readonly syncSince: true
	readonly domain: true
	readonly errorDetails: true
	readonly errorMessage: true
	readonly syncSinceBy: true
	readonly force: true
	readonly models: true
};
/** Context of the `abort` action on the `shopifySync` model. */
export interface AbortShopifySyncActionContext extends AmbientContext {
	/**
	* The model this action is operating on
	*/
	model: NotYetTyped;
	/**
	* An object specifying the `shopifySync` record this action is operating on.
	*/
	record: GadgetRecord<Select<ShopifySync, DefaultShopifySyncServerSelection>>;
	/**
	* @deprecated Use 'return' instead.
	*/
	scope: ActionExecutionScope;
	/**
	* An object specifying the trigger to this action (e.g. API call, webhook events etc.).
	*/
	trigger: TriggerWithType<"api"> | TriggerWithType<"background-action">;
	/**
	* An object containing the incoming data(this models fields) passed by triggers or user inputs.
	*/
	params: {
		shopifySync?: {
			shop?: {
				_link: string | null
			}
			syncSince?: Date
			domain?: string
			errorDetails?: string
			errorMessage?: string
			syncSinceBy?: string
			force?: boolean
			models?: Scalars["JSON"]
		}
		id?: string
	};
	/**
	* @private The context of this action.
	*/
	context: AbortShopifySyncActionContext;
}
/** Context of the `complete` action on the `shopifySync` model. */
export interface CompleteShopifySyncActionContext extends AmbientContext {
	/**
	* The model this action is operating on
	*/
	model: NotYetTyped;
	/**
	* An object specifying the `shopifySync` record this action is operating on.
	*/
	record: GadgetRecord<Select<ShopifySync, DefaultShopifySyncServerSelection>>;
	/**
	* @deprecated Use 'return' instead.
	*/
	scope: ActionExecutionScope;
	/**
	* An object specifying the trigger to this action (e.g. API call, webhook events etc.).
	*/
	trigger: TriggerWithType<"api"> | TriggerWithType<"background-action">;
	/**
	* An object containing the incoming data(this models fields) passed by triggers or user inputs.
	*/
	params: {
		shopifySync?: {
			shop?: {
				_link: string | null
			}
			syncSince?: Date
			domain?: string
			errorDetails?: string
			errorMessage?: string
			syncSinceBy?: string
			force?: boolean
			models?: Scalars["JSON"]
		}
		id?: string
	};
	/**
	* @private The context of this action.
	*/
	context: CompleteShopifySyncActionContext;
}
/** Context of the `error` action on the `shopifySync` model. */
export interface ErrorShopifySyncActionContext extends AmbientContext {
	/**
	* The model this action is operating on
	*/
	model: NotYetTyped;
	/**
	* An object specifying the `shopifySync` record this action is operating on.
	*/
	record: GadgetRecord<Select<ShopifySync, DefaultShopifySyncServerSelection>>;
	/**
	* @deprecated Use 'return' instead.
	*/
	scope: ActionExecutionScope;
	/**
	* An object specifying the trigger to this action (e.g. API call, webhook events etc.).
	*/
	trigger: TriggerWithType<"api"> | TriggerWithType<"background-action">;
	/**
	* An object containing the incoming data(this models fields) passed by triggers or user inputs.
	*/
	params: {
		shopifySync?: {
			shop?: {
				_link: string | null
			}
			syncSince?: Date
			domain?: string
			errorDetails?: string
			errorMessage?: string
			syncSinceBy?: string
			force?: boolean
			models?: Scalars["JSON"]
		}
		id?: string
	};
	/**
	* @private The context of this action.
	*/
	context: ErrorShopifySyncActionContext;
}
/** Context of the `run` action on the `shopifySync` model. */
export interface RunShopifySyncActionContext extends AmbientContext {
	/**
	* The model this action is operating on
	*/
	model: NotYetTyped;
	/**
	* An object specifying the `shopifySync` record this action is operating on.
	*/
	record: GadgetRecord<Select<ShopifySync, DefaultShopifySyncServerSelection>>;
	/**
	* @deprecated Use 'return' instead.
	*/
	scope: ActionExecutionScope;
	/**
	* An object specifying the trigger to this action (e.g. API call, webhook events etc.).
	*/
	trigger: TriggerWithType<"api"> | TriggerWithType<"background-action">;
	/**
	* An object containing the incoming data(this models fields) passed by triggers or user inputs.
	*/
	params: {
		shopifySync?: {
			shop?: {
				_link: string | null
			}
			syncSince?: Date
			domain?: string
			errorDetails?: string
			errorMessage?: string
			syncSinceBy?: string
			force?: boolean
			models?: Scalars["JSON"]
		}
		startReason?: string
	};
	/**
	* @private The context of this action.
	*/
	context: RunShopifySyncActionContext;
}
