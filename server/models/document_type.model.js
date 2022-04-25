/* eslint-disable quotes */
import { DataTypes } from "sequelize";

export default {
  name: "DocumentType",
  attribute: {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    businessUnitUUID: {
      type: DataTypes.UUID,
      field: "business_unit_uuid",
    },
  },
  optionalConfig: {
    tableName: "tuten_document_type",
  },
};
