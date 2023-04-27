import { HtmlTag } from "../model/htmlTag";
import { DomApi } from "../utils/domApi";
import { Component } from "./component";

export class InlineBlockComponent extends Component {
  constructor(tag: HtmlTag, value: string) {
    super();

    this.createComponent(tag, value);
  }

  createComponent(tag: HtmlTag, value: string): void {
    if (tag == HtmlTag.Strong) {
      this.htmlElement = DomApi.createElement(HtmlTag.Strong);
      this.htmlElement.style.fontWeight = "bold";
      this.htmlElement.textContent = value;
    }
  }
}
