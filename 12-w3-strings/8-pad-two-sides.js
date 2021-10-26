// Write a JavaScript function that can pad (left, right) a string to get to a determined length
const padBothSides = (str, num, side = 'r') => {
	if (side == 'l' || side == 'r') return "Invalid side";
	if (side == 'r') return ((num + "") + str).slice(0, (str + (num + "")).length - (num + "").length);
	return (str + (num + "")).slice((num + "").length, (str + (num + "")).length);
}

console.log(padBothSides('0000', 123, 'l'));
console.log(padBothSides('00000000', 123));