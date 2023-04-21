import { TextComponent } from "./components/textComponent";
import { HtmlTag } from "./model/htmlTag";
import { Editor } from "./tree/editor";

// DOM Elements
const insertTextElementBtn = document.getElementById(
  "insert-text-btn"
) as HTMLButtonElement;

function start(): void {
  const editor = new Editor("editor");
  const textComponent = new TextComponent(HtmlTag.P);
  editor.addComponent(textComponent);
}

start();
