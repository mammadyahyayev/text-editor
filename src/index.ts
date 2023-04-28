import { HeaderComponent } from "./components/headerComponent";
import { TextComponent } from "./components/textComponent";
import { HeadingTags, HtmlTag } from "./model/htmlTag";
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

const h1ElementBtn = document.getElementById("h1-btn") as HTMLButtonElement;
const h2ElementBtn = document.getElementById("h2-btn") as HTMLButtonElement;
const h3ElementBtn = document.getElementById("h3-btn") as HTMLButtonElement;

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

// Alignment Operations
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

// Headers
h1ElementBtn.addEventListener("click", () => {
  const h1Component = new HeaderComponent(HeadingTags.H1);
  const editor = EditorFactory.getEditor();
  editor.replaceComponent(h1Component, editor.getFocusedComponent());
});

h2ElementBtn.addEventListener("click", () => {
  const h2Component = new HeaderComponent(HeadingTags.H2);
  const editor = EditorFactory.getEditor();
  editor.replaceComponent(h2Component, editor.getFocusedComponent());
});

h3ElementBtn.addEventListener("click", () => {
  const h3Component = new HeaderComponent(HeadingTags.H3);
  const editor = EditorFactory.getEditor();
  editor.replaceComponent(h3Component, editor.getFocusedComponent());
});
