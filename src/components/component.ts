// import { StyleType } from "../model/styleType";
import { IllegalArgumentException } from "../exception/illegalArgumentException";
import { StyleType } from "../model/styleType";
import { UuidGenerator } from "../utils/uuidGenerator";

export class Component {
  private static readonly UUID_LENGTH: number = 5;

  private _uuid: string;
  private _html: HTMLElement;

  private _id: string = "";
  private _classList: string[] = [];
  private _name: string = "";

  private _childrenCount: number = 0;

  constructor() {
    this._uuid = UuidGenerator.generateUuid(Component.UUID_LENGTH);
    this._id = this._uuid;
  }

  public get uuid(): string {
    return this._uuid;
  }

  public get html(): HTMLElement {
    return this._html;
  }

  public set html(html: HTMLElement) {
    this._html = html.cloneNode() as HTMLElement;
  }

  setName(name: string): void {
    if (!name) return;

    this._html.title = name;
    this._name = name;
  }

  setId(id: string): void {
    if (!id) return;

    this._html.id = id;
    this._id = id;
  }

  addClassName(className: string): void {
    if (!className) return;

    this._html.classList.add(className);
    this._classList.push(className);
  }

  addChildren(children: Component[]): void {
    if (!children) return;

    children.forEach((child) => {
      if (child._html) {
        this._html.appendChild(child._html);
        this._childrenCount++;
      }
    });
  }

  getChildrenCount(): number {
    return this._childrenCount;
  }

  copy(): Component {
    return Object.assign(new Component(), this);
  }

  addClass(className: string, focus = false): void {
    if (!className) {
      throw new IllegalArgumentException("className cannot be null");
    }

    this._html.classList.add(className);

    if (focus) {
      this._html.focus();
    }
  }

  get name(): string {
    return this._name;
  }

  get id(): string {
    return this._id
  }

  get classList(): string[] {
    return this._classList;
  }

  remove(): void {
    this._html.remove();
  }

  removeClass(className: string): void {
    if (!className) {
      throw new IllegalArgumentException("className cannot be null");
    }

    this._html.classList.remove(className);
  }

  addId(id: string): void {
    if (!id) {
      throw new IllegalArgumentException("id cannot be null");
    }

    this._html.id = id;
  }

  addStyle(styleType: StyleType, value: StyleType): void {
    this._html.style.setProperty(styleType, value);
  }

  get textContent(): string | null {
    return this._html.textContent;
  }

  set textContent(text: string | null) {
    this._html.textContent = text ? text : "";
  }

  insertAfter(component: Component): void {
    this._html.insertAdjacentElement("afterend", component._html);
  }

  insertBefore(component: Component): void {
    this._html.insertAdjacentElement("beforebegin", component._html);
  }
}
