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
    h4: "header4",
    h5: "header5",
    h6: "header6",
  };

  constructor(tag: HtmlTags) {
    super();

    this.create(tag);
  }

  private create(htmlTag: HtmlTags): void {
    this.isValidHTMLElement(htmlTag);

    this.htmlElement = DomApi.createElement(htmlTag) as HTMLHeadingElement;
    this.htmlElement.className = HeaderComponent.HEADER_ELEMENTS[htmlTag];
    this.htmlElement.id = this.uuid;
  }

  private isValidHTMLElement(htmlElement: string): boolean {
    const keys = Object.keys(HeaderComponent.HEADER_ELEMENTS);
    return keys.includes(htmlElement);
  }
}
