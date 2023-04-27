import { StyleType } from "../model/styleType";
import { UUIDGenerator } from "../utils/uuidGenerator";

export class Component {
  private _uuid: string;
  private _name: string;
  private _htmlElement: HTMLElement;

  constructor() {
    this._uuid = UUIDGenerator.generateUUID();
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get uuid(): string {
    return this._uuid;
  }

  public get htmlElement(): HTMLElement {
    return this._htmlElement;
  }

  public set htmlElement(htmlElement: HTMLElement) {
    this._htmlElement = htmlElement;
  }

  applyStyle(styleType: StyleType, value: StyleType): void {
    this._htmlElement.style.setProperty(styleType, value);
  }
}
