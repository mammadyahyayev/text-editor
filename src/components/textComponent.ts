import { HtmlTag } from "../model/htmlTag";
import { DomApi } from "../utils/domApi";
import { BlockComponent } from "./blockComponent";

export class TextComponent extends BlockComponent {
  private static readonly SUPPORTED_TEXT_ELEMENTS: string[] = ["p"];
  private static readonly TEXT_CLASSNAME = "paragraph";

  constructor(tag: HtmlTag) {
    super();

    this.create(tag);
  }

  private create(htmlElement: HtmlTag, editable = true): void {
    this.isValidHTMLElement(htmlElement);

    this.htmlElement = DomApi.createElement(htmlElement) as HTMLParagraphElement;
    this.htmlElement.className = TextComponent.TEXT_CLASSNAME;
    this.htmlElement.contentEditable = editable ? "true" : "false";
    this.htmlElement.id = this.uuid;
  }

  private isValidHTMLElement(htmlElement: string): boolean {
    return TextComponent.SUPPORTED_TEXT_ELEMENTS.includes(htmlElement);
  }
}
