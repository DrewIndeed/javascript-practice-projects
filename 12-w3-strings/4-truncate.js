// Write a JavaScript function to truncates a string if it is longer than the specified number of characters.
// Truncated strings will end with
// a translatable ellipsis sequence("…")(by default ) or specified characters.
const truncate = (org, index = -1, additional = "...") => {
  if ((index <= 0 || index > org.length) && additional === "...")
    return org;
  return org.slice(0, index - additional.length) + " " + additional;
};

console.log(truncate("We are doing JS string exercises."));
console.log(truncate("We are doing JS string exercises.", -2));
console.log(truncate("We are doing JS string exercises.", 0));
console.log(truncate("We are doing JS string exercises.", 19));
console.log(truncate("We are doing JS string exercises.", 15, "!!!"));
