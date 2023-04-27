import { IllegalArgumentException } from "../exception/illegalArgumentException";

/**
 * Splits string into 3 parts.
 * 
 * @param str a string value
 * @param begin a starting index, inclusive
 * @param end an ending index, inclusive
 * @returns string array with 3 parts
 */
export function splitByIndex(
  str: string,
  begin: number,
  end: number
): string[] {
  if (!str) {
    throw new IllegalArgumentException("str is required for splitting");
  }

  if (begin < 0 || end < 0 || begin > end) {
    throw new IllegalArgumentException(
      `indecies (begin:${begin}, end:${end}) are wrong! `
    );
  }

  const length = str.length;

  const untilBegin = str.substring(0, begin + 1);
  const range = str.substring(begin, end + 1);
  const afterEnd = str.substring(end, length);

  return [untilBegin, range, afterEnd];
}
