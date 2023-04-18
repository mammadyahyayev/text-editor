import { HtmlTag } from "../model/htmlTag";
import { DomApi } from "../utils/domApi";
import { BlockComponent } from "./blockComponent";

export class TextComponent extends BlockComponent {
  private static readonly SUPPORTED_TEXT_ELEMENTS: string[] = ["p"];
  private static readonly TEXT_CLASSNAME = "paragraph";

  private textEl: HTMLParagraphElement;

  constructor(tag: HtmlTag, callback: Function) {
    super();

    this.create(tag, callback);
  }

  private create(htmlElement: HtmlTag, callback: Function, editable = true): void {
    this.isValidHTMLElement(htmlElement);

    this.textEl = DomApi.createElement(HtmlTag.P) as HTMLParagraphElement;
    this.textEl.className = TextComponent.TEXT_CLASSNAME;
    this.textEl.setAttribute("data-placeholder", "Enter your text...");
    this.textEl.contentEditable = editable ? "true" : "false";

    this.textEl.addEventListener("keydown", (e: KeyboardEvent) => {
      if(e.code == "Enter") {
        e.preventDefault();
        callback();
      }
    });
  }

  public getHtmlElement(): HTMLParagraphElement {
    return this.textEl;
  }

  private isValidHTMLElement(htmlElement: string): boolean {
    return TextComponent.SUPPORTED_TEXT_ELEMENTS.includes(htmlElement);
  }
}
