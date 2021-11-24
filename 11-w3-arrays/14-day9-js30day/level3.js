import { countries } from "./data.js";

// Sort countries by capital, by population
console.log(
  "--------------------------- SORT COUNTRIES BY CAPITAL NAMES ---------------------------\n"
);
countries
  .sort((c1, c2) => (c1.capital > c2.capital ? 1 : -1))
  .forEach((item, index) =>
    console.log(
      `${index + 1}/ '${item.capital}' is the capital of '${item.name}'\n`
    )
  );

console.log(
  " --------------------------- SORT COUNTRIES BY POPULATION ---------------------------\n"
);
countries
  .sort((c1, c2) => (c1.population > c2.population ? 1 : -1))
  .forEach((item, index) =>
    console.log(
      `${index + 1}/ '${item.population}' is the population of '${item.name}'\n`
    )
  );

console.log(
  " --------------------------- QUERY MOST SPOKEN LANGUAGES AND MOST POPULATED COUNTRY ---------------------------\n"
);
// Get a number of most spoken languages
const mostOfCountries = (data, quanityOption, param, displayKeyStr) => {
  if (Object.keys(data).length < quanityOption || quanityOption < 0)
    return "Invalid quantity!";

  // create a counting object for countries' languages
  const countResultObj = data.reduce((frequency, country) => {
    if (Array.isArray(country[param])) {
      country[param].forEach((lg) => {
        if (!frequency[lg]) frequency[lg] = 1;
        else frequency[lg]++;
      });
    } else {
      if (!frequency[country.name])
        frequency[country.name] = country.population;
    }
    return frequency;
  }, {});

  // sort it from large to small
  const sortByFrequency = Object.entries(countResultObj).sort((lg1, lg2) =>
    lg1[1] > lg2[1] ? -1 : 1
  );

  // slicing according to the quantity and return the result
  return sortByFrequency.slice(0, quanityOption).reduce((toObjArray, item) => {
    let tempObj = {};
    tempObj["country"] = item[0];
    tempObj[displayKeyStr] = item[1];
    toObjArray.push(tempObj);
    return toObjArray;
  }, []);
};
console.log(
  "Most spoken laguages:",
  mostOfCountries(countries, 5, "languages", "count")
);
console.log(
  "Most populated country:",
  mostOfCountries(countries, 5, "population", "population")
);

// ! IT IS JUST TOO LONG, BUT NOT DIFFICULT, SO I WONT DO IT
// Try to develop a program which calculate measure of central tendency of a
// sample(mean, median, mode) and measure of variability(range, variance,
// standard deviation).In addition to those measures find the min, max, count,
// percentile, and frequency distribution of the sample.You can create an object
// called statistics and create all the functions which do statistical
// calculations as method for the statistics object.Check the output below.
