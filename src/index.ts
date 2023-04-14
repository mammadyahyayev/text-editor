import { TextComponent } from "./components/textComponent";

// DOM Elements
const editorEl = document.getElementById("editor") as HTMLDivElement;
const insertTextElementBtn = document.getElementById(
  "insert-text-btn"
) as HTMLButtonElement;

insertTextElementBtn.addEventListener("click", () => {
  const textComponent = new TextComponent();
  const textElement = textComponent.create("p")

  editorEl.appendChild(textElement);
});