/**
 * @jest-environment jsdom
 */

import { IllegalArgumentException } from "../src/exception/illegalArgumentException";
import { splitByIndex } from "../src/utils/stringUtils";

describe("testing String Utils", () => {
  test("should return three parts", () => {
    const str = "This is a simple text";

    const result = splitByIndex(str, 3, 9);

    expect(result).toBeTruthy();

    if (result) {
      expect(result.length).toBe(3);
      expect(result[0].text).toBe("Thi");
      expect(result[0].isInRange).toBe(false);

      expect(result[1].text).toBe("s is a");
      expect(result[1].isInRange).toBe(true);

      expect(result[2].text).toBe(" simple text");
      expect(result[2].isInRange).toBe(false);
    }
  });

  test("should return one parts", () => {
    const str = "This is a simple text";

    const result = splitByIndex(str, 0, 0);
    expect(result).toBeNull();
  });

  test("should throw error when indices are bigger than length of text", () => {
    const str = "This is a simple text";

    expect(() => splitByIndex(str, str.length, str.length + 2)).toThrow(IllegalArgumentException);
  });

  test("should return two parts", () => {
    const str = "This is a simple text";

    const result = splitByIndex(str, str.length - 1, str.length);

    expect(result).toBeTruthy();

    if (result) {
      expect(result.length).toBe(2);
      expect(result[0].text).toBe("This is a simple tex");
      expect(result[0].isInRange).toBe(false);

      expect(result[1].text).toBe("t");
      expect(result[1].isInRange).toBe(true);
    }
  });
});
