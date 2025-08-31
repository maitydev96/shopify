import { buildModelManager } from "../builder.js";
const DefaultProductCustomizationSelection = {
  __typename: true,
  id: true,
  createdAt: true,
  customizationType: true,
  customizationValue: true,
  productId: true,
  productVariantId: true,
  shopId: true,
  updatedAt: true
};
const modelApiIdentifier = "productCustomization";
const pluralModelApiIdentifier = "productCustomizations";
;
;
;
;
;
;
;
;
;
const ProductCustomizationManager = buildModelManager(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultProductCustomizationSelection,
  [
    {
      type: "findOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultProductCustomizationSelection,
      namespace: null
    },
    {
      type: "maybeFindOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultProductCustomizationSelection,
      namespace: null
    },
    {
      type: "findMany",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultProductCustomizationSelection,
      namespace: null
    },
    {
      type: "findFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultProductCustomizationSelection,
      namespace: null
    },
    {
      type: "maybeFindFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultProductCustomizationSelection,
      namespace: null
    },
    {
      type: "findOne",
      operationName: pluralModelApiIdentifier,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier,
      defaultSelection: DefaultProductCustomizationSelection,
      namespace: null
    },
    {
      type: "maybeFindOne",
      operationName: pluralModelApiIdentifier,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier,
      defaultSelection: DefaultProductCustomizationSelection,
      namespace: null
    },
    {
      type: "action",
      operationName: "createProductCustomization",
      operationReturnType: "CreateProductCustomization",
      functionName: "create",
      namespace: null,
      modelApiIdentifier,
      operatesWithRecordIdentity: false,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        productCustomization: { required: false, type: "CreateProductCustomizationInput" }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultProductCustomizationSelection
    },
    {
      type: "action",
      operationName: "bulkCreateProductCustomizations",
      functionName: "bulkCreate",
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: false,
      singleActionFunctionName: "create",
      modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateProductCustomizationsInput!]"
        }
      },
      paramOnlyVariables: [],
      defaultSelection: DefaultProductCustomizationSelection
    },
    {
      type: "action",
      operationName: "updateProductCustomization",
      operationReturnType: "UpdateProductCustomization",
      functionName: "update",
      namespace: null,
      modelApiIdentifier,
      operatesWithRecordIdentity: true,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        id: { required: true, type: "GadgetID" },
        productCustomization: { required: false, type: "UpdateProductCustomizationInput" }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultProductCustomizationSelection
    },
    {
      type: "action",
      operationName: "bulkUpdateProductCustomizations",
      functionName: "bulkUpdate",
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: true,
      singleActionFunctionName: "update",
      modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateProductCustomizationsInput!]"
        }
      },
      paramOnlyVariables: [],
      defaultSelection: DefaultProductCustomizationSelection
    },
    {
      type: "action",
      operationName: "deleteProductCustomization",
      operationReturnType: "DeleteProductCustomization",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier,
      operatesWithRecordIdentity: true,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: true,
      variables: { id: { required: true, type: "GadgetID" } },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: false,
      hasCreateOrUpdateEffect: false,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteProductCustomizations",
      functionName: "bulkDelete",
      isBulk: true,
      isDeleter: true,
      hasReturnType: false,
      acceptsModelInput: false,
      operatesWithRecordIdentity: true,
      singleActionFunctionName: "delete",
      modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: { ids: { required: true, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "upsertProductCustomization",
      operationReturnType: "UpsertProductCustomization",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier,
      operatesWithRecordIdentity: false,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        on: { required: false, type: "[String!]" },
        productCustomization: { required: false, type: "UpsertProductCustomizationInput" }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateProductCustomizationResult": { hasReturnType: false },
        "... on UpdateProductCustomizationResult": { hasReturnType: false }
      },
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultProductCustomizationSelection
    },
    {
      type: "action",
      operationName: "bulkUpsertProductCustomizations",
      functionName: "bulkUpsert",
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: false,
      singleActionFunctionName: "upsert",
      modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpsertProductCustomizationsInput!]"
        }
      },
      paramOnlyVariables: ["on"],
      defaultSelection: DefaultProductCustomizationSelection
    },
    {
      type: "computedView",
      operationName: "view",
      functionName: "view",
      gqlFieldName: "productCustomizationGellyView",
      namespace: null,
      variables: {
        query: { type: "String", required: true },
        args: { type: "JSONObject" }
      }
    }
  ]
);
export {
  DefaultProductCustomizationSelection,
  ProductCustomizationManager
};
//# sourceMappingURL=ProductCustomization.js.map
