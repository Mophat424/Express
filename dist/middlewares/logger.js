"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = void 0;
const logger_1 = require("../utils/logger"); // Logger utility
const requestLogger = (req, res, next) => {
    logger_1.logger.info(`${req.method} ${req.path}`);
    next();
};
exports.requestLogger = requestLogger;
