/* eslint-disable quotes */
import { DataTypes } from "sequelize";

export default {
  name: "ResponseType",
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
  },
  optionalConfig: {
    tableName: "tuten_response_type",
  },
};
