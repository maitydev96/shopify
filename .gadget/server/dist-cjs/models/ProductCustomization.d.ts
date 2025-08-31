
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, TriggerWithType } from "../types";
import { GadgetRecord, ProductCustomization } from "@gadget-client/shopifyapp-dw5d";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultProductCustomizationServerSelection = {
	readonly __typename: true
	readonly id: true
	readonly createdAt: true
	readonly updatedAt: true
	readonly productId: true
	readonly product: false
	readonly productVariantId: true
	readonly customizationValue: true
	readonly customizationType: true
	readonly shopId: true
	readonly shop: false
};
/** Context of the `create` action on the `productCustomization` model. */
export interface CreateProductCustomizationActionContext extends AmbientContext {
	/**
	* The model this action is operating on
	*/
	model: NotYetTyped;
	/**
	* An object specifying the `productCustomization` record this action is operating on.
	*/
	record: GadgetRecord<Select<ProductCustomization, DefaultProductCustomizationServerSelection>>;
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
		productCustomization?: {
			product?: {
				_link: string | null
			}
			productVariantId?: number
			customizationValue?: string
			customizationType?: string
			shop?: {
				_link: string | null
			}
		}
	};
	/**
	* @private The context of this action.
	*/
	context: CreateProductCustomizationActionContext;
}
/** Context of the `update` action on the `productCustomization` model. */
export interface UpdateProductCustomizationActionContext extends AmbientContext {
	/**
	* The model this action is operating on
	*/
	model: NotYetTyped;
	/**
	* An object specifying the `productCustomization` record this action is operating on.
	*/
	record: GadgetRecord<Select<ProductCustomization, DefaultProductCustomizationServerSelection>>;
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
		productCustomization?: {
			product?: {
				_link: string | null
			}
			productVariantId?: number
			customizationValue?: string
			customizationType?: string
			shop?: {
				_link: string | null
			}
		}
		id?: string
	};
	/**
	* @private The context of this action.
	*/
	context: UpdateProductCustomizationActionContext;
}
/** Context of the `delete` action on the `productCustomization` model. */
export interface DeleteProductCustomizationActionContext extends AmbientContext {
	/**
	* The model this action is operating on
	*/
	model: NotYetTyped;
	/**
	* An object specifying the `productCustomization` record this action is operating on.
	*/
	record: GadgetRecord<Select<ProductCustomization, DefaultProductCustomizationServerSelection>>;
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
	context: DeleteProductCustomizationActionContext;
}
