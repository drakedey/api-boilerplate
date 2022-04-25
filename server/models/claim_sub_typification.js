/* eslint-disable quotes */
import { DataTypes } from "sequelize";

export default {
  name: "ClaimSubTipification",
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
    tableName: "tuten_claim_sub_typification",
  },
};
