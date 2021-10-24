const insert = (org, tar = "", index = 0) => {
  if (tar === "") return org;
  if (index === 0) return tar + org;
  if (index === -1) return org + tar;
  return org.slice(0, index) + tar + org.slice(index, org.length);
};

console.log(insert("Le Nguyen"));
console.log(insert("Le Nguyen", "Andrew "));
console.log(insert("Le Nguyen", "Andrew ", 3));
console.log(insert("Le Nguyen", " Andrew", -1));