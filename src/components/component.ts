export class Component {
  private _uuid: string;
  private _name: string;

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get uuid(): string {
    return this._uuid;
  }

  public set uuid(uuid: string) {
    this._uuid = uuid;
  }
}
