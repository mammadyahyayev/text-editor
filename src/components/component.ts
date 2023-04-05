class Component {
  private uuid: string;
  private name: string;

  public get getName(): string {
    return this.name;
  }

  public set setName(name: string) {
    this.name = name;
  }

  public get getUUID(): string {
    return this.uuid;
  }

  public set setUUID(uuid: string) {
    this.uuid = uuid;
  }
}
