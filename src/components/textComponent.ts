import { HtmlTag } from "../model/HtmlTag";
import { DomApi } from "../utils/domApi";
import { BlockComponent } from "./blockComponent";

export class TextComponent extends BlockComponent {
  private static readonly SUPPORTED_TEXT_ELEMENTS: string[] = ["p"];
  private static readonly TEXT_CLASSNAME = "paragraph";

  private textEl: HTMLParagraphElement;

  public create(htmlElement: string, editable = true): HTMLParagraphElement {
    this.isValidHTMLElement(htmlElement);

    this.textEl = DomApi.createElement(HtmlTag.P) as HTMLParagraphElement;
    this.textEl.className = TextComponent.TEXT_CLASSNAME;
    this.textEl.setAttribute("data-placeholder", "Enter your text...");
    this.textEl.contentEditable = editable ? "true" : "false";

    return this.textEl;
  }

  public addEvent(): void {
    
  }

  private isValidHTMLElement(htmlElement: string): boolean {
    return TextComponent.SUPPORTED_TEXT_ELEMENTS.includes(htmlElement);
  }
}
