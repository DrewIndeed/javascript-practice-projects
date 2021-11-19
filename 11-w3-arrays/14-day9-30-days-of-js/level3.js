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
  " --------------------------- QUERY MOST SPOKEN LANGUAGES ---------------------------\n"
);
// Get a number of most spoken languages
const mostSpokenLanguages = (data, quanityOption) => {
  if (Object.keys(data).length < quanityOption || quanityOption < 0)
    return "Invalid quantity!";

  // create a counting object for countries' languages
  const countResultObj = data.reduce((frequency, country) => {
    country.languages.forEach((lg) => {
      if (!frequency[lg]) frequency[lg] = 1;
      else frequency[lg]++;
    });
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
    tempObj["count"] = item[1];
    toObjArray.push(tempObj);
    return toObjArray;
  }, []);
};
console.log(mostSpokenLanguages(countries, 5));
