import { HeadingTags, HtmlTag, HtmlTags } from "../model/htmlTag";
import { Component } from "./component";
import { HeaderComponent } from "./headerComponent";
import { TextComponent } from "./textComponent";

export class ComponentBuilder {
  private _type: HtmlTags;
  private _componentName: string;
  private _id: string;
  private _componentClass: string;
  private _children: Component[];

  constructor() {}

  type(tag: HtmlTags): ComponentBuilder {
    this._type = tag;
    return this;
  }

  name(componentName: string): ComponentBuilder {
    this._componentName = componentName;
    return this;
  }

  id(id: string): ComponentBuilder {
    this._id = id;
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

    if (this._type === HtmlTag.P) {
      component = new TextComponent(this._type);
    } else if(this._type === HeadingTags.H1) {
      component = new HeaderComponent(this._type);
    }

    component.setId(this._id);
    component.setName(this._componentName);
    component.addClassName(this._componentClass);
    component.addChildren(this._children);

    return component;
  }
}
