
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, TriggerWithType } from "../types";
import { GadgetRecord, OrderTracking } from "@gadget-client/shopifyapp-dw5d";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultOrderTrackingServerSelection = {
	readonly __typename: true
	readonly id: true
	readonly createdAt: true
	readonly updatedAt: true
	readonly shippingCarrier: true
	readonly trackingNumber: true
	readonly deliveryStatus: true
	readonly orderId: true
	readonly order: false
	readonly shopId: true
	readonly shop: false
};
/** Context of the `create` action on the `orderTracking` model. */
export interface CreateOrderTrackingActionContext extends AmbientContext {
	/**
	* The model this action is operating on
	*/
	model: NotYetTyped;
	/**
	* An object specifying the `orderTracking` record this action is operating on.
	*/
	record: GadgetRecord<Select<OrderTracking, DefaultOrderTrackingServerSelection>>;
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
		orderTracking?: {
			shippingCarrier?: string
			trackingNumber?: string
			deliveryStatus?: string
			order?: {
				_link: string | null
			}
			shop?: {
				_link: string | null
			}
		}
	};
	/**
	* @private The context of this action.
	*/
	context: CreateOrderTrackingActionContext;
}
/** Context of the `update` action on the `orderTracking` model. */
export interface UpdateOrderTrackingActionContext extends AmbientContext {
	/**
	* The model this action is operating on
	*/
	model: NotYetTyped;
	/**
	* An object specifying the `orderTracking` record this action is operating on.
	*/
	record: GadgetRecord<Select<OrderTracking, DefaultOrderTrackingServerSelection>>;
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
		orderTracking?: {
			shippingCarrier?: string
			trackingNumber?: string
			deliveryStatus?: string
			order?: {
				_link: string | null
			}
			shop?: {
				_link: string | null
			}
		}
		id?: string
	};
	/**
	* @private The context of this action.
	*/
	context: UpdateOrderTrackingActionContext;
}
/** Context of the `delete` action on the `orderTracking` model. */
export interface DeleteOrderTrackingActionContext extends AmbientContext {
	/**
	* The model this action is operating on
	*/
	model: NotYetTyped;
	/**
	* An object specifying the `orderTracking` record this action is operating on.
	*/
	record: GadgetRecord<Select<OrderTracking, DefaultOrderTrackingServerSelection>>;
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
		id?: string
	};
	/**
	* @private The context of this action.
	*/
	context: DeleteOrderTrackingActionContext;
}
