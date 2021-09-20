/**
 * Examples for Array Iteration methods (from FCC there would be 8)
 # 01. forEach: call a function once for each element
 # 02. map: 
 # 03. filter 
 # 04. reduce
 # 05. every
 # 06. some
 # 07. find
 # 08. findIndex
 * 09. reduceRight
 * 10. indexOf
 * 11. lastIndexOf
 * 12. includes
 * 13. from
 * 14. keys
*/

// test samples
const numbers = [45, 1002, 9, 16, 25, 5, 123, 68, 20];
const names = ["Andrew", "John", "Phiphi", "Kevin", "Nathan", "Ericsson"];
const obj = {
  Andrew: 45,
  John: 1002,
  Phiphi: 123,
  Nathan: 68,
};

// 1
console.log("--- forEach test 1: iterate through array ---")
numbers.forEach((value, index) => console.log(`Index: ${index}\tValue: ${value}`));
console.log("\n--- forEach test 2: iterate through object ---")
Object.keys(obj).forEach((key, index) => console.log(`Key: ${key}\tIndex: ${index}\tValue: ${obj[key]}`));

