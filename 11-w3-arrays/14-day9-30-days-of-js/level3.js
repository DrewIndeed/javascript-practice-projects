import { countries } from "./data.js";

// Sort countries by capital, by population
console.log("--------------------------- SORT COUNTRIES BY CAPITAL NAMES ---------------------------\n");
countries
  .sort((c1, c2) => (c1.capital > c2.capital ? 1 : -1))
  .forEach((item, index) =>
    console.log(
      `${index + 1}/ '${item.capital}' is the capital of '${item.name}'\n`
    )
);
	
console.log(" ---------------------------SORT COUNTRIES BY POPULATION ---------------------------\n");
countries
  .sort((c1, c2) => (c1.population > c2.population ? 1 : -1))
  .forEach((item, index) =>
    console.log(
      `${index + 1}/ '${item.population}' is the population of '${item.name}'\n`
    )
  );