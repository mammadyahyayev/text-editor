import { ComponentBuilder } from "./components/componentBuilder";
import { HeadingTags, HtmlTag } from "./model/htmlTag";
import { AlignmentTypes, StyleTypes } from "./model/styleType";
import { Editor } from "./tree/editor";
import { logger } from "./utils/logger";
import { SelectionApi } from "./utils/selectionApi";

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

const boldTextElementBtn = document.getElementById(
  "bold-text-btn"
) as HTMLButtonElement;

const h1ElementBtn = document.getElementById("h1-btn") as HTMLButtonElement;
const h2ElementBtn = document.getElementById("h2-btn") as HTMLButtonElement;
const h3ElementBtn = document.getElementById("h3-btn") as HTMLButtonElement;

function start(): void {
  const editor = Editor.getInstance("editor");
  const textComponent = new ComponentBuilder().type(HtmlTag.P).build();
  editor.addComponent(textComponent);
}

insertTextElementBtn.addEventListener("click", () => {
  const editor = Editor.getInstance("editor");
  const textComponent = new ComponentBuilder().type(HtmlTag.P).build();
  editor.addComponent(textComponent);
});

start();

//#region Alignment Operations
leftAlignTextElementBtn.addEventListener("click", () => {
  const editor = Editor.getInstance("editor");
  const focusedComponent = editor.getFocusedComponent();
  focusedComponent.addStyle(StyleTypes.TEXT_ALIGN, AlignmentTypes.LEFT);
});

centerAlignTextElementBtn.addEventListener("click", () => {
  const editor = Editor.getInstance("editor");
  const focusedComponent = editor.getFocusedComponent();
  focusedComponent.addStyle(StyleTypes.TEXT_ALIGN, AlignmentTypes.CENTER);
});

rightAlignTextElementBtn.addEventListener("click", () => {
  const editor = Editor.getInstance("editor");
  const focusedComponent = editor.getFocusedComponent();
  focusedComponent.addStyle(StyleTypes.TEXT_ALIGN, AlignmentTypes.RIGHT);
});
//#endregion

//#region Headers
h1ElementBtn.addEventListener("click", () => {
  const editor = Editor.getInstance("editor");

  const focusedComponent = editor.getFocusedComponent();
  const h1Component = new ComponentBuilder()
    .type(HeadingTags.H1)
    .id(focusedComponent.id)
    .build();

  editor.replaceComponent(h1Component, focusedComponent);
});

h2ElementBtn.addEventListener("click", () => {
  const editor = Editor.getInstance("editor");

  const focusedComponent = editor.getFocusedComponent();
  const h2Component = new ComponentBuilder()
    .type(HeadingTags.H2)
    .id(focusedComponent.id)
    .build();

  editor.replaceComponent(h2Component, focusedComponent);
});

h3ElementBtn.addEventListener("click", () => {
  const editor = Editor.getInstance("editor");

  const focusedComponent = editor.getFocusedComponent();
  const h3Component = new ComponentBuilder()
    .type(HeadingTags.H3)
    .id(focusedComponent.id)
    .build();

  editor.replaceComponent(h3Component, focusedComponent);
});
//#endregion

//#region Text Format Operators

boldTextElementBtn.addEventListener("click", () => {
  logger.debug("Window selection: ", window.getSelection());
  logger.debug("cursor position selection: ", SelectionApi.getCursorPosition());
  logger.debug("selection api selection: ", SelectionApi.getSelection());
  // const selection = SelectionApi.getSelection();
  // if (selection === null) return;

  // logger.debug("WIndow selection:", window.getSelection());

  // const parentElement = window.getSelection()?.anchorNode?.parentElement;
  // let sumOfLength = 0;
  // parentElement?.childNodes.forEach(node => {
  //   if(node.textContent) {
  //     sumOfLength += node.textContent.length;
  //   }

  //   if(selection.begin < sumOfLength) {
  //     logger.debug("You are in the node that you want")
  //   }
  // })

  // const textContent = window.getSelection()?.anchorNode?.textContent;
  // if (!textContent) {
  //   return;
  // }

  // if (!parentElement) {
  //   return;
  // }

  // const contentNodes = splitByIndex(
  //   textContent,
  //   selection.begin,
  //   selection.end
  // );

  // while (parentElement.firstChild) {
  //   parentElement.removeChild(parentElement.firstChild);
  // }

  // contentNodes?.forEach((node) => {
  //   if (node.isInRange) {
  //     const strongComponent = new InlineBlockComponent(
  //       HtmlTag.STRONG,
  //       node.text
  //     );

  //     parentElement.appendChild(strongComponent.html);
  //   } else {
  //     const textNode = DomApi.createTextNode(node.text);
  //     parentElement.appendChild(textNode);
  //   }
  // });
});

//#endregion
