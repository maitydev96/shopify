import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  FieldSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,

  IDsList,
  PromiseOrLiveIterator,
  OrderTracking,
  AvailableOrderTrackingSelection,
  OrderTrackingSort,
  OrderTrackingFilter,
  CreateOrderTrackingInput,
  UpdateOrderTrackingInput,
  Scalars,
  UpsertOrderTrackingInput
} from "../types.js";

import { buildModelManager } from "../builder.js";
import { AvailableSelection, AllFieldsSelected, DefaultSelection, Select, DeepFilterNever } from "../utils.js";

/**
* A type that holds only the selected fields (and nested fields) of orderTracking. The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedOrderTrackingOrDefault<Options extends Selectable<AvailableOrderTrackingSelection>> = DeepFilterNever<
    Select<
      OrderTracking,
      DefaultSelection<
        AvailableOrderTrackingSelection,
        Options,
        typeof DefaultOrderTrackingSelection
      >
    >
  >;

/**
 * A type that represents a `GadgetRecord` type for orderTracking.
 * It selects all fields of the model by default. If you want to represent a record type with a subset of fields, you could pass in an object in the `Selection` type parameter.
 *
 * @example
 * ```ts
 * const someFunction = (record: OrderTrackingRecord, recordWithName: OrderTrackingRecord<{ select: { name: true; } }>) => {
 *   // The type of the `record` variable will include all fields of the model.
 *   const name = record.name;
 *   const otherField = record.otherField;
 *
 *   // The type of the `recordWithName` variable will only include the selected fields.
 *   const name = recordWithName.name;
 *   const otherField = recordWithName.otherField; // Type error: Property 'otherField' does not exist on type 'GadgetRecord<{ name: true; }>'.
 * }
 * ```
 */
export type OrderTrackingRecord<Selection extends AvailableOrderTrackingSelection | undefined = typeof DefaultOrderTrackingSelection> = DeepFilterNever<
  GadgetRecord<
    SelectedOrderTrackingOrDefault<{
      select: Selection;
    }>
  >
>;

export const DefaultOrderTrackingSelection = {
     __typename: true,
     id: true,
     createdAt: true,
     deliveryStatus: true,
     orderId: true,
     shippingCarrier: true,
     shopId: true,
     trackingNumber: true,
     updatedAt: true
   } as const;
const modelApiIdentifier = "orderTracking" as const;
const pluralModelApiIdentifier = "orderTrackings" as const;
/** Options that can be passed to the `OrderTrackingManager#findOne` method */
 export interface FindOneOrderTrackingOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableOrderTrackingSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `OrderTrackingManager#maybeFindOne` method */
 export interface MaybeFindOneOrderTrackingOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableOrderTrackingSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `OrderTrackingManager#findMany` method */
 export interface FindManyOrderTrackingsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableOrderTrackingSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: OrderTrackingSort | OrderTrackingSort[] | null;
  /** Only return records matching these filters. */
  filter?: OrderTrackingFilter | OrderTrackingFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};
/** Options that can be passed to the `OrderTrackingManager#findFirst` method */
 export interface FindFirstOrderTrackingOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableOrderTrackingSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: OrderTrackingSort | OrderTrackingSort[] | null;
  /** Only return records matching these filters. */
  filter?: OrderTrackingFilter | OrderTrackingFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};
/** Options that can be passed to the `OrderTrackingManager#maybeFindFirst` method */
 export interface MaybeFindFirstOrderTrackingOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableOrderTrackingSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: OrderTrackingSort | OrderTrackingSort[] | null;
  /** Only return records matching these filters. */
  filter?: OrderTrackingFilter | OrderTrackingFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};
export interface CreateOrderTrackingOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableOrderTrackingSelection;
};
export interface UpdateOrderTrackingOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableOrderTrackingSelection;
};
export interface DeleteOrderTrackingOptions {

};
export interface UpsertOrderTrackingOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableOrderTrackingSelection;
};
/**
 * The fully-qualified, expanded form of the inputs for executing the create action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateOrderTrackingVariables = {
  orderTracking?: CreateOrderTrackingInput;
}
/**
 * The inputs for executing create on orderTracking.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateOrderTrackingVariables = CreateOrderTrackingInput;
/**
 * The return value from executing create on orderTracking
 * Is a GadgetRecord of the model's type.
 **/
export type CreateOrderTrackingResult<Options extends CreateOrderTrackingOptions> = SelectedOrderTrackingOrDefault<Options> extends void ?
      void :
      GadgetRecord<SelectedOrderTrackingOrDefault<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing the update action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateOrderTrackingVariables = {
  orderTracking?: UpdateOrderTrackingInput;
}
/**
 * The inputs for executing update on orderTracking.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateOrderTrackingVariables = UpdateOrderTrackingInput;
/**
 * The return value from executing update on orderTracking
 * Is a GadgetRecord of the model's type.
 **/
export type UpdateOrderTrackingResult<Options extends UpdateOrderTrackingOptions> = SelectedOrderTrackingOrDefault<Options> extends void ?
      void :
      GadgetRecord<SelectedOrderTrackingOrDefault<Options>>;
/**
 * The return value from executing delete on orderTracking
 * Is void because this action deletes the record
 **/
export type DeleteOrderTrackingResult<Options extends DeleteOrderTrackingOptions> = void;
/**
 * The fully-qualified, expanded form of the inputs for executing the upsert action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpsertOrderTrackingVariables = {
  on?: ((Scalars['String'] | null))[];
  orderTracking?: UpsertOrderTrackingInput;
}
/**
 * The inputs for executing upsert on orderTracking.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpsertOrderTrackingVariables = Omit<
     UpsertOrderTrackingInput,
     "on"
   > & {
     on?: ((Scalars['String'] | null))[];
   };
/**
 * The return value from executing upsert on orderTracking
 *
 **/
export type UpsertOrderTrackingResult<Options extends UpsertOrderTrackingOptions> = SelectedOrderTrackingOrDefault<Options> extends void ?
      void :
      GadgetRecord<SelectedOrderTrackingOrDefault<Options>>;

/**
 * A manager for the orderTracking model with all the available operations for reading and writing to it.*/
export type OrderTrackingManager = {
  readonly connection: GadgetConnection;

  findOne: {
      /**
       * Finds one orderTracking by ID. Returns a `Promise` that resolves to the record if found and rejects the promise if the record isn't found.
       **/
      <Options extends FindOneOrderTrackingOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneOrderTrackingOptions>): PromiseOrLiveIterator<Options,OrderTrackingRecord<Options["select"]>>;
      type: 'findOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultOrderTrackingSelection;
      namespace: null;
      optionsType: FindOneOrderTrackingOptions;
      selectionType: AvailableOrderTrackingSelection;
      schemaType: Query["orderTracking"];
    }
  maybeFindOne: {
      /**
       * Finds one orderTracking by ID. Returns a `Promise` that resolves to the record if found and returns null otherwise.
       **/
      <Options extends MaybeFindOneOrderTrackingOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneOrderTrackingOptions>): PromiseOrLiveIterator<Options,OrderTrackingRecord<Options["select"]> | null>;
      type: 'maybeFindOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: MaybeFindOneOrderTrackingOptions;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultOrderTrackingSelection;
      namespace: null;
      selectionType: AvailableOrderTrackingSelection;
      schemaType: Query["orderTracking"];
    }
  findMany: {
      /**
       * Finds many orderTracking. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindManyOrderTrackingsOptions>(options?: LimitToKnownKeys<Options, FindManyOrderTrackingsOptions>): PromiseOrLiveIterator<Options,GadgetRecordList<OrderTrackingRecord<Options["select"]>>>;
      type: 'findMany';
      operationName: typeof pluralModelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: FindManyOrderTrackingsOptions;
      defaultSelection: typeof DefaultOrderTrackingSelection;
      namespace: null;
      selectionType: AvailableOrderTrackingSelection;
      schemaType: Query["orderTracking"];
    }
  findFirst: {
      /**
       * Finds the first matching orderTracking. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindFirstOrderTrackingOptions>(options?: LimitToKnownKeys<Options, FindFirstOrderTrackingOptions>): PromiseOrLiveIterator<Options,OrderTrackingRecord<Options["select"]>>;
      type: 'findFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: FindFirstOrderTrackingOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultOrderTrackingSelection;
      namespace: null;
      selectionType: AvailableOrderTrackingSelection;
      schemaType: Query["orderTracking"];
    }
  maybeFindFirst: {
      /**
       * Finds the first matching orderTracking. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
       **/
      <Options extends MaybeFindFirstOrderTrackingOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstOrderTrackingOptions>): PromiseOrLiveIterator<Options,OrderTrackingRecord<Options["select"]> | null>;
      type: 'maybeFindFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: MaybeFindFirstOrderTrackingOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultOrderTrackingSelection;
      namespace: null;
      selectionType: AvailableOrderTrackingSelection;
      schemaType: Query["orderTracking"];
    }
  findById: {
      /**
      * Finds one orderTracking by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
      **/
      <Options extends FindOneOrderTrackingOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneOrderTrackingOptions>): PromiseOrLiveIterator<Options,OrderTrackingRecord<Options["select"]>>;
      type: 'findOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'id';
      findByVariableName: 'id';
      optionsType: FindOneOrderTrackingOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultOrderTrackingSelection;
      namespace: null;
      selectionType: AvailableOrderTrackingSelection;
      schemaType: Query["orderTracking"];
    }
  maybeFindById: {
      /**
      * Finds one orderTracking by its id. Returns a Promise that resolves to the record if found and returns null if the record isn't found.
      **/
      <Options extends FindOneOrderTrackingOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneOrderTrackingOptions>): Promise<OrderTrackingRecord<Options["select"]> | null>;
      type: 'maybeFindOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'id';
      findByVariableName: 'id';
      optionsType: FindOneOrderTrackingOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultOrderTrackingSelection;
      namespace: null;
      selectionType: AvailableOrderTrackingSelection;
      schemaType: Query["orderTracking"];
    }
  create: {
      /**
       * Executes the create action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
      *
      * This is the flat style, all-params-together overload that most use cases should use.
      *
      * @example
      * * const orderTrackingRecord = await api.orderTracking.create({
        *   deliveryStatus: "pending",
        *   order: {
        *     _link: "1",
        *   },
        *   shippingCarrier: "example value for shippingCarrier",
        *   shop: {
        *     _link: "1",
        *   },
        *   trackingNumber: "example value for trackingNumber",
        * });
      **/
      <Options extends CreateOrderTrackingOptions>(
      
        variables: CreateOrderTrackingVariables,
        options?: LimitToKnownKeys<Options, CreateOrderTrackingOptions>
      ): Promise<CreateOrderTrackingResult<Options>>;
      /**
       * Executes the create action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
      *
      * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
      *
      * @example
      * * const orderTrackingRecord = await api.orderTracking.create({
        *   orderTracking: {
        *     deliveryStatus: "pending",
        *     order: {
        *       _link: "1",
        *     },
        *     shippingCarrier: "example value for shippingCarrier",
        *     shop: {
        *       _link: "1",
        *     },
        *     trackingNumber: "example value for trackingNumber",
        *   },
        * });
      **/
      <Options extends CreateOrderTrackingOptions>(
      
        variables: FullyQualifiedCreateOrderTrackingVariables,
        options?: LimitToKnownKeys<Options, CreateOrderTrackingOptions>
      ): Promise<CreateOrderTrackingResult<Options>>;
      type: 'action';
      operationName: 'createOrderTracking';
      operationReturnType: 'CreateOrderTracking';
      namespace: null;
      modelApiIdentifier: typeof modelApiIdentifier;
      operatesWithRecordIdentity: false;
      modelSelectionField: typeof modelApiIdentifier;
      isBulk: false;
      isDeleter: false;
      variables: {
          orderTracking: { required: false, type: 'CreateOrderTrackingInput' }
        };
      variablesType: ((
               
               & (FullyQualifiedCreateOrderTrackingVariables | CreateOrderTrackingVariables)
             ) | undefined);
      hasAmbiguousIdentifier: false;
      paramOnlyVariables: [];
      hasReturnType: false;
      acceptsModelInput: true;
      hasCreateOrUpdateEffect: true;
      imports: [ 'CreateOrderTrackingInput' ];
      optionsType: CreateOrderTrackingOptions;
      selectionType: AvailableOrderTrackingSelection;
      schemaType: Query["orderTracking"];
      defaultSelection: typeof DefaultOrderTrackingSelection;
    }
  bulkCreate: {
      /**
        * Executes the bulkCreate action with the given inputs.
        */
       <Options extends CreateOrderTrackingOptions>(
          inputs: (FullyQualifiedCreateOrderTrackingVariables | CreateOrderTrackingVariables)[],
          options?: LimitToKnownKeys<Options, CreateOrderTrackingOptions>
       ): Promise<CreateOrderTrackingResult<Options>[]>
      type: 'action';
      operationName: 'bulkCreateOrderTrackings';
      isBulk: true;
      isDeleter: false;
      hasReturnType: false;
      acceptsModelInput: true;
      operatesWithRecordIdentity: false;
      singleActionFunctionName: 'create';
      modelApiIdentifier: typeof modelApiIdentifier;
      modelSelectionField: typeof pluralModelApiIdentifier;
      optionsType: CreateOrderTrackingOptions;
      namespace: null;
      variables: {
          inputs: { required: true, type: '[BulkCreateOrderTrackingsInput!]' }
        };
      variablesType: (FullyQualifiedCreateOrderTrackingVariables | CreateOrderTrackingVariables)[];
      paramOnlyVariables: [];
      selectionType: AvailableOrderTrackingSelection;
      schemaType: Query["orderTracking"];
      defaultSelection: typeof DefaultOrderTrackingSelection;
    }
  update: {
      /**
       * Executes the update actionon one record specified by `id`.Runs the action and returns a Promise for the updated record.
      *
      * This is the flat style, all-params-together overload that most use cases should use.
      *
      * @example
      * * const orderTrackingRecord = await api.orderTracking.update("1", {
        *   deliveryStatus: "pending",
        *   order: {
        *     _link: "1",
        *   },
        *   shippingCarrier: "example value for shippingCarrier",
        *   shop: {
        *     _link: "1",
        *   },
        *   trackingNumber: "example value for trackingNumber",
        * });
      **/
      <Options extends UpdateOrderTrackingOptions>(
        id: string,
        variables: UpdateOrderTrackingVariables,
        options?: LimitToKnownKeys<Options, UpdateOrderTrackingOptions>
      ): Promise<UpdateOrderTrackingResult<Options>>;
      /**
       * Executes the update actionon one record specified by `id`.Runs the action and returns a Promise for the updated record.
      *
      * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
      *
      * @example
      * * const orderTrackingRecord = await api.orderTracking.update("1", {
        *   orderTracking: {
        *     deliveryStatus: "pending",
        *     order: {
        *       _link: "1",
        *     },
        *     shippingCarrier: "example value for shippingCarrier",
        *     shop: {
        *       _link: "1",
        *     },
        *     trackingNumber: "example value for trackingNumber",
        *   },
        * });
      **/
      <Options extends UpdateOrderTrackingOptions>(
        id: string,
        variables: FullyQualifiedUpdateOrderTrackingVariables,
        options?: LimitToKnownKeys<Options, UpdateOrderTrackingOptions>
      ): Promise<UpdateOrderTrackingResult<Options>>;
      type: 'action';
      operationName: 'updateOrderTracking';
      operationReturnType: 'UpdateOrderTracking';
      namespace: null;
      modelApiIdentifier: typeof modelApiIdentifier;
      operatesWithRecordIdentity: true;
      modelSelectionField: typeof modelApiIdentifier;
      isBulk: false;
      isDeleter: false;
      variables: {
          id: { required: true, type: 'GadgetID' },
          orderTracking: { required: false, type: 'UpdateOrderTrackingInput' }
        };
      variablesType: (
              { id: string }
              & (FullyQualifiedUpdateOrderTrackingVariables | UpdateOrderTrackingVariables)
            );
      hasAmbiguousIdentifier: false;
      paramOnlyVariables: [];
      hasReturnType: false;
      acceptsModelInput: true;
      hasCreateOrUpdateEffect: true;
      imports: [ 'UpdateOrderTrackingInput' ];
      optionsType: UpdateOrderTrackingOptions;
      selectionType: AvailableOrderTrackingSelection;
      schemaType: Query["orderTracking"];
      defaultSelection: typeof DefaultOrderTrackingSelection;
    }
  bulkUpdate: {
      /**
        * Executes the bulkUpdate action with the given inputs.
        */
       <Options extends UpdateOrderTrackingOptions>(
          inputs: (FullyQualifiedUpdateOrderTrackingVariables | UpdateOrderTrackingVariables & { id: string })[],
          options?: LimitToKnownKeys<Options, UpdateOrderTrackingOptions>
       ): Promise<UpdateOrderTrackingResult<Options>[]>
      type: 'action';
      operationName: 'bulkUpdateOrderTrackings';
      isBulk: true;
      isDeleter: false;
      hasReturnType: false;
      acceptsModelInput: true;
      operatesWithRecordIdentity: true;
      singleActionFunctionName: 'update';
      modelApiIdentifier: typeof modelApiIdentifier;
      modelSelectionField: typeof pluralModelApiIdentifier;
      optionsType: UpdateOrderTrackingOptions;
      namespace: null;
      variables: {
          inputs: { required: true, type: '[BulkUpdateOrderTrackingsInput!]' }
        };
      variablesType: (FullyQualifiedUpdateOrderTrackingVariables | UpdateOrderTrackingVariables & { id: string })[];
      paramOnlyVariables: [];
      selectionType: AvailableOrderTrackingSelection;
      schemaType: Query["orderTracking"];
      defaultSelection: typeof DefaultOrderTrackingSelection;
    }
  delete: {
      /**
       * Executes the delete actionon one record specified by `id`.Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
      *
      * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
      *
      * @example
      * * await api.orderTracking.delete("1");
      **/
      <Options extends DeleteOrderTrackingOptions>(
        id: string,
      
        options?: LimitToKnownKeys<Options, DeleteOrderTrackingOptions>
      ): Promise<DeleteOrderTrackingResult<Options>>;
      type: 'action';
      operationName: 'deleteOrderTracking';
      operationReturnType: 'DeleteOrderTracking';
      namespace: null;
      modelApiIdentifier: typeof modelApiIdentifier;
      operatesWithRecordIdentity: true;
      modelSelectionField: typeof modelApiIdentifier;
      isBulk: false;
      isDeleter: true;
      variables: { id: { required: true, type: 'GadgetID' } };
      variablesType: (
              { id: string }
              
            );
      hasAmbiguousIdentifier: false;
      paramOnlyVariables: [];
      hasReturnType: false;
      acceptsModelInput: false;
      hasCreateOrUpdateEffect: false;
      imports: [];
      optionsType: DeleteOrderTrackingOptions;
      selectionType: Record<string, never>;
      schemaType: null;
      defaultSelection: null;
    }
  bulkDelete: {
      /**
        * Executes the bulkDelete action with the given inputs.Deletes the records on the server.
        */
       <Options extends DeleteOrderTrackingOptions>(
          ids: string[],
          options?: LimitToKnownKeys<Options, DeleteOrderTrackingOptions>
       ): Promise<DeleteOrderTrackingResult<Options>[]>
      type: 'action';
      operationName: 'bulkDeleteOrderTrackings';
      isBulk: true;
      isDeleter: true;
      hasReturnType: false;
      acceptsModelInput: false;
      operatesWithRecordIdentity: true;
      singleActionFunctionName: 'delete';
      modelApiIdentifier: typeof modelApiIdentifier;
      modelSelectionField: typeof pluralModelApiIdentifier;
      optionsType: DeleteOrderTrackingOptions;
      namespace: null;
      variables: { ids: { required: true, type: '[GadgetID!]' } };
      variablesType: IDsList | undefined;
      paramOnlyVariables: [];
      selectionType: Record<string, never>;
      schemaType: null;
      defaultSelection: null;
    }
  upsert: {
      /**
       * Executes the upsert action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
      *
      * This is the flat style, all-params-together overload that most use cases should use.
      *
      * @example
      * * const result = await api.orderTracking.upsert({
        *   deliveryStatus: "pending",
        *   id: "1",
        *   order: {
        *     _link: "1",
        *   },
        *   shippingCarrier: "example value for shippingCarrier",
        *   trackingNumber: "example value for trackingNumber",
        * });
      **/
      <Options extends UpsertOrderTrackingOptions>(
      
        variables: UpsertOrderTrackingVariables,
        options?: LimitToKnownKeys<Options, UpsertOrderTrackingOptions>
      ): Promise<UpsertOrderTrackingResult<Options>>;
      /**
       * Executes the upsert action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
      *
      * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
      *
      * @example
      * * const result = await api.orderTracking.upsert({
        *   orderTracking: {
        *     deliveryStatus: "pending",
        *     id: "1",
        *     order: {
        *       _link: "1",
        *     },
        *     shippingCarrier: "example value for shippingCarrier",
        *     trackingNumber: "example value for trackingNumber",
        *   },
        * });
      **/
      <Options extends UpsertOrderTrackingOptions>(
      
        variables: FullyQualifiedUpsertOrderTrackingVariables,
        options?: LimitToKnownKeys<Options, UpsertOrderTrackingOptions>
      ): Promise<UpsertOrderTrackingResult<Options>>;
      type: 'action';
      operationName: 'upsertOrderTracking';
      operationReturnType: 'UpsertOrderTracking';
      namespace: null;
      modelApiIdentifier: typeof modelApiIdentifier;
      operatesWithRecordIdentity: false;
      modelSelectionField: typeof modelApiIdentifier;
      isBulk: false;
      isDeleter: false;
      variables: {
          on: { required: false, type: '[String!]' },
          orderTracking: { required: false, type: 'UpsertOrderTrackingInput' }
        };
      variablesType: ((
               
               & (FullyQualifiedUpsertOrderTrackingVariables | UpsertOrderTrackingVariables)
             ) | undefined);
      hasAmbiguousIdentifier: false;
      paramOnlyVariables: [ 'on' ];
      hasReturnType: {
          '... on CreateOrderTrackingResult': { hasReturnType: false },
          '... on UpdateOrderTrackingResult': { hasReturnType: false }
        };
      acceptsModelInput: true;
      hasCreateOrUpdateEffect: true;
      imports: [ 'Scalars', 'UpsertOrderTrackingInput' ];
      optionsType: UpsertOrderTrackingOptions;
      selectionType: AvailableOrderTrackingSelection;
      schemaType: Query["orderTracking"];
      defaultSelection: typeof DefaultOrderTrackingSelection;
    }
  bulkUpsert: {
      /**
        * Executes the bulkUpsert action with the given inputs.
        */
       <Options extends UpsertOrderTrackingOptions>(
          inputs: (FullyQualifiedUpsertOrderTrackingVariables | UpsertOrderTrackingVariables)[],
          options?: LimitToKnownKeys<Options, UpsertOrderTrackingOptions>
       ): Promise<any[]>
      type: 'action';
      operationName: 'bulkUpsertOrderTrackings';
      isBulk: true;
      isDeleter: false;
      hasReturnType: false;
      acceptsModelInput: true;
      operatesWithRecordIdentity: false;
      singleActionFunctionName: 'upsert';
      modelApiIdentifier: typeof modelApiIdentifier;
      modelSelectionField: typeof pluralModelApiIdentifier;
      optionsType: UpsertOrderTrackingOptions;
      namespace: null;
      variables: {
          inputs: { required: true, type: '[BulkUpsertOrderTrackingsInput!]' }
        };
      variablesType: (FullyQualifiedUpsertOrderTrackingVariables | UpsertOrderTrackingVariables)[];
      paramOnlyVariables: [ 'on' ];
      selectionType: AvailableOrderTrackingSelection;
      schemaType: Query["orderTracking"];
      defaultSelection: typeof DefaultOrderTrackingSelection;
    }
  view: {
      (query: string, variables?: Record<string, unknown>): Promise<unknown>
      type: 'computedView';
      operationName: 'view';
      gqlFieldName: 'orderTrackingGellyView';
      namespace: null;
      imports: [];
      variables: {
          query: { type: 'String', required: true },
          args: { type: 'JSONObject' }
        };
      variablesType: Record<string, unknown>;
      resultType: Promise<unknown>;
      plan: never;
    }
};

/**
 * A manager for the orderTracking model with all the available operations for reading and writing to it.*/
export const OrderTrackingManager = buildModelManager(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultOrderTrackingSelection,
  [
    {
      type: 'findOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultOrderTrackingSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultOrderTrackingSelection,
      namespace: null
    },
    {
      type: 'findMany',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultOrderTrackingSelection,
      namespace: null
    },
    {
      type: 'findFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultOrderTrackingSelection,
      namespace: null
    },
    {
      type: 'maybeFindFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultOrderTrackingSelection,
      namespace: null
    },
    {
      type: 'findOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'findById',
      findByField: 'id',
      findByVariableName: 'id',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultOrderTrackingSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'maybeFindById',
      findByField: 'id',
      findByVariableName: 'id',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultOrderTrackingSelection,
      namespace: null
    },
    {
      type: 'action',
      operationName: 'createOrderTracking',
      operationReturnType: 'CreateOrderTracking',
      functionName: 'create',
      namespace: null,
      modelApiIdentifier: modelApiIdentifier,
      operatesWithRecordIdentity: false,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        orderTracking: { required: false, type: 'CreateOrderTrackingInput' }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultOrderTrackingSelection
    },
    {
      type: 'action',
      operationName: 'bulkCreateOrderTrackings',
      functionName: 'bulkCreate',
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: false,
      singleActionFunctionName: 'create',
      modelApiIdentifier: modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: { required: true, type: '[BulkCreateOrderTrackingsInput!]' }
      },
      paramOnlyVariables: [],
      defaultSelection: DefaultOrderTrackingSelection
    },
    {
      type: 'action',
      operationName: 'updateOrderTracking',
      operationReturnType: 'UpdateOrderTracking',
      functionName: 'update',
      namespace: null,
      modelApiIdentifier: modelApiIdentifier,
      operatesWithRecordIdentity: true,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        id: { required: true, type: 'GadgetID' },
        orderTracking: { required: false, type: 'UpdateOrderTrackingInput' }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultOrderTrackingSelection
    },
    {
      type: 'action',
      operationName: 'bulkUpdateOrderTrackings',
      functionName: 'bulkUpdate',
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: true,
      singleActionFunctionName: 'update',
      modelApiIdentifier: modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: { required: true, type: '[BulkUpdateOrderTrackingsInput!]' }
      },
      paramOnlyVariables: [],
      defaultSelection: DefaultOrderTrackingSelection
    },
    {
      type: 'action',
      operationName: 'deleteOrderTracking',
      operationReturnType: 'DeleteOrderTracking',
      functionName: 'delete',
      namespace: null,
      modelApiIdentifier: modelApiIdentifier,
      operatesWithRecordIdentity: true,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: true,
      variables: { id: { required: true, type: 'GadgetID' } },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: false,
      hasCreateOrUpdateEffect: false,
      defaultSelection: null
    },
    {
      type: 'action',
      operationName: 'bulkDeleteOrderTrackings',
      functionName: 'bulkDelete',
      isBulk: true,
      isDeleter: true,
      hasReturnType: false,
      acceptsModelInput: false,
      operatesWithRecordIdentity: true,
      singleActionFunctionName: 'delete',
      modelApiIdentifier: modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: { ids: { required: true, type: '[GadgetID!]' } },
      paramOnlyVariables: [],
      defaultSelection: null
    },
    {
      type: 'action',
      operationName: 'upsertOrderTracking',
      operationReturnType: 'UpsertOrderTracking',
      functionName: 'upsert',
      namespace: null,
      modelApiIdentifier: modelApiIdentifier,
      operatesWithRecordIdentity: false,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        on: { required: false, type: '[String!]' },
        orderTracking: { required: false, type: 'UpsertOrderTrackingInput' }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [ 'on' ],
      hasReturnType: {
        '... on CreateOrderTrackingResult': { hasReturnType: false },
        '... on UpdateOrderTrackingResult': { hasReturnType: false }
      },
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultOrderTrackingSelection
    },
    {
      type: 'action',
      operationName: 'bulkUpsertOrderTrackings',
      functionName: 'bulkUpsert',
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: false,
      singleActionFunctionName: 'upsert',
      modelApiIdentifier: modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: { required: true, type: '[BulkUpsertOrderTrackingsInput!]' }
      },
      paramOnlyVariables: [ 'on' ],
      defaultSelection: DefaultOrderTrackingSelection
    },
    {
      type: 'computedView',
      operationName: 'view',
      functionName: 'view',
      gqlFieldName: 'orderTrackingGellyView',
      namespace: null,
      variables: {
        query: { type: 'String', required: true },
        args: { type: 'JSONObject' }
      }
    }
  ] as const
) as unknown as {
  // Gadget generates these model manager classes at runtime dynamically, which means there is no source code for the class. This is done to make the bundle size of the client as small as possible, avoiding a bunch of repeated source code in favour of one small builder function. The TypeScript types above document the exact interface of the constructed class.
  new(connection: GadgetConnection): OrderTrackingManager;
};