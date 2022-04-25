/* eslint-disable indent */
/* eslint-disable import/no-dynamic-require */
import Sequelize from "sequelize";
import fs from "fs";
import path from "path";
import _ from "lodash";
import config from "./config";
import logger from "./winston/get-default-logger";

const db = {};

// connect to postgres testDb
const sequelizeOptions = {
  dialect: "postgres",
  port: config.postgres.port,
  host: config.postgres.host,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  ...(config.postgres.ssl && {
    ssl: config.postgres.ssl,
  }),
  ...(config.postgres.ssl &&
    config.postgres.ssl_ca_cert && {
      dialectOptions: {
        ssl: {
          ca: config.postgres.ssl_ca_cert,
        },
      },
    }),
};
const sequelize = new Sequelize(
  config.postgres.db,
  config.postgres.user,
  config.postgres.passwd,
  sequelizeOptions
);

const modelsDir = path.normalize(`${__dirname}/../server/models`);

// loop through all files in models directory ignoring hidden files and this file
fs.readdirSync(modelsDir)
  .filter((file) => file.indexOf(".") !== 0 && file.indexOf(".map") === -1)
  // import model files and save model names
  .map((file) => {
    logger.info(`Loading model file ${file}`);
    const modelSchema = require(path.join(modelsDir, file)).default;
    const optionalConfig = modelSchema.optionalConfig
      ? modelSchema.optionalConfig
      : {};
    const model = sequelize.define(
      modelSchema.name,
      modelSchema.attribute,
      optionalConfig
    );
    db[model.name] = model;
    return file;
  })
  .forEach((file) => {
    const modelSchema = require(path.join(modelsDir, file)).default;
    const { relationships, name } = modelSchema;
    if (!relationships || !relationships.belongsTo) return;
    relationships.belongsTo.forEach(({ relationType, modelName, options }) => {
      switch (relationType) {
        case "hasMany":
          console.log(`DOING HAS MANY FOR: ${name}, ${modelName}`);
          db[modelName].hasMany(db[name], options);
          db[name].belongsTo(db[modelName]);
          break;
        default:
          break;
      }
    });
  });

// assign the sequelize variables to the db object and returning the db.
export default _.extend(
  {
    sequelize,
    Sequelize,
  },
  db
);
