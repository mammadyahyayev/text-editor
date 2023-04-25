import { TextComponent } from "./components/textComponent";
import { HtmlTag } from "./model/htmlTag";
import { EditorFactory } from "./tree/editorFactory";

// DOM Elements
const insertTextElementBtn = document.getElementById(
  "insert-text-btn"
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
