// this is the interface
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // static getter, read more at
  // https://stackoverflow.com/questions/42884751/whats-the-meaning-of-static-get-in-javascript-es6
  // this is the factory method that is specified in the interface
  static get factory() {
    return new PointFactory(); // a class that represents the point factory
  }
}

// this the child class that implements the interface
class PointFactory {
  // this is a Factory Method
  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  // this is a Factory Method
  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

// use static methods of Factory
let point1 = PointFactory.newCartesianPoint(5, 6);
let point2 = PointFactory.newPolarPoint(5, Math.PI / 2);

// console log created objects
console.log(point1);
console.log(point2);
