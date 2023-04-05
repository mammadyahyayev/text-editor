class UUIDGenerator {
  private static readonly letters: string = "abcdefghijklmnopqrstuwxvyz";

  public static generateUUID(): string {
    let uuid: string = "";

    while (uuid.length < 20) {
      const min = 0;
      const max = UUIDGenerator.letters.length;
      const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
      uuid += UUIDGenerator.letters[randNum];
    }

    return uuid;
  }
}

