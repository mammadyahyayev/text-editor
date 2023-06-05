import { IllegalArgumentException } from "../exception/illegalArgumentException";

type StrSplit = {
  text: string;
  isInRange: boolean;
};

/**
 * Splits string into 3 parts.
 *
 * @param str a string value
 * @param begin a starting index, inclusive
 * @param end an ending index, exclusive
 * @returns string array with splitted parts
 */
export function splitByIndex(
  str: string,
  begin: number,
  end: number
): StrSplit[] | null {
  if (!str) {
    throw new IllegalArgumentException("str is required for splitting");
  }

  const length = str.length;
  if (begin < 0 || end < 0 || begin > end || begin >= length || end > length) {
    throw new IllegalArgumentException(
      `indecies (str length:${length} begin:${begin}, end:${end}) are wrong! `
    );
  }

  if (begin === end) {
    return null;
  }

  const strSplit: StrSplit[] = [];

  const untilBegin = str.substring(0, begin);
  if (untilBegin) {
    strSplit.push({ text: untilBegin, isInRange: false });
  }

  const range = str.substring(begin, end);
  if (range) {
    strSplit.push({ text: range, isInRange: true });
  }

  const afterEnd = str.substring(end, length);
  if (afterEnd) {
    strSplit.push({ text: afterEnd, isInRange: false });
  }

  return strSplit;
}
