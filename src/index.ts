import { TextComponent } from "./components/textComponent";
import { HtmlEvent } from "./model/htmlEvent";
import { HtmlTag } from "./model/htmlTag";
import { Editor } from "./tree/editor";

// DOM Elements
const editorEl = document.getElementById("editor") as HTMLDivElement;
const insertTextElementBtn = document.getElementById(
  "insert-text-btn"
) as HTMLButtonElement;

const paragraph = document.querySelector(".paragraph") as HTMLParagraphElement;

// insertTextElementBtn.addEventListener("click", () => {
//   const textComponent = new TextComponent(HtmlTag.P);
//   const textElement = textComponent.getHtmlElement();
//   editorEl.appendChild(textElement);
// });

// function addTextIntoEditor() {
//   const textComponent = new TextComponent(HtmlTag.P, addTextIntoEditor);
//   const textElement = textComponent.getHtmlElement();
//   editorEl.appendChild(textElement);
//   textElement.focus();
// }

function start(): void {
  const editor = new Editor("editor");
}
