import { IllegalArgumentException } from "../exception/illegalArgumentException";
import { HtmlTags } from "../model/htmlTag";

export class DomApi {
  public static createElement(tag: HtmlTags): HTMLElement {
    if (!tag) {
      throw new IllegalArgumentException("tag cannot be null or empty");
    }

    const element = document.createElement(tag.toString());
    return element;
  }

  public static createTextNode(value: string): Node {
    if (!value) {
      throw new IllegalArgumentException("value cannot be null or empty");
    }

    return document.createTextNode(value);
  }
}
