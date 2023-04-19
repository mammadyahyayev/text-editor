/**
 * @jest-environment jsdom
 */
import { UUIDGenerator } from "../src/utils/uuidGenerator";

describe("testing UUIDGenerator", () => {
  test("UUID len should be 20 and not empty", () => {
    const uuid: string = UUIDGenerator.generateUUID();
    expect(uuid).not.toBeFalsy();
    expect(uuid.length).toBe(20);
  });
});
