import { IllegalArgumentException } from "../exception/illegalArgumentException";
import { HtmlTags } from "../model/htmlTag";

export class DomApi {
  /**
   * Creates a HTMLElement based on given HTML tag such as 
   * <div>, <a>, <p> and so on.
   *  
   * @param tag an HTML tag
   * @returns an {@interface HTMLElement}
   */
  public static createElement(tag: HtmlTags): HTMLElement {
    if (!tag) {
      throw new IllegalArgumentException("tag cannot be null or empty");
    }

    const element = document.createElement(tag.toString());
    return element;
  }

  /**
   * Create a text node with given text content
   * 
   * @param content text of node
   * @returns a {@interface Node} with content
   */
  public static createTextNode(content: string): Node {
    if (content == null) {
      throw new IllegalArgumentException("value cannot be null or empty");
    }

    return document.createTextNode(content);
  }
}
