import { Component } from "../components/component";
import { TextComponent } from "../components/textComponent";
import { IllegalArgumentException } from "../exception/illegalArgumentException";
import { HtmlTag } from "../model/htmlTag";
import { Tree } from "./tree";

export class Editor implements Tree {
  private readonly components: Component[] = [];
  private readonly defaultComponent: TextComponent;
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
    this.defaultComponent = new TextComponent(HtmlTag.P);
  }

  public addComponent(component: Component): void {
    if (!component) {
      throw new IllegalArgumentException("component cannot be null!");
    }

    this.components.push(component);
    this.editorHtmlElement.appendChild(component.htmlElement);
    component.htmlElement.focus();
    component.htmlElement.classList.add("current"); //TODO: Move this lines into component itself to ensure encapsulation

    this._currentComponent = component;
    this._size++;
  }

  public export(): string {
    throw new Error("Not implemented!");
  }

  public import(json: string): void {
    throw new Error("Not implemented!");
  }

  public get size(): number {
    return this._size;
  }

  public get currentComponent(): Component {
    return this._currentComponent;
  }
}
