export class UuidGenerator {
  private static readonly SYMBOLS: string =
    "abcdefghijklmnopqrstuwxvyz123456789";

  public static generateUuid(length: number): string {
    let uuid: string = "";

    while (uuid.length < length) {
      const min = 0;
      const max = UuidGenerator.SYMBOLS.length;
      const randNum = Math.floor(Math.random() * (max - min)) + min;
      uuid += UuidGenerator.SYMBOLS[randNum];
    }

    return uuid;
  }
}
