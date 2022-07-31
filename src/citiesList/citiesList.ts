export const getTopCities = (citiesList: string[], top: number) => {
  const uniqueCities = [...new Set(citiesList)];

  const filteredCities = uniqueCities.map((city) => ({
    name: city,
    number: citiesList.filter((item) => item === city).length,
  }));

  const topCities = filteredCities.sort((a, b) => b.number - a.number);

  return topCities.map((city) => city.name).slice(0, top);
};
