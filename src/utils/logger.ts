import { mode } from "../config/constants";

declare global {
  interface Logger {
    debug(...params: any[]): void;
    debug(message: string, ...params: any[]): void;
  }
}

export {};

class DefaultLogger implements Logger {
  debug(...params: any[]): void;
  debug(message: string, ...params: any[]): void;
  debug(...args: any[]): void {
    const [message, ...params] = args;
    if (mode == "dev") {
      console.log(`%cDEBUG: ${message}`, "color: #FF4500", params);
    }
  }
}

export const logger = new DefaultLogger();
