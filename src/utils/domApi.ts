import { HtmlTag } from "../model/HtmlTag";

export class DomApi {
  public static createElement(tag: HtmlTag): HTMLElement {
    console.log(tag)
    if (!tag) {
      throw new IllegalArgumentException("tag cannot be null or empty");
    }

    const element = document.createElement(tag.toString());
    return element;
  }
}
