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
    description: {
      type: DataTypes.STRING,
    },
    compensationApply: {
      type: DataTypes.BOOLEAN,
      field: "compensation_apply",
    },
    accountNumber: {
      type: DataTypes.STRING,
      field: "account_number",
    },
    beneficiaryName: {
      type: DataTypes.STRING,
      field: "beneficiary_name",
    },
    beneficiaryDocumentNumber: {
      type: DataTypes.STRING,
      field: "beneficiary_document_number",
    },
    beneficiaryDocumentType: {
      type: DataTypes.INTEGER,
      field: "beneficiary_document_type",
    },
    monetaryAmount: {
      type: DataTypes.NUMBER,
      field: "monetary_amount",
    },
    monetaryUnit: {
      type: DataTypes.STRING,
      field: "monetary_unit",
    },
    statusUpdatedAt: {
      type: DataTypes.DATE,
      field: "status_update_date",
    },
    created_at: {
      type: DataTypes.DATE,
      field: "created_date",
    },
    coming: {
      type: DataTypes.BOOLEAN,
      field: "coming",
    },
    claimProceeds: {
      type: DataTypes.STRING,
      field: "claim_proceeds",
    },
    isFrom: {
      type: DataTypes.BOOLEAN,
      field: "is_from",
    },
  },
  optionalConfig: {
    tableName: "tuten_claim",
    timestamps: false,
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
