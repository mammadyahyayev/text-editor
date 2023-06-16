import { Component } from "../components/component";
import { ComponentBuilder } from "../components/componentBuilder";
import { IllegalArgumentException } from "../exception/illegalArgumentException";
import { HtmlEvent } from "../model/htmlEvent";
import { HtmlTag } from "../model/htmlTag";
import { logger } from "../utils/logger";
import { SelectionApi } from "../utils/selectionApi";
import { Command } from "./command";
import { Tree } from "./tree";

export class Editor implements Tree {
  private readonly components: Component[] = [];
  private readonly _editorHtmlElement: HTMLDivElement;

  private static _instance: Editor;

  private _previousComponent: Component;
  private _currentComponent: Component;
  private _size: number = 0;

  private constructor(editorId: string) {
    if (!editorId && editorId.trim() === "") {
      throw new IllegalArgumentException(
        "Please define editor element in your HTML file!"
      );
    }

    const editorEl = document.getElementById(editorId) as HTMLDivElement;
    if (!editorEl) {
      throw new IllegalArgumentException(
        "There is no element with id => " + editorId
      );
    }

    this._editorHtmlElement = editorEl;

    this.addCommands();
  }

  static getInstance(editorId: string): Editor {
    if (!Editor._instance) {
      Editor._instance = new Editor(editorId);
    }

    return Editor._instance;
  }

  first(): Component | null {
    if (this.components.length == 0) {
      return null;
    }

    return this.components[0];
  }

  last(): Component | null {
    if (this.components.length == 0) {
      return null;
    }

    return this.components[this.components.length - 1];
  }

  addComponent(component: Component): void {
    if (!component) {
      throw new IllegalArgumentException("component must be not null!");
    }

    this.setCurrentComponent(component);

    this.components.push(component);
    this._size++;

    this._editorHtmlElement.appendChild(component.html); // TODO: Find good way to append child
  }

  private setCurrentComponent(component: Component): void {
    this._currentComponent?.removeClass("current");
    component.addClass("current", true);
    this._currentComponent = component;
  }

  addComponentBeforeCurrent(component: Component): void {
    if (!component) {
      throw new IllegalArgumentException("component cannot be null!");
    }

    this._previousComponent = this._currentComponent.copy();

    this.components.push(component);
    this._size++;

    this._previousComponent.insertBefore(component);
    this.setCurrentComponent(component);
  }

  addComponentAfterCurrent(component: Component): void {
    this._previousComponent = this._currentComponent.copy();

    this.setCurrentComponent(component);

    this.components.push(component);
    this._size++;

    this._previousComponent.insertAfter(this._currentComponent);
  }

  replaceComponent(newComponent: Component, oldComponent: Component): void {
    const index = this.components.findIndex(
      (component) => component.uuid == oldComponent.uuid
    );

    if (index == -1) {
      throw new Error(
        `Component ${oldComponent.uuid} isn't exist on components list!`
      );
    }

    this.components[index] = newComponent;
    this.addComponentBeforeCurrent(newComponent);
    newComponent.textContent = oldComponent.textContent;
    oldComponent.remove();
  }

  findComponent(componentId: string): Component | undefined {
    return this.components.find((c) => c.uuid === componentId);
  }

  findComponentIndex(componentId: string): number {
    return this.components.findIndex((c) => c.uuid === componentId);
  }

  getCurrentComponent(): Component {
    return this._currentComponent;
  }

  size(): number {
    return this._size;
  }

  private changeCurrentElement(e: Event): void {
    const clickedElement = e.target as HTMLElement;
    const clickedComponent = this.components.find(
      (c) => c.uuid == clickedElement.id
    );

    if (!clickedComponent) {
      return;
    }

    if (clickedComponent == this._currentComponent) {
      return;
    }

    this._currentComponent.removeClass("current");

    clickedComponent.addClass("current", true);

    this._currentComponent = clickedComponent;
  }

  private enterKeyword(): void {
    const textContent = this._currentComponent?.textContent;

    const length = textContent?.length as number;

    const posRange = SelectionApi.getCursorPosition();
    if (!posRange) {
      return;
    }

    const text = new ComponentBuilder().type(HtmlTag.P).build();

    logger.debug("PosRange", posRange);
    if (posRange.begin === 0 && posRange.end === 0 && textContent) {
      this.addComponentBeforeCurrent(text);
    } else if (posRange.begin == length) {
      this.addComponentAfterCurrent(text);
    } else {
      text.html.textContent = textContent
        ? textContent.substring(posRange.begin, length)
        : "";

      this.addComponentAfterCurrent(text);

      if (this._previousComponent.html.textContent) {
        const prevCompText = this._previousComponent.html.textContent;
        this._previousComponent.html.textContent = prevCompText.substring(
          0,
          posRange.begin
        );
      }
    }

    // set cursor position to new element
    SelectionApi.setCursorPositionTo(text.html);
  }

  private preventDragging(e: Event): void {
    e.preventDefault();
  }

  private onCaretPositionChanged(e: KeyboardEvent) {
    const currentElement = SelectionApi.getCurrentElementWhereCaretIs();
    if (!currentElement) return;

    let component = null;
    let componentIndex = -1;
    if (e.key === "ArrowUp") {
      componentIndex = this.findComponentIndex(currentElement.id);

      const prevComponentIndex =
        componentIndex - 1 <= 0 ? 0 : componentIndex - 1;

      component = this.components[prevComponentIndex];
    } else if (e.key === "ArrowDown") {
      componentIndex = this.findComponentIndex(currentElement.id);

      const nextComponentIndex = componentIndex + 1 >= this.size()
          ? this.size() - 1
          : componentIndex + 1;

      component = this.components[nextComponentIndex];
    }

    if (component) this.setCurrentComponent(component);
  }

  private addCommands() {
    const command = new Command();
    command.addCommand(
      this._editorHtmlElement,
      HtmlEvent.CLICK,
      this.changeCurrentElement.bind(this)
    );

    command.addCommand(
      this._editorHtmlElement,
      HtmlEvent.DRAG_START,
      this.preventDragging
    );

    command.addCommand(this._editorHtmlElement, HtmlEvent.KEY_DOWN, (e) => {
      const keyBoardEvent = e as KeyboardEvent;
      if (keyBoardEvent.key === "Enter" && !keyBoardEvent.shiftKey) {
        e.preventDefault();
        this.enterKeyword();
      }
    });

    command.addCommand(this._editorHtmlElement, HtmlEvent.KEY_DOWN, (e) => {
      this.onCaretPositionChanged(e as KeyboardEvent);
    });
  }
}
