import { BlockComponent } from "./blockComponent";

export class TextComponent extends BlockComponent {
  private static readonly SUPPORTED_TEXT_ELEMENTS: string[] = ["p"];
  private static readonly TEXT_CLASSNAME = "paragraph";

  private textEl: HTMLParagraphElement;

  public create(htmlElement: string, editable = true): HTMLParagraphElement {
    this.isValidHTMLElement(htmlElement);

    this.textEl = document.createElement("p"); //TODO: Create DOM API
    this.textEl.className = TextComponent.TEXT_CLASSNAME;
    this.textEl.setAttribute("data-placeholder", "Enter your text...");
    this.textEl.contentEditable = editable ? "true" : "false";

    return this.textEl;
  }

  private isValidHTMLElement(htmlElement: string): boolean {
    return TextComponent.SUPPORTED_TEXT_ELEMENTS.includes(htmlElement);
  }
}
