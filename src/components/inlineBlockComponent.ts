import { HtmlTag } from "../model/htmlTag";
import { FontWeight, StyleTypes } from "../model/styleType";
import { DomApi } from "../utils/domApi";
import { Component } from "./component";

export class InlineBlockComponent extends Component {
  constructor(tag: HtmlTag, value: string) {
    super();

    this.createComponent(tag, value);
  }

  createComponent(tag: HtmlTag, value: string): void {
    if (tag === HtmlTag.STRONG) {
      this.html = DomApi.createElement(HtmlTag.STRONG);
      this.addStyle(StyleTypes.FONT_WEIGHT, FontWeight.BOLD);
      this.textContent = value;
    } 
  }
}
