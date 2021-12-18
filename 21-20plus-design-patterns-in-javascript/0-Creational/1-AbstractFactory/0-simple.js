// ! Source: https://dev.to/dhiwise/advanced-javascript-design-patterns-4k8l
/**
 * * Try these things:
 * * 1/ Delete consume() in Tea class and leave the class blank 
 * * -> you will see that the consume() from Drink is actually overridden
 * * 2/ Comment out the makeTea() in Tea class
 * * -> you will see that the makeDrink() is actually inherit 
 * * -> makeDrink() is usable for TeaFactory instances (don't forget put in the amount)
*/

// base class
class Drink {
  consume() {
    console.log("This Drink is yummy!");
  }
}

// concrete product
class Tea extends Drink {
  consume() {
    console.log("This Tea is yummy!");
  }
}

// concrete product
class Smoothie extends Drink {
  consume() {
    console.log("This Smoothie is yummy!");
  }
}

// group of factories 
class DrinkFactory {
  makeDrink(cups) {
    console.log("Making " + cups + " cups of Drink");
    return new Drink();
  }
}

class TeaFactory extends DrinkFactory {
  makeTea(cups) {
    console.log("Making " + cups + " cups of Tea");
    return new Tea();
  }
}

class SmoothieFactory extends DrinkFactory {
  makeSmoothie(cups) {
    console.log("Making " + cups + " cups of Smoothie");
    return new Smoothie();
  }
}

// usage
let teaFactory = new TeaFactory();
let tea = teaFactory.makeTea(5);
tea.consume();
