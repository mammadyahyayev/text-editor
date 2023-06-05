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

  override create(htmlTag: HtmlTag): void {
    this.isValidHtmlElement(htmlTag);

    this.html = DomApi.createElement(htmlTag) as HTMLParagraphElement;
    this.html.className = TextComponent.TEXT_CLASSNAME;
    this.html.id = this.id ? this.id : this.uuid;
  }

  override isValidHtmlElement(htmlElement: string): boolean {
    return TextComponent.SUPPORTED_TEXT_ELEMENTS.includes(htmlElement);
  }
}
