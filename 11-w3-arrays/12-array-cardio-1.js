// From: https://courses.wesbos.com/

// Exercises
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log("1 - Inventors who were born in the 1500s");
let rs1 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1599
);
console.table(rs1);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
console.log("2 - Array of first and last names");
let rs2 = inventors.map((inventor) => inventor.first + " " + inventor.last);
console.log(rs2);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log("3 - Sort by birthyear");
let rs3 = inventors.sort((a, b) => a.year - b.year);
console.table(rs3);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
console.log("4 - Sum of all years they live");
let rs4 = inventors.reduce(
  (sum, inventor) => sum + (inventor.passed - inventor.year),
  0
);
console.log(rs4);

// 5. Sort the inventors by years lived
console.log("5 - Sort by years they live");
// way 1 to add another key-value pair to an object
// let withYearsLived = inventors.map((inventor) =>
//   Object.assign(inventor, { totalyears: inventor.passed - inventor.year })
// );

// way 2 to add another key-value pair to an object, fastest way
let withYearsLived = inventors.map((inventor) => {
  inventor.totalyears = inventor.passed - inventor.year;
  return inventor;
});
let rs5 = withYearsLived.sort(
  (a, b) => b.passed - b.year - (a.passed - a.year)
);
console.table(rs5);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
console.log("6 - Names that contains 'de'");
const blvNames = [
  "Boulevards of Paris",
  "City walls of Paris",
  "Thiers wall",
  "Wall of Charles V",
  "Wall of Philip II Augustus",
  "City gates of Paris",
  "Haussmann's renovation of Paris",
  "Boulevards of the Marshals",
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Malesherbes",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone",
];
let rs6 = blvNames.filter((name) => name.includes("de"));
console.log(rs6);

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log("7 - Sort the people by last name");
// Use this to compare to the correct result
// const alpha = people.sort((lastOne, nextOne) => {
//   const [aLast, aFirst] = lastOne.split(", ");
//   const [bLast, bFirst] = nextOne.split(", ");
//   return aLast > bLast ? 1 : -1;
// });
// console.log(alpha);
let rs7 = people.sort((a, b) => a.split(", ")[0] - b.split(", ")[0]);
console.log(rs7);

// 8. Reduce Exercise
// Sum up the instances of each of these
console.log("8 - Sum of each data object");
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
let rs8 = data.reduce((sum, item) => {
  if (!sum[item]) sum[item] = 1;
  else sum[item] += 1;
  return sum;
}, {});
console.log(rs8);
