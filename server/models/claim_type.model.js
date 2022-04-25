/* eslint-disable quotes */
import { DataTypes } from "sequelize";

export default {
  name: "ClaimType",
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
    responsibleAreaId: {
      type: DataTypes.BIGINT,
      field: "responsible_area_id",
    },
  },
  optionalConfig: {
    tableName: "tuten_claim_type",
  },
};
