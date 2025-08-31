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
  ShopifyGdprRequest,
  AvailableShopifyGdprRequestSelection,
  ShopifyGdprRequestSort,
  ShopifyGdprRequestFilter
} from "../types.js";

import { buildModelManager } from "../builder.js";
import { AvailableSelection, AllFieldsSelected, DefaultSelection, Select, DeepFilterNever } from "../utils.js";

/**
* A type that holds only the selected fields (and nested fields) of shopifyGdprRequest. The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyGdprRequestOrDefault<Options extends Selectable<AvailableShopifyGdprRequestSelection>> = DeepFilterNever<
    Select<
      ShopifyGdprRequest,
      DefaultSelection<
        AvailableShopifyGdprRequestSelection,
        Options,
        typeof DefaultShopifyGdprRequestSelection
      >
    >
  >;

/**
 * A type that represents a `GadgetRecord` type for shopifyGdprRequest.
 * It selects all fields of the model by default. If you want to represent a record type with a subset of fields, you could pass in an object in the `Selection` type parameter.
 *
 * @example
 * ```ts
 * const someFunction = (record: ShopifyGdprRequestRecord, recordWithName: ShopifyGdprRequestRecord<{ select: { name: true; } }>) => {
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
export type ShopifyGdprRequestRecord<Selection extends AvailableShopifyGdprRequestSelection | undefined = typeof DefaultShopifyGdprRequestSelection> = DeepFilterNever<
  GadgetRecord<
    SelectedShopifyGdprRequestOrDefault<{
      select: Selection;
    }>
  >
>;

export const DefaultShopifyGdprRequestSelection = {
     __typename: true,
     id: true,
     createdAt: true,
     payload: true,
     shopId: true,
     topic: true,
     updatedAt: true
   } as const;
const modelApiIdentifier = "shopifyGdprRequest" as const;
const pluralModelApiIdentifier = "shopifyGdprRequests" as const;
/** Options that can be passed to the `ShopifyGdprRequestManager#findOne` method */
 export interface FindOneShopifyGdprRequestOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyGdprRequestSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `ShopifyGdprRequestManager#maybeFindOne` method */
 export interface MaybeFindOneShopifyGdprRequestOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyGdprRequestSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `ShopifyGdprRequestManager#findMany` method */
 export interface FindManyShopifyGdprRequestsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyGdprRequestSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: ShopifyGdprRequestSort | ShopifyGdprRequestSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyGdprRequestFilter | ShopifyGdprRequestFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};
/** Options that can be passed to the `ShopifyGdprRequestManager#findFirst` method */
 export interface FindFirstShopifyGdprRequestOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyGdprRequestSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: ShopifyGdprRequestSort | ShopifyGdprRequestSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyGdprRequestFilter | ShopifyGdprRequestFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};
/** Options that can be passed to the `ShopifyGdprRequestManager#maybeFindFirst` method */
 export interface MaybeFindFirstShopifyGdprRequestOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyGdprRequestSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: ShopifyGdprRequestSort | ShopifyGdprRequestSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyGdprRequestFilter | ShopifyGdprRequestFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};
export interface CreateShopifyGdprRequestOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyGdprRequestSelection;
};
export interface UpdateShopifyGdprRequestOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyGdprRequestSelection;
};

/**
 * A manager for the shopifyGdprRequest model with all the available operations for reading and writing to it.*/
export type ShopifyGdprRequestManager = {
  readonly connection: GadgetConnection;

  findOne: {
      /**
       * Finds one shopifyGdprRequest by ID. Returns a `Promise` that resolves to the record if found and rejects the promise if the record isn't found.
       **/
      <Options extends FindOneShopifyGdprRequestOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyGdprRequestOptions>): PromiseOrLiveIterator<Options,ShopifyGdprRequestRecord<Options["select"]>>;
      type: 'findOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultShopifyGdprRequestSelection;
      namespace: null;
      optionsType: FindOneShopifyGdprRequestOptions;
      selectionType: AvailableShopifyGdprRequestSelection;
      schemaType: Query["shopifyGdprRequest"];
    }
  maybeFindOne: {
      /**
       * Finds one shopifyGdprRequest by ID. Returns a `Promise` that resolves to the record if found and returns null otherwise.
       **/
      <Options extends MaybeFindOneShopifyGdprRequestOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyGdprRequestOptions>): PromiseOrLiveIterator<Options,ShopifyGdprRequestRecord<Options["select"]> | null>;
      type: 'maybeFindOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: MaybeFindOneShopifyGdprRequestOptions;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultShopifyGdprRequestSelection;
      namespace: null;
      selectionType: AvailableShopifyGdprRequestSelection;
      schemaType: Query["shopifyGdprRequest"];
    }
  findMany: {
      /**
       * Finds many shopifyGdprRequest. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindManyShopifyGdprRequestsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyGdprRequestsOptions>): PromiseOrLiveIterator<Options,GadgetRecordList<ShopifyGdprRequestRecord<Options["select"]>>>;
      type: 'findMany';
      operationName: typeof pluralModelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: FindManyShopifyGdprRequestsOptions;
      defaultSelection: typeof DefaultShopifyGdprRequestSelection;
      namespace: null;
      selectionType: AvailableShopifyGdprRequestSelection;
      schemaType: Query["shopifyGdprRequest"];
    }
  findFirst: {
      /**
       * Finds the first matching shopifyGdprRequest. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindFirstShopifyGdprRequestOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyGdprRequestOptions>): PromiseOrLiveIterator<Options,ShopifyGdprRequestRecord<Options["select"]>>;
      type: 'findFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: FindFirstShopifyGdprRequestOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultShopifyGdprRequestSelection;
      namespace: null;
      selectionType: AvailableShopifyGdprRequestSelection;
      schemaType: Query["shopifyGdprRequest"];
    }
  maybeFindFirst: {
      /**
       * Finds the first matching shopifyGdprRequest. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
       **/
      <Options extends MaybeFindFirstShopifyGdprRequestOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyGdprRequestOptions>): PromiseOrLiveIterator<Options,ShopifyGdprRequestRecord<Options["select"]> | null>;
      type: 'maybeFindFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: MaybeFindFirstShopifyGdprRequestOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultShopifyGdprRequestSelection;
      namespace: null;
      selectionType: AvailableShopifyGdprRequestSelection;
      schemaType: Query["shopifyGdprRequest"];
    }
  findById: {
      /**
      * Finds one shopifyGdprRequest by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
      **/
      <Options extends FindOneShopifyGdprRequestOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyGdprRequestOptions>): PromiseOrLiveIterator<Options,ShopifyGdprRequestRecord<Options["select"]>>;
      type: 'findOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'id';
      findByVariableName: 'id';
      optionsType: FindOneShopifyGdprRequestOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultShopifyGdprRequestSelection;
      namespace: null;
      selectionType: AvailableShopifyGdprRequestSelection;
      schemaType: Query["shopifyGdprRequest"];
    }
  maybeFindById: {
      /**
      * Finds one shopifyGdprRequest by its id. Returns a Promise that resolves to the record if found and returns null if the record isn't found.
      **/
      <Options extends FindOneShopifyGdprRequestOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyGdprRequestOptions>): Promise<ShopifyGdprRequestRecord<Options["select"]> | null>;
      type: 'maybeFindOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'id';
      findByVariableName: 'id';
      optionsType: FindOneShopifyGdprRequestOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultShopifyGdprRequestSelection;
      namespace: null;
      selectionType: AvailableShopifyGdprRequestSelection;
      schemaType: Query["shopifyGdprRequest"];
    }
  create: {
      /**
       * @deprecated The action create on model shopifyGdprRequest does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'createShopifyGdprRequest';
      errorMessage: string;
      optionsType: CreateShopifyGdprRequestOptions;
      actionApiIdentifier: 'create';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyGdprRequest.create';
    }
  bulkCreate: {
      /**
       * @deprecated The action create on model shopifyGdprRequest does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'bulkCreateShopifyGdprRequests';
      errorMessage: string;
      optionsType: CreateShopifyGdprRequestOptions;
      actionApiIdentifier: 'create';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyGdprRequest.bulkCreate';
    }
  update: {
      /**
       * @deprecated The action update on model shopifyGdprRequest does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'updateShopifyGdprRequest';
      errorMessage: string;
      optionsType: UpdateShopifyGdprRequestOptions;
      actionApiIdentifier: 'update';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyGdprRequest.update';
    }
  bulkUpdate: {
      /**
       * @deprecated The action update on model shopifyGdprRequest does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'bulkUpdateShopifyGdprRequests';
      errorMessage: string;
      optionsType: UpdateShopifyGdprRequestOptions;
      actionApiIdentifier: 'update';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyGdprRequest.bulkUpdate';
    }
  view: {
      (query: string, variables?: Record<string, unknown>): Promise<unknown>
      type: 'computedView';
      operationName: 'view';
      gqlFieldName: 'shopifyGdprRequestGellyView';
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
 * A manager for the shopifyGdprRequest model with all the available operations for reading and writing to it.*/
export const ShopifyGdprRequestManager = buildModelManager(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultShopifyGdprRequestSelection,
  [
    {
      type: 'findOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultShopifyGdprRequestSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultShopifyGdprRequestSelection,
      namespace: null
    },
    {
      type: 'findMany',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultShopifyGdprRequestSelection,
      namespace: null
    },
    {
      type: 'findFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultShopifyGdprRequestSelection,
      namespace: null
    },
    {
      type: 'maybeFindFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultShopifyGdprRequestSelection,
      namespace: null
    },
    {
      type: 'findOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'findById',
      findByField: 'id',
      findByVariableName: 'id',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultShopifyGdprRequestSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'maybeFindById',
      findByField: 'id',
      findByVariableName: 'id',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultShopifyGdprRequestSelection,
      namespace: null
    },
    {
      type: 'stubbedAction',
      operationName: 'createShopifyGdprRequest',
      functionName: 'create',
      errorMessage: 'The action create on model shopifyGdprRequest does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'create',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyGdprRequest.create'
    },
    {
      type: 'stubbedAction',
      operationName: 'bulkCreateShopifyGdprRequests',
      functionName: 'bulkCreate',
      errorMessage: 'The action create on model shopifyGdprRequest does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'create',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyGdprRequest.bulkCreate'
    },
    {
      type: 'stubbedAction',
      operationName: 'updateShopifyGdprRequest',
      functionName: 'update',
      errorMessage: 'The action update on model shopifyGdprRequest does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'update',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyGdprRequest.update'
    },
    {
      type: 'stubbedAction',
      operationName: 'bulkUpdateShopifyGdprRequests',
      functionName: 'bulkUpdate',
      errorMessage: 'The action update on model shopifyGdprRequest does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'update',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyGdprRequest.bulkUpdate'
    },
    {
      type: 'computedView',
      operationName: 'view',
      functionName: 'view',
      gqlFieldName: 'shopifyGdprRequestGellyView',
      namespace: null,
      variables: {
        query: { type: 'String', required: true },
        args: { type: 'JSONObject' }
      }
    }
  ] as const
) as unknown as {
  // Gadget generates these model manager classes at runtime dynamically, which means there is no source code for the class. This is done to make the bundle size of the client as small as possible, avoiding a bunch of repeated source code in favour of one small builder function. The TypeScript types above document the exact interface of the constructed class.
  new(connection: GadgetConnection): ShopifyGdprRequestManager;
};