/**
 * @jest-environment jsdom
 */

import { ComponentBuilder } from "../src/components/componentBuilder";
import { HtmlTag } from "../src/model/htmlTag";

describe("component test", () => {
  it("create a component", () => {
    const component = new ComponentBuilder()
      .type(HtmlTag.P)
      .name("Test Component")
      .id("test")
      .className("test-component")
      .build();

    expect(component.html.id).toBe("test");
    expect(component.html.title).toBe("Test Component");
    expect(component.html.classList).toContain("test-component");
  });

  it("create a component with its children", () => {
    const component = new ComponentBuilder()
      .type(HtmlTag.P)
      .name("Test Component")
      .id("test")
      .className("test-component")
      .children(
        new ComponentBuilder().type(HtmlTag.P).build(),
        new ComponentBuilder().type(HtmlTag.P).build()
      )
      .build();

    expect(component.getChildrenCount()).toBe(2);
  });
});
