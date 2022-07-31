import { openCloseCharacters } from "./openCloseCharacters";

describe.each`
  characters    | expectedResult
  ${"([{}])"}   | ${true}
  ${"([{])"}    | ${false}
  ${"[[{(}]])"} | ${true}
`("openCloseCharacters", ({ characters, expectedResult }) => {
  test(`return a boolean if characters match`, () => {
    expect(openCloseCharacters(characters)).toEqual(expectedResult);
  });
});
