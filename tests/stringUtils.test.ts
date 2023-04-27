/**
 * @jest-environment jsdom
 */

import { splitByIndex } from "../src/utils/stringUtils";

describe("testing Editor Tree", () => {
  test("should return 3 parts", () => {
    const str = "This is a simple text";
    const strs: string[] = splitByIndex(str, 4, 9);
    expect(strs).toBeTruthy();
    expect(strs.length).toBe(3);

    expect(strs[0]).toBe(str.substring(0, 5))
    expect(strs[1]).toBe(str.substring(4, 10))
    expect(strs[2]).toBe(str.substring(9, str.length))
  });
});
