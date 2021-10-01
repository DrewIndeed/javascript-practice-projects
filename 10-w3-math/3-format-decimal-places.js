// Write a JavaScript function to format a number up to specified decimal places.
// Write a JavaScript function to format a number up to specified decimal places.
const formatDecimalPlaces = (num, decPlaces) => {
  if ((typeof(num) !== 'number') || typeof(decPlaces) !== 'number')
    return "One of the params is not a number.";
  return num.toFixed(decPlaces);
};
console.log(formatDecimalPlaces(2.100212, 2));
console.log(formatDecimalPlaces(2.100212, 3));
console.log(formatDecimalPlaces('2100', 2));
