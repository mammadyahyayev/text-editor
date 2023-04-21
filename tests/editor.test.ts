/**
 * @jest-environment jsdom
 */

import { Editor } from "../src/tree/editor";
import { IllegalArgumentException } from "../src/exception/illegalArgumentException";
import { TextComponent } from "../src/components/textComponent";
import { HtmlTag } from "../src/model/htmlTag";

describe("testing Editor Tree", () => {
  beforeAll(() => {
    const editorEl = document.createElement("div");
    editorEl.id = "editor";
    document.body.appendChild(editorEl);
  });

  test("should throw error when passing null id as editor element", () => {
    expect(() => new Editor("")).toThrow(IllegalArgumentException);
  });

  test("should throw error when passing non exist id as editor element", () => {
    expect(() => new Editor("non-exist-element")).toThrow(
      IllegalArgumentException
    );
  });

  test("should return size of editor after adding text component", () => {
    const textComponent = new TextComponent(HtmlTag.P);

    const editor = new Editor("editor");
    editor.addComponent(textComponent);

    expect(editor.size).toBe(1);
    expect(textComponent.htmlElement.classList.toString()).toBe("paragraph current")
  });
});
