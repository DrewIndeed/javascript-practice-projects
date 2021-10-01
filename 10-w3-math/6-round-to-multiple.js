// Write a JavaScript function to round up an integer value to the next multiple of a number
const roundToMultipleOf = (num, multipleOf) => {
  const remain = num % multipleOf;
  const addWith = multipleOf - remain;
  console.log(
    `${roundToMultipleOf.name}(${num}, ${multipleOf}) is ${num + addWith}`
  );
};
roundToMultipleOf(37, 5);
roundToMultipleOf(55, 6);