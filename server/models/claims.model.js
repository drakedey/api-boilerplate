/* eslint-disable quotes */
import { DataTypes } from "sequelize";

export default {
  name: "Claims",
  attribute: {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    caseId: {
      type: DataTypes.BIGINT,
      field: "case_id",
    },
    customerId: {
      type: DataTypes.BIGINT,
      field: "customer_id",
    },
    businessUnitUUID: {
      type: DataTypes.UUID,
      field: "business_unit_uuid",
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  optionalConfig: {
    tableName: "tuten_claims",
  },
  relationships: {
    belongsTo: [
      {
        modelName: "DocumentType",
        options: { foreignKey: "document_type_id" },
        relationType: "hasMany",
      },
      {
        modelName: "AccountTypes",
        options: { foreignKey: "account_type_id" },
        relationType: "hasMany",
      },
      {
        modelName: "ActionType",
        options: { foreignKey: "action_type_id" },
        relationType: "hasMany",
      },
      {
        modelName: "Bank",
        options: { foreignKey: "bank_id" },
        relationType: "hasMany",
      },
      {
        modelName: "BeneficiaryType",
        options: { foreignKey: "beneficiary_type_id" },
        relationType: "hasMany",
      },
      {
        modelName: "ClaimStatus",
        options: { foreignKey: "status_id" },
        relationType: "hasMany",
      },
      {
        modelName: "ClaimSubTipification",
        options: { foreignKey: "sub_typification_id" },
        relationType: "hasMany",
      },
      {
        modelName: "ClaimType",
        options: { foreignKey: "claim_type_id" },
        relationType: "hasMany",
      },
      {
        modelName: "ClaimTypification",
        options: { foreignKey: "typification_id" },
        relationType: "hasMany",
      },
      {
        modelName: "CompensationType",
        options: { foreignKey: "compensation_type_id" },
        relationType: "hasMany",
      },
      {
        modelName: "PaymentType",
        options: { foreignKey: "payment_type_id" },
        relationType: "hasMany",
      },
      {
        modelName: "Priority",
        options: { foreignKey: "priority_id" },
        relationType: "hasMany",
      },
      {
        modelName: "ResponseType",
        options: { foreignKey: "response_type_id" },
        relationType: "hasMany",
      },
      {
        modelName: "ResponsibleArea",
        options: { foreignKey: "responsible_area_id" },
        relationType: "hasMany",
      },
    ],
  },
};
