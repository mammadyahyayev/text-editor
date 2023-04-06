export class Component {
  private uuid: string;
  private name: string;

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getUUID(): string {
    return this.uuid;
  }

  public setUUID(uuid: string) {
    this.uuid = uuid;
  }
}
