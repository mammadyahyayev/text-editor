import { TextComponent } from "./components/textComponent";

// DOM Elements
const editorEl = document.getElementById("editor") as HTMLDivElement;
const addTextElementBtn = document.getElementById(
  "add-block-btn"
) as HTMLButtonElement;

addTextElementBtn.addEventListener("click", () => {
  const textComponent = new TextComponent();
  const textElement = textComponent.create("p")

  editorEl.appendChild(textElement);
});