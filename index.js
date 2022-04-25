import { loggers } from "winston";
import config from "./config/config";
import app from "./config/express";
/* eslint-disable no-unused-vars */

const debug = require('debug')('amida-api-boilerplate:index');
/* eslint-enable no-unused-vars */

// Get default logger
const logger = loggers.get(config.loggerName); // eslint-disable-line no-global-assign

app.listen(config.port, () => {
  logger.info(
    `The application has started on port ${config.port} (${config.env})`,
    {
      port: config.port,
      node_env: config.env,
    }
  );
});

export default app;
