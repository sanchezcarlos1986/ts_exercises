import { setPassword } from "./setPassword";

const result = ["nashville", "madrid", "barcelona", "los angeles", "london"];

describe.each`
  string                      | expectedPassword
  ${"this is my password"}    | ${"timp"}
  ${"another great Password"} | ${"agp"}
  ${"日本 は 大好き です"}    | ${"日は大で"}
`("setPassword", ({ string, expectedPassword }) => {
  test(`get "${expectedPassword}" password from "${string}"`, () => {
    expect(setPassword(string)).toEqual(expectedPassword);
  });
});
