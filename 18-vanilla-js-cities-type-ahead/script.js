const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// TODO Step 1: Fetch data from API endpoint and store in array
// container for result after fetching
const citiesResult = [];

// fetching from endpoint
fetch(endpoint)
  .then((response) => response.json())
  .then((data) => citiesResult.push(...data));

// print out to see response
console.log(citiesResult);

// TODO Step 2: Write function to match with what needs to be seached
const matchSearch = (queryStr, dataArray) => {
  // filter out cite and state names that match query string
  return dataArray.filter((location) => {
    // create new regex with global and case-insensitive tag
    const regex = new RegExp(queryStr, "gi");

    // using match() and regex to compare with the names
    return location.city.match(regex) || location.state.match(regex);
  });
};

// ! using setTimeOut because without it, this will be printed 
// ! asynchronously -> print before getting the response form the API
setTimeout(() => {
  console.log(matchSearch("bos", citiesResult));
}, 3000);

// TODO Step 3: Add onChange + onKeyUp event listener for search input
// TODO Step 4: Write function to render fetched data as list items
// TODO Step 4.1: Highlight search part from list items' names of cities and states
// TODO Step 5: Write a function of put commas into population value
