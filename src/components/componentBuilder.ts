import { HeadingTags, HtmlTag, HtmlTags } from "../model/htmlTag";
import { Component } from "./component";
import { HeaderComponent } from "./headerComponent";
import { TextComponent } from "./textComponent";

export class ComponentBuilder {
  private _type: HtmlTags;
  private _name: string;
  private _id: string;
  private _className: string;
  private _children: Component[];

  constructor() {}

  type(tag: HtmlTags): ComponentBuilder {
    this._type = tag;
    return this;
  }

  name(name: string): ComponentBuilder {
    this._name = name;
    return this;
  }

  id(id: string): ComponentBuilder {
    this._id = id;
    return this;
  }

  className(className: string): ComponentBuilder {
    this._className = className;
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
    } else if (Object.values(HeadingTags).includes(this._type as HeadingTags)) {
      component = new HeaderComponent(this._type);
    }

    component.setId(this._id);
    component.setName(this._name);
    component.addClassName(this._className);
    component.addChildren(this._children);

    return component;
  }
}
