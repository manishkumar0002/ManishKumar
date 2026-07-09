/**
 * Production-safe logger utility
 * Only logs in development mode
 */

type LogLevel = "info" | "warn" | "error";

interface LoggerConfig {
  enableInProduction: boolean;
  prefix: string;
}

class Logger {
  private isDevelopment: boolean;
  private config: LoggerConfig;

  constructor(config: Partial<LoggerConfig> = {}) {
    this.isDevelopment = process.env.NODE_ENV === "development";
    this.config = {
      enableInProduction: false,
      prefix: "📋",
      ...config,
    };
  }

  private shouldLog(): boolean {
    return this.isDevelopment || this.config.enableInProduction;
  }

  private formatMessage(
    level: LogLevel,
    module: string,
    message: string,
  ): string {
    const timestamp = new Date().toLocaleTimeString();
    return `[${timestamp}] [${level.toUpperCase()}] [${module}] ${message}`;
  }

  info(module: string, message: string, data?: any): void {
    if (!this.shouldLog()) return;

    const formattedMessage = this.formatMessage("info", module, message);
    if (data !== undefined) {
      console.log(`${this.config.prefix} ${formattedMessage}`, data);
    } else {
      console.log(`${this.config.prefix} ${formattedMessage}`);
    }
  }

  warn(module: string, message: string, data?: any): void {
    if (!this.shouldLog()) return;

    const formattedMessage = this.formatMessage("warn", module, message);
    if (data !== undefined) {
      console.warn(`⚠️ ${formattedMessage}`, data);
    } else {
      console.warn(`⚠️ ${formattedMessage}`);
    }
  }

  error(module: string, message: string, error?: any): void {
    if (!this.shouldLog()) return;

    const formattedMessage = this.formatMessage("error", module, message);
    if (error !== undefined) {
      console.error(`❌ ${formattedMessage}`, error);
    } else {
      console.error(`❌ ${formattedMessage}`);
    }
  }
}

// Create singleton instance
export const logger = new Logger();

// Export types
export type { LogLevel, LoggerConfig };
