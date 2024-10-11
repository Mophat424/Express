import { createWriteStream } from 'fs';
import { format } from 'date-fns';

// Create a write stream for logging to a file
const logStream = createWriteStream('logs.txt', { flags: 'a' }); // Append mode

// Logger class to handle logging operations
class Logger {
  private static formatMessage(level: string, message: string): string {
    const timestamp = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
  }

  public static info(message: string): void {
    const formattedMessage = this.formatMessage('info', message);
    console.log(formattedMessage);
    logStream.write(formattedMessage + '\n'); // Log to file
  }

  public static warn(message: string): void {
    const formattedMessage = this.formatMessage('warn', message);
    console.warn(formattedMessage);
    logStream.write(formattedMessage + '\n'); // Log to file
  }

  public static error(message: string): void {
    const formattedMessage = this.formatMessage('error', message);
    console.error(formattedMessage);
    logStream.write(formattedMessage + '\n'); // Log to file
  }

  public static debug(message: string): void {
    const formattedMessage = this.formatMessage('debug', message);
    console.log(formattedMessage);
    logStream.write(formattedMessage + '\n'); // Log to file
  }
}

// Exporting the logger instance
export const logger = Logger;

  