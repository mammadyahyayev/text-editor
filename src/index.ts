import { TextComponent } from "./components/textComponent";

//TODO: Reasearch about data- attributes in html, how to define them in TS

// DOM Elements
const editorEl = document.getElementById("editor") as HTMLDivElement;
const addBlockBtn = document.getElementById(
  "add-block-btn"
) as HTMLButtonElement;

addBlockBtn.addEventListener("click", () => {
  // const textElement = document.createElement("p");
  // textElement.textContent = "This is paragraph";
  // textElement.classList.add("paragraph");
  // textElement.contentEditable = "true";

  const textComponent = new TextComponent();
  const textElement = textComponent.create("p")

  editorEl.appendChild(textElement);
});
