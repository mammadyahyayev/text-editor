import { HtmlTag } from "../model/htmlTag";
import { Component } from "./component";
import { TextComponent } from "./textComponent";

export class ComponentBuilder {
  private _tag: HtmlTag;
  private _componentName: string;
  private _componentId: string;
  private _componentClass: string;
  private _children: Component[];

  constructor() {}

  type(tag: HtmlTag): ComponentBuilder {
    this._tag = tag;
    return this;
  }

  name(componentName: string): ComponentBuilder {
    this._componentName = componentName;
    return this;
  }

  id(id: string): ComponentBuilder {
    this._componentId = id;
    return this;
  }

  className(componentClassName: string): ComponentBuilder {
    this._componentClass = componentClassName;
    return this;
  }

  children(...children: Component[]): ComponentBuilder {
    this._children = children;
    return this;
  }

  build(): Component {
    let component = new Component();

    if (this._tag === HtmlTag.P) {
      component = new TextComponent(this._tag);
    }

    component.setId(this._componentId);
    component.setName(this._componentName);
    component.setClassName(this._componentClass);
    component.addChildren(this._children);

    return component;
  }
}
