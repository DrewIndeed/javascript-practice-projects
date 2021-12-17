// ! Source: https://medium.com/@thebabscraig/javascript-design-patterns-part-1-the-factory-pattern-5f135e881192
import { gadgetFactory } from "./gadgetFactory.js";

const myLaptop = gadgetFactory.createGadget("Laptop", {
  ram: 8,
  ssd: 256,
  name: "Bab's MacBook Pro",
});
const myTablet = gadgetFactory.createGadget("Tablet", {
  ram: 4,
  hdd: 128,
  name: "Bab's iPad",
  network: "4G",
});

console.log(myLaptop);
console.log(myTablet);
