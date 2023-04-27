import { logger } from "./logger";

type CursorPosition = {
  begin: number;
  end: number;
};

export class SelectionApi {
  constructor() {
    logger.debug("selection api", window.getSelection());
  }

  static getCursorPosition(): CursorPosition | null {
    const selection = window.getSelection();
    if (selection?.rangeCount) {
      const range = selection.getRangeAt(0);
      const begin = range.startOffset;
      const end = range.endOffset;
      logger.debug("begin => ", begin);
      logger.debug("end => ", end);
      return { begin: begin, end: end };
    }

    return null;
  }
}
