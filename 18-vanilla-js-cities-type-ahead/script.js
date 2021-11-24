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
}, 2000);

// TODO Step 3: Add onChange + onKeyUp event listener for search input
// TODO Step 4: Write function to render fetched data as list items
// get ui component from DOM tree
const searchInput = document.querySelector(".search");
const suggestionsList = document.querySelector(".suggestions");

const displayResult = (e) => {
  // get current input value
  const matchingPlaces = matchSearch(e.target.value, citiesResult);

  // create an array of <li> items
  const renderAsListItems = matchingPlaces
    .map((location) => {
      // TODO Step 4.1: Highlight search part from list items' names of cities and states
      const regex = new RegExp(e.target.value, "gi");
      // create s span to wrap around searching
      // part and use 'hl' class to hightlight
      const cityName = location.city.replace(
        regex,
        `<span class="hl">${e.target.value}</span>`
      );
      const stateName = location.state.replace(
        regex,
        `<span class="hl">${e.target.value}</span>`
      );

      // return li html component with attached and highlighted data
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${location.population}</span>
        </li>
      `;
    })
    .join(""); // join the as a big string

  // set the html content cities <ul> as the big <li> items string
  suggestionsList.innerHTML = renderAsListItems;
};

// add event listenners to handle input change
searchInput.addEventListener("change", displayResult);
searchInput.addEventListener("keyup", displayResult);
searchInput.addEventListener("keydown", displayResult);

// TODO Step 5: Write a function of put commas into population value
