import { GadgetConnection, GadgetRecord, GadgetRecordList, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, IDsList, PromiseOrLiveIterator, ProductCustomization, AvailableProductCustomizationSelection, ProductCustomizationSort, ProductCustomizationFilter, CreateProductCustomizationInput, UpdateProductCustomizationInput, Scalars, UpsertProductCustomizationInput } from "../types.js";
import { DefaultSelection, Select, DeepFilterNever } from "../utils.js";
/**
* A type that holds only the selected fields (and nested fields) of productCustomization. The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedProductCustomizationOrDefault<Options extends Selectable<AvailableProductCustomizationSelection>> = DeepFilterNever<Select<ProductCustomization, DefaultSelection<AvailableProductCustomizationSelection, Options, typeof DefaultProductCustomizationSelection>>>;
/**
 * A type that represents a `GadgetRecord` type for productCustomization.
 * It selects all fields of the model by default. If you want to represent a record type with a subset of fields, you could pass in an object in the `Selection` type parameter.
 *
 * @example
 * ```ts
 * const someFunction = (record: ProductCustomizationRecord, recordWithName: ProductCustomizationRecord<{ select: { name: true; } }>) => {
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
export type ProductCustomizationRecord<Selection extends AvailableProductCustomizationSelection | undefined = typeof DefaultProductCustomizationSelection> = DeepFilterNever<GadgetRecord<SelectedProductCustomizationOrDefault<{
    select: Selection;
}>>>;
export declare const DefaultProductCustomizationSelection: {
    readonly __typename: true;
    readonly id: true;
    readonly createdAt: true;
    readonly customizationType: true;
    readonly customizationValue: true;
    readonly productId: true;
    readonly productVariantId: true;
    readonly shopId: true;
    readonly updatedAt: true;
};
declare const modelApiIdentifier: "productCustomization";
declare const pluralModelApiIdentifier: "productCustomizations";
/** Options that can be passed to the `ProductCustomizationManager#findOne` method */
export interface FindOneProductCustomizationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableProductCustomizationSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
}
/** Options that can be passed to the `ProductCustomizationManager#maybeFindOne` method */
export interface MaybeFindOneProductCustomizationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableProductCustomizationSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
}
/** Options that can be passed to the `ProductCustomizationManager#findMany` method */
export interface FindManyProductCustomizationsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableProductCustomizationSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
    /** Return records sorted by these sorts */
    sort?: ProductCustomizationSort | ProductCustomizationSort[] | null;
    /** Only return records matching these filters. */
    filter?: ProductCustomizationFilter | ProductCustomizationFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ProductCustomizationManager#findFirst` method */
export interface FindFirstProductCustomizationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableProductCustomizationSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
    /** Return records sorted by these sorts */
    sort?: ProductCustomizationSort | ProductCustomizationSort[] | null;
    /** Only return records matching these filters. */
    filter?: ProductCustomizationFilter | ProductCustomizationFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ProductCustomizationManager#maybeFindFirst` method */
export interface MaybeFindFirstProductCustomizationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableProductCustomizationSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
    /** Return records sorted by these sorts */
    sort?: ProductCustomizationSort | ProductCustomizationSort[] | null;
    /** Only return records matching these filters. */
    filter?: ProductCustomizationFilter | ProductCustomizationFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateProductCustomizationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableProductCustomizationSelection;
}
export interface UpdateProductCustomizationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableProductCustomizationSelection;
}
export interface DeleteProductCustomizationOptions {
}
export interface UpsertProductCustomizationOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableProductCustomizationSelection;
}
/**
 * The fully-qualified, expanded form of the inputs for executing the create action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateProductCustomizationVariables = {
    productCustomization?: CreateProductCustomizationInput;
};
/**
 * The inputs for executing create on productCustomization.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateProductCustomizationVariables = CreateProductCustomizationInput;
/**
 * The return value from executing create on productCustomization
 * Is a GadgetRecord of the model's type.
 **/
export type CreateProductCustomizationResult<Options extends CreateProductCustomizationOptions> = SelectedProductCustomizationOrDefault<Options> extends void ? void : GadgetRecord<SelectedProductCustomizationOrDefault<Options>>;
/**
 * The fully-qualified, expanded form of the inputs for executing the update action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpdateProductCustomizationVariables = {
    productCustomization?: UpdateProductCustomizationInput;
};
/**
 * The inputs for executing update on productCustomization.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpdateProductCustomizationVariables = UpdateProductCustomizationInput;
/**
 * The return value from executing update on productCustomization
 * Is a GadgetRecord of the model's type.
 **/
export type UpdateProductCustomizationResult<Options extends UpdateProductCustomizationOptions> = SelectedProductCustomizationOrDefault<Options> extends void ? void : GadgetRecord<SelectedProductCustomizationOrDefault<Options>>;
/**
 * The return value from executing delete on productCustomization
 * Is void because this action deletes the record
 **/
export type DeleteProductCustomizationResult<Options extends DeleteProductCustomizationOptions> = void;
/**
 * The fully-qualified, expanded form of the inputs for executing the upsert action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedUpsertProductCustomizationVariables = {
    on?: ((Scalars['String'] | null))[];
    productCustomization?: UpsertProductCustomizationInput;
};
/**
 * The inputs for executing upsert on productCustomization.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type UpsertProductCustomizationVariables = Omit<UpsertProductCustomizationInput, "on"> & {
    on?: ((Scalars['String'] | null))[];
};
/**
 * The return value from executing upsert on productCustomization
 *
 **/
export type UpsertProductCustomizationResult<Options extends UpsertProductCustomizationOptions> = SelectedProductCustomizationOrDefault<Options> extends void ? void : GadgetRecord<SelectedProductCustomizationOrDefault<Options>>;
/**
 * A manager for the productCustomization model with all the available operations for reading and writing to it.*/
export type ProductCustomizationManager = {
    readonly connection: GadgetConnection;
    findOne: {
        /**
         * Finds one productCustomization by ID. Returns a `Promise` that resolves to the record if found and rejects the promise if the record isn't found.
         **/
        <Options extends FindOneProductCustomizationOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneProductCustomizationOptions>): PromiseOrLiveIterator<Options, ProductCustomizationRecord<Options["select"]>>;
        type: 'findOne';
        operationName: typeof modelApiIdentifier;
        modelApiIdentifier: typeof modelApiIdentifier;
        findByVariableName: 'id';
        defaultSelection: typeof DefaultProductCustomizationSelection;
        namespace: null;
        optionsType: FindOneProductCustomizationOptions;
        selectionType: AvailableProductCustomizationSelection;
        schemaType: Query["productCustomization"];
    };
    maybeFindOne: {
        /**
         * Finds one productCustomization by ID. Returns a `Promise` that resolves to the record if found and returns null otherwise.
         **/
        <Options extends MaybeFindOneProductCustomizationOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneProductCustomizationOptions>): PromiseOrLiveIterator<Options, ProductCustomizationRecord<Options["select"]> | null>;
        type: 'maybeFindOne';
        operationName: typeof modelApiIdentifier;
        modelApiIdentifier: typeof modelApiIdentifier;
        optionsType: MaybeFindOneProductCustomizationOptions;
        findByVariableName: 'id';
        defaultSelection: typeof DefaultProductCustomizationSelection;
        namespace: null;
        selectionType: AvailableProductCustomizationSelection;
        schemaType: Query["productCustomization"];
    };
    findMany: {
        /**
         * Finds many productCustomization. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
         **/
        <Options extends FindManyProductCustomizationsOptions>(options?: LimitToKnownKeys<Options, FindManyProductCustomizationsOptions>): PromiseOrLiveIterator<Options, GadgetRecordList<ProductCustomizationRecord<Options["select"]>>>;
        type: 'findMany';
        operationName: typeof pluralModelApiIdentifier;
        modelApiIdentifier: typeof modelApiIdentifier;
        optionsType: FindManyProductCustomizationsOptions;
        defaultSelection: typeof DefaultProductCustomizationSelection;
        namespace: null;
        selectionType: AvailableProductCustomizationSelection;
        schemaType: Query["productCustomization"];
    };
    findFirst: {
        /**
         * Finds the first matching productCustomization. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
         **/
        <Options extends FindFirstProductCustomizationOptions>(options?: LimitToKnownKeys<Options, FindFirstProductCustomizationOptions>): PromiseOrLiveIterator<Options, ProductCustomizationRecord<Options["select"]>>;
        type: 'findFirst';
        operationName: typeof pluralModelApiIdentifier;
        optionsType: FindFirstProductCustomizationOptions;
        modelApiIdentifier: typeof modelApiIdentifier;
        defaultSelection: typeof DefaultProductCustomizationSelection;
        namespace: null;
        selectionType: AvailableProductCustomizationSelection;
        schemaType: Query["productCustomization"];
    };
    maybeFindFirst: {
        /**
         * Finds the first matching productCustomization. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
         **/
        <Options extends MaybeFindFirstProductCustomizationOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstProductCustomizationOptions>): PromiseOrLiveIterator<Options, ProductCustomizationRecord<Options["select"]> | null>;
        type: 'maybeFindFirst';
        operationName: typeof pluralModelApiIdentifier;
        optionsType: MaybeFindFirstProductCustomizationOptions;
        modelApiIdentifier: typeof modelApiIdentifier;
        defaultSelection: typeof DefaultProductCustomizationSelection;
        namespace: null;
        selectionType: AvailableProductCustomizationSelection;
        schemaType: Query["productCustomization"];
    };
    findById: {
        /**
        * Finds one productCustomization by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
        **/
        <Options extends FindOneProductCustomizationOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneProductCustomizationOptions>): PromiseOrLiveIterator<Options, ProductCustomizationRecord<Options["select"]>>;
        type: 'findOne';
        operationName: typeof pluralModelApiIdentifier;
        findByField: 'id';
        findByVariableName: 'id';
        optionsType: FindOneProductCustomizationOptions;
        modelApiIdentifier: typeof modelApiIdentifier;
        defaultSelection: typeof DefaultProductCustomizationSelection;
        namespace: null;
        selectionType: AvailableProductCustomizationSelection;
        schemaType: Query["productCustomization"];
    };
    maybeFindById: {
        /**
        * Finds one productCustomization by its id. Returns a Promise that resolves to the record if found and returns null if the record isn't found.
        **/
        <Options extends FindOneProductCustomizationOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneProductCustomizationOptions>): Promise<ProductCustomizationRecord<Options["select"]> | null>;
        type: 'maybeFindOne';
        operationName: typeof pluralModelApiIdentifier;
        findByField: 'id';
        findByVariableName: 'id';
        optionsType: FindOneProductCustomizationOptions;
        modelApiIdentifier: typeof modelApiIdentifier;
        defaultSelection: typeof DefaultProductCustomizationSelection;
        namespace: null;
        selectionType: AvailableProductCustomizationSelection;
        schemaType: Query["productCustomization"];
    };
    create: {
        /**
         * Executes the create action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
        *
        * This is the flat style, all-params-together overload that most use cases should use.
        *
        * @example
        * * const productCustomizationRecord = await api.productCustomization.create({
          *   customizationType: "example value for customizationType",
          *   customizationValue: "example value for customizationValue",
          *   product: {
          *     _link: "1",
          *   },
          *   productVariantId: 123,
          *   shop: {
          *     _link: "1",
          *   },
          * });
        **/
        <Options extends CreateProductCustomizationOptions>(variables: CreateProductCustomizationVariables, options?: LimitToKnownKeys<Options, CreateProductCustomizationOptions>): Promise<CreateProductCustomizationResult<Options>>;
        /**
         * Executes the create action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
        *
        * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
        *
        * @example
        * * const productCustomizationRecord = await api.productCustomization.create({
          *   productCustomization: {
          *     customizationType: "example value for customizationType",
          *     customizationValue: "example value for customizationValue",
          *     product: {
          *       _link: "1",
          *     },
          *     productVariantId: 123,
          *     shop: {
          *       _link: "1",
          *     },
          *   },
          * });
        **/
        <Options extends CreateProductCustomizationOptions>(variables: FullyQualifiedCreateProductCustomizationVariables, options?: LimitToKnownKeys<Options, CreateProductCustomizationOptions>): Promise<CreateProductCustomizationResult<Options>>;
        type: 'action';
        operationName: 'createProductCustomization';
        operationReturnType: 'CreateProductCustomization';
        namespace: null;
        modelApiIdentifier: typeof modelApiIdentifier;
        operatesWithRecordIdentity: false;
        modelSelectionField: typeof modelApiIdentifier;
        isBulk: false;
        isDeleter: false;
        variables: {
            productCustomization: {
                required: false;
                type: 'CreateProductCustomizationInput';
            };
        };
        variablesType: (((FullyQualifiedCreateProductCustomizationVariables | CreateProductCustomizationVariables)) | undefined);
        hasAmbiguousIdentifier: false;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: true;
        hasCreateOrUpdateEffect: true;
        imports: ['CreateProductCustomizationInput'];
        optionsType: CreateProductCustomizationOptions;
        selectionType: AvailableProductCustomizationSelection;
        schemaType: Query["productCustomization"];
        defaultSelection: typeof DefaultProductCustomizationSelection;
    };
    bulkCreate: {
        /**
          * Executes the bulkCreate action with the given inputs.
          */
        <Options extends CreateProductCustomizationOptions>(inputs: (FullyQualifiedCreateProductCustomizationVariables | CreateProductCustomizationVariables)[], options?: LimitToKnownKeys<Options, CreateProductCustomizationOptions>): Promise<CreateProductCustomizationResult<Options>[]>;
        type: 'action';
        operationName: 'bulkCreateProductCustomizations';
        isBulk: true;
        isDeleter: false;
        hasReturnType: false;
        acceptsModelInput: true;
        operatesWithRecordIdentity: false;
        singleActionFunctionName: 'create';
        modelApiIdentifier: typeof modelApiIdentifier;
        modelSelectionField: typeof pluralModelApiIdentifier;
        optionsType: CreateProductCustomizationOptions;
        namespace: null;
        variables: {
            inputs: {
                required: true;
                type: '[BulkCreateProductCustomizationsInput!]';
            };
        };
        variablesType: (FullyQualifiedCreateProductCustomizationVariables | CreateProductCustomizationVariables)[];
        paramOnlyVariables: [];
        selectionType: AvailableProductCustomizationSelection;
        schemaType: Query["productCustomization"];
        defaultSelection: typeof DefaultProductCustomizationSelection;
    };
    update: {
        /**
         * Executes the update actionon one record specified by `id`.Runs the action and returns a Promise for the updated record.
        *
        * This is the flat style, all-params-together overload that most use cases should use.
        *
        * @example
        * * const productCustomizationRecord = await api.productCustomization.update("1", {
          *   customizationType: "example value for customizationType",
          *   customizationValue: "example value for customizationValue",
          *   product: {
          *     _link: "1",
          *   },
          *   productVariantId: 123,
          *   shop: {
          *     _link: "1",
          *   },
          * });
        **/
        <Options extends UpdateProductCustomizationOptions>(id: string, variables: UpdateProductCustomizationVariables, options?: LimitToKnownKeys<Options, UpdateProductCustomizationOptions>): Promise<UpdateProductCustomizationResult<Options>>;
        /**
         * Executes the update actionon one record specified by `id`.Runs the action and returns a Promise for the updated record.
        *
        * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
        *
        * @example
        * * const productCustomizationRecord = await api.productCustomization.update("1", {
          *   productCustomization: {
          *     customizationType: "example value for customizationType",
          *     customizationValue: "example value for customizationValue",
          *     product: {
          *       _link: "1",
          *     },
          *     productVariantId: 123,
          *     shop: {
          *       _link: "1",
          *     },
          *   },
          * });
        **/
        <Options extends UpdateProductCustomizationOptions>(id: string, variables: FullyQualifiedUpdateProductCustomizationVariables, options?: LimitToKnownKeys<Options, UpdateProductCustomizationOptions>): Promise<UpdateProductCustomizationResult<Options>>;
        type: 'action';
        operationName: 'updateProductCustomization';
        operationReturnType: 'UpdateProductCustomization';
        namespace: null;
        modelApiIdentifier: typeof modelApiIdentifier;
        operatesWithRecordIdentity: true;
        modelSelectionField: typeof modelApiIdentifier;
        isBulk: false;
        isDeleter: false;
        variables: {
            id: {
                required: true;
                type: 'GadgetID';
            };
            productCustomization: {
                required: false;
                type: 'UpdateProductCustomizationInput';
            };
        };
        variablesType: ({
            id: string;
        } & (FullyQualifiedUpdateProductCustomizationVariables | UpdateProductCustomizationVariables));
        hasAmbiguousIdentifier: false;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: true;
        hasCreateOrUpdateEffect: true;
        imports: ['UpdateProductCustomizationInput'];
        optionsType: UpdateProductCustomizationOptions;
        selectionType: AvailableProductCustomizationSelection;
        schemaType: Query["productCustomization"];
        defaultSelection: typeof DefaultProductCustomizationSelection;
    };
    bulkUpdate: {
        /**
          * Executes the bulkUpdate action with the given inputs.
          */
        <Options extends UpdateProductCustomizationOptions>(inputs: (FullyQualifiedUpdateProductCustomizationVariables | UpdateProductCustomizationVariables & {
            id: string;
        })[], options?: LimitToKnownKeys<Options, UpdateProductCustomizationOptions>): Promise<UpdateProductCustomizationResult<Options>[]>;
        type: 'action';
        operationName: 'bulkUpdateProductCustomizations';
        isBulk: true;
        isDeleter: false;
        hasReturnType: false;
        acceptsModelInput: true;
        operatesWithRecordIdentity: true;
        singleActionFunctionName: 'update';
        modelApiIdentifier: typeof modelApiIdentifier;
        modelSelectionField: typeof pluralModelApiIdentifier;
        optionsType: UpdateProductCustomizationOptions;
        namespace: null;
        variables: {
            inputs: {
                required: true;
                type: '[BulkUpdateProductCustomizationsInput!]';
            };
        };
        variablesType: (FullyQualifiedUpdateProductCustomizationVariables | UpdateProductCustomizationVariables & {
            id: string;
        })[];
        paramOnlyVariables: [];
        selectionType: AvailableProductCustomizationSelection;
        schemaType: Query["productCustomization"];
        defaultSelection: typeof DefaultProductCustomizationSelection;
    };
    delete: {
        /**
         * Executes the delete actionon one record specified by `id`.Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
        *
        * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
        *
        * @example
        * * await api.productCustomization.delete("1");
        **/
        <Options extends DeleteProductCustomizationOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteProductCustomizationOptions>): Promise<DeleteProductCustomizationResult<Options>>;
        type: 'action';
        operationName: 'deleteProductCustomization';
        operationReturnType: 'DeleteProductCustomization';
        namespace: null;
        modelApiIdentifier: typeof modelApiIdentifier;
        operatesWithRecordIdentity: true;
        modelSelectionField: typeof modelApiIdentifier;
        isBulk: false;
        isDeleter: true;
        variables: {
            id: {
                required: true;
                type: 'GadgetID';
            };
        };
        variablesType: ({
            id: string;
        });
        hasAmbiguousIdentifier: false;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: false;
        hasCreateOrUpdateEffect: false;
        imports: [];
        optionsType: DeleteProductCustomizationOptions;
        selectionType: Record<string, never>;
        schemaType: null;
        defaultSelection: null;
    };
    bulkDelete: {
        /**
          * Executes the bulkDelete action with the given inputs.Deletes the records on the server.
          */
        <Options extends DeleteProductCustomizationOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteProductCustomizationOptions>): Promise<DeleteProductCustomizationResult<Options>[]>;
        type: 'action';
        operationName: 'bulkDeleteProductCustomizations';
        isBulk: true;
        isDeleter: true;
        hasReturnType: false;
        acceptsModelInput: false;
        operatesWithRecordIdentity: true;
        singleActionFunctionName: 'delete';
        modelApiIdentifier: typeof modelApiIdentifier;
        modelSelectionField: typeof pluralModelApiIdentifier;
        optionsType: DeleteProductCustomizationOptions;
        namespace: null;
        variables: {
            ids: {
                required: true;
                type: '[GadgetID!]';
            };
        };
        variablesType: IDsList | undefined;
        paramOnlyVariables: [];
        selectionType: Record<string, never>;
        schemaType: null;
        defaultSelection: null;
    };
    upsert: {
        /**
         * Executes the upsert action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
        *
        * This is the flat style, all-params-together overload that most use cases should use.
        *
        * @example
        * * const result = await api.productCustomization.upsert({
          *   customizationType: "example value for customizationType",
          *   customizationValue: "example value for customizationValue",
          *   id: "1",
          *   product: {
          *     _link: "1",
          *   },
          *   productVariantId: 123,
          * });
        **/
        <Options extends UpsertProductCustomizationOptions>(variables: UpsertProductCustomizationVariables, options?: LimitToKnownKeys<Options, UpsertProductCustomizationOptions>): Promise<UpsertProductCustomizationResult<Options>>;
        /**
         * Executes the upsert action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
        *
        * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
        *
        * @example
        * * const result = await api.productCustomization.upsert({
          *   productCustomization: {
          *     customizationType: "example value for customizationType",
          *     customizationValue: "example value for customizationValue",
          *     id: "1",
          *     product: {
          *       _link: "1",
          *     },
          *     productVariantId: 123,
          *   },
          * });
        **/
        <Options extends UpsertProductCustomizationOptions>(variables: FullyQualifiedUpsertProductCustomizationVariables, options?: LimitToKnownKeys<Options, UpsertProductCustomizationOptions>): Promise<UpsertProductCustomizationResult<Options>>;
        type: 'action';
        operationName: 'upsertProductCustomization';
        operationReturnType: 'UpsertProductCustomization';
        namespace: null;
        modelApiIdentifier: typeof modelApiIdentifier;
        operatesWithRecordIdentity: false;
        modelSelectionField: typeof modelApiIdentifier;
        isBulk: false;
        isDeleter: false;
        variables: {
            on: {
                required: false;
                type: '[String!]';
            };
            productCustomization: {
                required: false;
                type: 'UpsertProductCustomizationInput';
            };
        };
        variablesType: (((FullyQualifiedUpsertProductCustomizationVariables | UpsertProductCustomizationVariables)) | undefined);
        hasAmbiguousIdentifier: false;
        paramOnlyVariables: ['on'];
        hasReturnType: {
            '... on CreateProductCustomizationResult': {
                hasReturnType: false;
            };
            '... on UpdateProductCustomizationResult': {
                hasReturnType: false;
            };
        };
        acceptsModelInput: true;
        hasCreateOrUpdateEffect: true;
        imports: ['Scalars', 'UpsertProductCustomizationInput'];
        optionsType: UpsertProductCustomizationOptions;
        selectionType: AvailableProductCustomizationSelection;
        schemaType: Query["productCustomization"];
        defaultSelection: typeof DefaultProductCustomizationSelection;
    };
    bulkUpsert: {
        /**
          * Executes the bulkUpsert action with the given inputs.
          */
        <Options extends UpsertProductCustomizationOptions>(inputs: (FullyQualifiedUpsertProductCustomizationVariables | UpsertProductCustomizationVariables)[], options?: LimitToKnownKeys<Options, UpsertProductCustomizationOptions>): Promise<any[]>;
        type: 'action';
        operationName: 'bulkUpsertProductCustomizations';
        isBulk: true;
        isDeleter: false;
        hasReturnType: false;
        acceptsModelInput: true;
        operatesWithRecordIdentity: false;
        singleActionFunctionName: 'upsert';
        modelApiIdentifier: typeof modelApiIdentifier;
        modelSelectionField: typeof pluralModelApiIdentifier;
        optionsType: UpsertProductCustomizationOptions;
        namespace: null;
        variables: {
            inputs: {
                required: true;
                type: '[BulkUpsertProductCustomizationsInput!]';
            };
        };
        variablesType: (FullyQualifiedUpsertProductCustomizationVariables | UpsertProductCustomizationVariables)[];
        paramOnlyVariables: ['on'];
        selectionType: AvailableProductCustomizationSelection;
        schemaType: Query["productCustomization"];
        defaultSelection: typeof DefaultProductCustomizationSelection;
    };
    view: {
        (query: string, variables?: Record<string, unknown>): Promise<unknown>;
        type: 'computedView';
        operationName: 'view';
        gqlFieldName: 'productCustomizationGellyView';
        namespace: null;
        imports: [];
        variables: {
            query: {
                type: 'String';
                required: true;
            };
            args: {
                type: 'JSONObject';
            };
        };
        variablesType: Record<string, unknown>;
        resultType: Promise<unknown>;
        plan: never;
    };
};
/**
 * A manager for the productCustomization model with all the available operations for reading and writing to it.*/
export declare const ProductCustomizationManager: {
    new (connection: GadgetConnection): ProductCustomizationManager;
};
export {};
