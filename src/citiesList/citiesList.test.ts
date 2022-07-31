import { getTopCities } from "./citiesList";

const citiesList = [
  "nashville",
  "nashville",
  "los angeles",
  "nashville",
  "memphis",
  "barcelona",
  "los angeles",
  "sevilla",
  "madrid",
  "canary islands",
  "barcelona",
  "madrid",
  "nashville",
  "barcelona",
  "london",
  "berlin",
  "madrid",
  "nashville",
  "london",
  "madrid",
];

const expectedResult = [
  "nashville",
  "madrid",
  "barcelona",
  "los angeles",
  "london",
];

describe.each`
  top
  ${5}
  ${3}
  ${2}
`("getTopCities", ({ top }) => {
  test(`get top ${top}`, () => {
    expect(getTopCities(citiesList, top)).toEqual(expectedResult.slice(0, top));
  });
});
