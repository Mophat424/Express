"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const fs_1 = require("fs");
const date_fns_1 = require("date-fns");
// Create a write stream for logging to a file
const logStream = (0, fs_1.createWriteStream)('logs.txt', { flags: 'a' }); // Append mode
// Logger class to handle logging operations
class Logger {
    static formatMessage(level, message) {
        const timestamp = (0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss');
        return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    }
    static info(message) {
        const formattedMessage = this.formatMessage('info', message);
        console.log(formattedMessage);
        logStream.write(formattedMessage + '\n'); // Log to file
    }
    static warn(message) {
        const formattedMessage = this.formatMessage('warn', message);
        console.warn(formattedMessage);
        logStream.write(formattedMessage + '\n'); // Log to file
    }
    static error(message) {
        const formattedMessage = this.formatMessage('error', message);
        console.error(formattedMessage);
        logStream.write(formattedMessage + '\n'); // Log to file
    }
    static debug(message) {
        const formattedMessage = this.formatMessage('debug', message);
        console.log(formattedMessage);
        logStream.write(formattedMessage + '\n'); // Log to file
    }
}
// Exporting the logger instance
exports.logger = Logger;
