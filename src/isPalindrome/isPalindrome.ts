const normalizeString = (str: string): string => {
  const regex = /[^A-Za-z0-9]/g;

  return str.toLowerCase().replace(regex, "");
};
const reverseString = (str: string): string =>
  normalizeString(str).split("").reverse().join("");

export const isPalindrome = (phrase: string): boolean =>
  normalizeString(phrase) === reverseString(phrase);
