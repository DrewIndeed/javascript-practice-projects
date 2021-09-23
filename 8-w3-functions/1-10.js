const reverseString = (str) => Array.from(str).reverse().join('');
console.log(reverseString("Andrew"));

const isPalindrome = (str) => reverseString(str).toLowerCase().replace(/[^a-z]/gi, '') === str.toLowerCase().replace(/[^a-z]/gi, '');
console.log(isPalindrome("madam"));
console.log(isPalindrome("Andrew Le Nguyen"));
console.log(isPalindrome("A dog! A panic in a pagoda."));
