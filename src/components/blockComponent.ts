import { HtmlTag } from "../model/htmlTag";
import { Component } from "./component";

export abstract class BlockComponent extends Component {
  abstract create(htmlTag: HtmlTag): void;
  abstract isValidHtmlElement(htmlElement: string): boolean;
}
