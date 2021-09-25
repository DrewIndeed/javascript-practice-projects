function range(n1, n2) {
  // exclude head -> n2 - n1 === 2 and [n1 + 1]
  // include head -> n2 - n1 === 1 and [n1]
  if (n2 - n1 === 1) {
    return [n1];
  } else {
    let list = range(n1, n2 - 1);
    list.push(n2 - 1);
    // console.log(list);
    return list;
  }
}
console.log(range(1, 8));

/** exclude head
 * range(1,8) -> [2,3,4,5,6] -> [2,3,4,5,6,7]
 * range(1,7) ...
 * range(1,6) ...
 * range(1,5) -> [2,3] -> [2,3,4]
 * range(1,4) -> [2] -> [2,3]
 * range(1,3) -> [2]
 */
