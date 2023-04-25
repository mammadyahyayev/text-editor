import { Component } from "../components/component";
import { IllegalArgumentException } from "../exception/illegalArgumentException";
import { logger } from "../utils/logger";
import { Tree } from "./tree";

export class Editor implements Tree {
  private readonly components: Component[] = [];
  private readonly editorHtmlElement: HTMLDivElement;

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

    this._currentComponent?.htmlElement.classList.remove("current");

    component.htmlElement.focus();
    component.htmlElement.classList.add("current"); //TODO: Move this lines into component itself to ensure encapsulation

    this._currentComponent = component;

    this.components.push(this._currentComponent);
    this.editorHtmlElement.appendChild(this._currentComponent.htmlElement);
    this._size++;
  }

  size(): number {
    return this._size;
  }

  click(): void {
    this.editorHtmlElement.addEventListener("click", (e) => {
      const clickedElement = e.target as HTMLElement;
      const clickedComponent = this.components.find(
        (c) => c.uuid == clickedElement.id
      );

      logger.debug("Clicked element:", clickedElement);
      logger.debug("Clicked component:", clickedComponent);

      if (clickedComponent && clickedComponent == this._currentComponent) {
        return;
      }

      if (clickedComponent) {
        this._currentComponent.htmlElement.classList.remove("current");

        clickedComponent.htmlElement.focus();
        clickedComponent.htmlElement.classList.add("current");

        this._currentComponent = clickedComponent;
      }

      logger.debug("Current component: ", this._currentComponent);
    });
  }
}
