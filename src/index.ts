import { TextComponent } from "./components/textComponent";
import { HtmlTag } from "./model/htmlTag";
import { AlignmentTypes, StyleTypes } from "./model/styleType";
import { EditorFactory } from "./tree/editorFactory";

// DOM Elements
const insertTextElementBtn = document.getElementById(
  "insert-text-btn"
) as HTMLButtonElement;

const leftAlignTextElementBtn = document.getElementById(
  "left-align-text-btn"
) as HTMLButtonElement;

const centerAlignTextElementBtn = document.getElementById(
  "center-align-text-btn"
) as HTMLButtonElement;

const rightAlignTextElementBtn = document.getElementById(
  "right-align-text-btn"
) as HTMLButtonElement;

function start(): void {
  const editor = EditorFactory.createEditor("editor");
  const textComponent = new TextComponent(HtmlTag.P);
  editor.addComponent(textComponent);
}

insertTextElementBtn.addEventListener("click", () => {
  const editor = EditorFactory.getEditor();
  const textComponent = new TextComponent(HtmlTag.P);
  editor.addComponent(textComponent);
});

start();

leftAlignTextElementBtn.addEventListener("click", () => {
  const editor = EditorFactory.getEditor();
  const focusedComponent = editor.getFocusedComponent();
  focusedComponent.applyStyle(StyleTypes.TEXT_ALIGN, AlignmentTypes.LEFT);
});

centerAlignTextElementBtn.addEventListener("click", () => {
  const editor = EditorFactory.getEditor();
  const focusedComponent = editor.getFocusedComponent();
  focusedComponent.applyStyle(StyleTypes.TEXT_ALIGN, AlignmentTypes.CENTER);
});

rightAlignTextElementBtn.addEventListener("click", () => {
  const editor = EditorFactory.getEditor();
  const focusedComponent = editor.getFocusedComponent();
  focusedComponent.applyStyle(StyleTypes.TEXT_ALIGN, AlignmentTypes.RIGHT);
});
