import { isPalindrome } from "./isPalindrome";

describe.each`
  phrase                              | expectedResult
  ${"A man, a plan, a canal. Panama"} | ${true}
  ${"I am an... namaI"}               | ${true}
`("getPairs", ({ phrase, expectedResult }) => {
  test("if is Palindrome", () => {
    expect(isPalindrome(phrase)).toEqual(expectedResult);
  });
});
