import { mode } from "../config/constants";

declare global {
  interface Logger {
    debug(message: string, ...params: any[]): void;
  }
}

export {};

class DefaultLogger implements Logger {
  debug(message: string, ...params: any[]): void {
    if (mode == "dev") {
      console.log(`%cDEBUG: ${message}`, "color: #FF4500", params);
    }
  }
}

export const logger = new DefaultLogger();
