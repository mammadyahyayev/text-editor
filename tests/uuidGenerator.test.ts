/**
 * @jest-environment jsdom
 */
import { UuidGenerator } from "../src/utils/uuidGenerator";

describe("testing UUIDGenerator", () => {
  test("UUID length should be 20 and not empty", () => {
    const uuid: string = UuidGenerator.generateUuid(6);
    expect(uuid).not.toBeFalsy();
    expect(uuid.length).toBe(6);
  });
});
