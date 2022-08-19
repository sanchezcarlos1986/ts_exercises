import { prefix, findPhoneNumberByName } from "./findPhoneNumberByName";

describe.each`
  companyName     | expectedNumber
  ${"trabajando"} | ${8722252636}
  ${"eclass"}     | ${325277}
  ${"globant"}    | ${4562268}
  ${"uber"}       | ${8237}
`("findPhoneNumberByName", ({ companyName, expectedNumber }) => {
  test(`get phone number by company name: "${companyName}"`, () => {
    const expectedResult = `${prefix} ${expectedNumber}`;
    expect(findPhoneNumberByName(companyName)).toEqual(expectedResult);
  });
});
