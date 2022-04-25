/* eslint-disable quotes */
import { DataTypes } from "sequelize";

export default {
  name: "AccountTypes",
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
    name: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
    },
    creationDate: {
      type: DataTypes.DATE,
    },
  },
  optionalConfig: {
    tableName: "tuten_document_type",
  },
};
