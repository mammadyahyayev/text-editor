import { Component } from "../components/component";
import { TextComponent } from "../components/textComponent";
import { IllegalArgumentException } from "../exception/illegalArgumentException";
import { HtmlTag } from "../model/htmlTag";
import { logger } from "../utils/logger";
import { SelectionApi } from "../utils/selectionApi";
import { Tree } from "./tree";

export class Editor implements Tree {
  private readonly components: Component[] = [];
  private readonly editorHtmlElement: HTMLDivElement;

  private _previousComponent: Component;
  private _currentComponent: Component;
  private _size: number = 0;

  constructor(editorId: string) {
    if (!editorId && editorId.trim() === "") {
      throw new IllegalArgumentException(
        "Please specify editor element in your HTML file!"
      );
    }

    const editorEl = document.getElementById(editorId) as HTMLDivElement;
    if (!editorEl) {
      throw new IllegalArgumentException(
        "There is no element with id => " + editorId
      );
    }

    this.editorHtmlElement = editorEl;
    this.click();
    this.arrowKeywords();
    this.enterKeyword();
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
      throw new IllegalArgumentException("component cannot be null!");
    }

    // this._previousComponent = this._currentComponent?.copy();

    this._currentComponent?.htmlElement.classList.remove("current");

    component.htmlElement.focus();
    component.htmlElement.classList.add("current"); //TODO: Move this lines into component itself to ensure encapsulation

    this._currentComponent = component;

    this.components.push(this._currentComponent);

    this.editorHtmlElement.appendChild(this._currentComponent.htmlElement);

    this._size++;
  }

  addComponentBeforeCurrent(component: Component): void {
    if (!component) {
      throw new IllegalArgumentException("component cannot be null!");
    }

    this._previousComponent = this._currentComponent.copy();

    this._currentComponent?.htmlElement.classList.remove("current");

    component.htmlElement.focus();
    component.htmlElement.classList.add("current"); //TODO: Move this lines into component itself to ensure encapsulation

    this._currentComponent = component;

    this.components.push(this._currentComponent);

    this.editorHtmlElement.insertBefore(
      this._currentComponent.htmlElement,
      this._previousComponent.htmlElement
    );

    this._size++;
  }

  addComponentAfterCurrent(component: Component): void {
    if (!component) {
      throw new IllegalArgumentException("component cannot be null!");
    }

    this._previousComponent = this._currentComponent.copy();

    this._currentComponent?.htmlElement.classList.remove("current");

    component.htmlElement.focus();
    component.htmlElement.classList.add("current"); //TODO: Move this lines into component itself to ensure encapsulation

    this._currentComponent = component;

    this.components.push(this._currentComponent);

    this._previousComponent.htmlElement.insertAdjacentElement(
      "afterend",
      this._currentComponent.htmlElement
    );

    this._size++;
  }

  findComponent(componentId: string): Component | undefined {
    return this.components.find((c) => c.uuid == componentId);
  }

  getFocusedComponent(): Component {
    return this._currentComponent;
  }

  size(): number {
    return this._size;
  }

  private click(): void {
    this.editorHtmlElement.addEventListener("click", (e) => {
      const clickedElement = e.target as HTMLElement;
      const clickedComponent = this.components.find(
        (c) => c.uuid == clickedElement.id
      );

      if (clickedComponent && clickedComponent == this._currentComponent) {
        return;
      }

      if (clickedComponent) {
        this._currentComponent.htmlElement.classList.remove("current");

        clickedComponent.htmlElement.focus();
        clickedComponent.htmlElement.classList.add("current");

        this._currentComponent = clickedComponent;
      }
    });
  }

  private arrowKeywords(): void {
    this.editorHtmlElement.addEventListener("keydown", (e) => {
      if (e.code == "ArrowUp") {
        logger.debug("keydown event: ", e);
      }
    });
  }

  private enterKeyword(): void {
    this.editorHtmlElement.addEventListener("keydown", (e) => {
      if (e.key == "Enter" && !e.shiftKey) {
        e.preventDefault();
        const textContent = this._currentComponent.htmlElement.textContent;
        
        if (!textContent) {
          return;
        }

        const length = textContent?.length as number;

        const posRange = SelectionApi.getCursorPosition();
        if (!posRange) {
          return;
        }

        const text = new TextComponent(HtmlTag.P);

        if (posRange.begin == 0) {
          this.addComponentBeforeCurrent(text);
        } else if (posRange.begin == length) {
          this.addComponentAfterCurrent(text);
        } else {
          text.htmlElement.textContent = textContent?.substring(
            posRange.begin,
            length
          );

          this.addComponentAfterCurrent(text);

          if(this._previousComponent.htmlElement.textContent) {
            const prevCompText = this._previousComponent.htmlElement.textContent;
            this._previousComponent.htmlElement.textContent = prevCompText.substring(0, posRange.begin);
          }
        }

        // set cursor position to new element
        const range = document.createRange();
        range.selectNodeContents(text.htmlElement);
        range.collapse(false);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    });
  }
}
