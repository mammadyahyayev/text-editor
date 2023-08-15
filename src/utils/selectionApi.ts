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

  /**
   * Returns the position of the cursor to determine
   * which element the cursor is currently on. 
   * 
   * @returns cursor position with beginning and end index
   */
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

  /**
   * Set cursor position to given HTMLElement.
   * 
   * @param element an HTMLElement
   */
  static setCursorPositionTo(element: HTMLElement): void {
    const range = document.createRange();
    range.selectNodeContents(element);
    range.collapse(false);

    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  }

  /**
   * Give Selection object which contains text, beginning and 
   * ending indices.
   * 
   * @returns a Selection object 
   */
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

  /**
   * Retrieves element where the caret is currently on. 
   * 
   * @returns current HTMLElement where caret is currently on
   */
  static getFocusedElement(): HTMLElement | null {
    const selection = window.getSelection();
    if (!selection) return null;

    if (selection.anchorNode && selection.focusNode) {
      return selection.anchorNode.parentElement;
    }

    return null;
  }
}
