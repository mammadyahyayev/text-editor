export enum HtmlTag {
  P = "p",
  A = "a",
  DIV = "div",
  SPAN = "span",
  IMG = "img",
  STRONG = "strong",
}

export enum HeadingTags {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

export type HtmlTags = HtmlTag | HeadingTags;
