import { logger } from "./logger";

type CursorPosition = {
  begin: number;
  end: number;
};

type Selection = {
  text: string;
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
      return { begin: begin, end: end };
    }

    return null;
  }

  static setCursorPositionTo(element: HTMLElement): void {
    const range = document.createRange();
    range.selectNodeContents(element);
    range.collapse(false);

    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  }

  static getSelection(): Selection | null {
    const selection = window.getSelection();
    if (selection) {
      const selectedText = selection.toString();
      const range = selection.getRangeAt(0);
      const begin = range.startOffset;
      const end = range.endOffset;
      return selectedText !== "" ? { text: selectedText, begin, end } : null;
    }

    return null;
  }

  static getCurrentElementWhereCaretIs(): HTMLElement | null {
    const selection = window.getSelection();
    if (!selection) return null;

    if (selection.anchorNode && selection.focusNode) {
      return selection.anchorNode.parentElement;
    }

    return null;
  }
}
