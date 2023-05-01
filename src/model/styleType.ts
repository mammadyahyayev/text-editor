export enum StyleTypes {
  TEXT_ALIGN = "text-align",
  FONT_WEIGHT = "font-weight",
}

export enum AlignmentTypes {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

export enum FontWeight {
  BOLD = "bold",
}

export type StyleType = StyleTypes | AlignmentTypes | FontWeight;
