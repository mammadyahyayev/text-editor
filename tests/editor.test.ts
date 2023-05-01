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
    editorEl.id = "text-editor";
    document.body.appendChild(editorEl);
  });

  test("should return size of editor after adding text component", () => {
    const textComponent = new TextComponent(HtmlTag.P);

    const editor = Editor.getInstance("text-editor");
    editor.addComponent(textComponent);

    expect(editor.size()).toBe(1);
    expect(textComponent.classList).toBe("paragraph current");
  });

  test("should throw error when passing null id as editor element", () => {
    expect(() => Editor.getInstance("")).toThrow(IllegalArgumentException);
  });

  test("should throw error when passing non exist id as editor element", () => {
    expect(() => Editor.getInstance("non-exist-element")).toThrow(
      IllegalArgumentException
    );
  });

  // test("should add component before", () => {
  //   const firstComponent = new TextComponent(HtmlTag.P);
  //   const secondComponent = new TextComponent(HtmlTag.P);

  //   const editor = new Editor("editor");
  //   editor.addComponent2(firstComponent);
  //   editor.addComponentBefore(secondComponent, firstComponent);

  //   expect(editor.size()).toBe(2);
  //   expect(secondComponent.classList).toBe("paragraph current");
  //   expect(editor.first()).toBe(secondComponent);
  //   expect(editor.last()).toBe(firstComponent);
  // });

  // test("should add component after", () => {
  //   const firstComponent = new TextComponent(HtmlTag.P);
  //   const secondComponent = new TextComponent(HtmlTag.P);

  //   const editor = new Editor("editor");
  //   editor.addComponent2(secondComponent);
  //   editor.addComponentAfter(firstComponent, secondComponent);

  //   expect(editor.size()).toBe(2);
  //   expect(firstComponent.classList).toBe("paragraph current");
  //   expect(editor.first()).toBe(secondComponent);
  //   expect(editor.last()).toBe(firstComponent);
  // });
});
