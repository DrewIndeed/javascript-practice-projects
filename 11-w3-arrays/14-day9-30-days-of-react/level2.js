import { countries, products } from "./data.js";

/*
     * 1/ Find the total price of products by chaining two or more array 
    iterators(eg. arr.map(callback).filter(callback).reduce(callback))
    
    * 2/ Find the sum of price of products using only reduce reduce(callback))

    * 3/ Declare a function called categorizeCountries which returns 
    an array of countries which have some common pattern 
    (you find the countries array in this repository as 
    countries.js(eg 'land', 'ia', 'island','stan')).

    * 4/ Create a function which return an array of objects, 
    which is the letter and the number of times the letter use 
    to start with a name of a country.
    
    * 5/ Declare a getFirstTenCountries function and return an array 
    of ten countries. Use different functional programming to work 
    on the countries.js array

    * 6/ Declare a getLastTenCountries function which which returns 
    the last ten countries in the countries array.

    * 7/ Find out which letter is used many times as initial for 
    country name from the countries array (eg. Finland, Fiji, France etc)
*/

const result1 = products
  .filter((pd) => typeof pd.price === "number" && pd.price !== null)
  .reduce((priceSum, pd) => priceSum + pd.price, 0);
console.log("Sum of prices of products:", result1);

const result2 = products.reduce(
  (priceSum, pd) => priceSum + Number(pd.price),
  0
);
console.log("Sum of prices of products using reduce only:", result2);

const result4 = countries.reduce((frequency, country) => {
  if (!frequency[country.name.charAt(0)]) frequency[country.name.charAt(0)] = 1;
  else frequency[country.name.charAt(0)]++;
  return frequency;
}, {});
console.log("Count frequency of countries' starting letters:", result4);

const result7 = Object.entries(result4).reduce((compareFrom, compareTo) =>
  compareTo[1] > compareFrom[1] ? compareTo : compareFrom
);
console.log("The letter used many times as initial for country name:", result7);
