/**
 * @jest-environment jsdom
 */

import { Editor } from "../src/tree/editor";
import { IllegalArgumentException } from "../src/exception/illegalArgumentException";
import { HtmlTag } from "../src/model/htmlTag";
import { ComponentBuilder } from "../src/components/componentBuilder";

describe("testing Editor Tree", () => {
  const editorId = "text-editor";

  beforeAll(() => {
    const editorEl = document.createElement("div");
    editorEl.id = editorId;
    document.body.appendChild(editorEl);
  });

  beforeEach(() => {
    const editor = document.getElementById(editorId);
    while (editor?.firstChild) {
      editor.removeChild(editor.firstChild);
    }
  });

  test("should throw error when passing null id as editor element", () => {
    expect(() => Editor.getInstance("")).toThrow(IllegalArgumentException);
  });

  test("should throw error when passing non exist id as editor element", () => {
    expect(() => Editor.getInstance("non-exist-element")).toThrow(
      IllegalArgumentException
    );
  });

  test("add component with children", () => {
    const component = new ComponentBuilder()
      .type(HtmlTag.P)
      .name("Test Component")
      .id("test")
      .children(
        new ComponentBuilder().type(HtmlTag.P).build(),
        new ComponentBuilder().type(HtmlTag.P).build(),
        new ComponentBuilder().type(HtmlTag.P).build()
      )
      .build();

    const editor = Editor.getInstance(editorId);
    editor.addComponent(component);

    expect(editor.size()).toBe(1);
    expect(component.classList).toBe("paragraph current");
    expect(component.getChildrenCount()).toBe(3);
  });
});
