import { HtmlTags } from "../model/htmlTag";
import { DomApi } from "../utils/domApi";
import { BlockComponent } from "./blockComponent";

interface HeaderTypes {
  [key: string]: string;
}

export class HeaderComponent extends BlockComponent {
  private static readonly HEADER_ELEMENTS: HeaderTypes = {
    h1: "header1",
    h2: "header2",
    h3: "header3",
  };

  constructor(tag: HtmlTags) {
    super();

    this.create(tag);
  }

  override create(htmlTag: HtmlTags): void {
    this.isValidHtmlElement(htmlTag);

    this.html = DomApi.createElement(htmlTag) as HTMLHeadingElement;
    this.html.className = "header " + HeaderComponent.HEADER_ELEMENTS[htmlTag];
    this.html.id = this.id ? this.id : this.uuid;
  }

  override isValidHtmlElement(htmlElement: string): boolean {
    const keys = Object.keys(HeaderComponent.HEADER_ELEMENTS);
    return keys.includes(htmlElement);
  }
}
