// Create complex numbers and compute operations
class ComplexNumber {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getA = () => this.a;
  getB = () => this.b;
  toString = () =>
    this.b < 0
      ? `${this.a} - ${Math.abs(this.b)}i`
      : this.b == 0
      ? `${this.a} + 0i`
      : `${this.a} + ${this.b}i`;
  add = (target) => {
    return new ComplexNumber(
      this.a + target.getA(),
      this.b + target.getB()
    ).toString();
  };
  substract = (target) => {
    return new ComplexNumber(
      this.a - target.getA(),
      this.b - target.getB()
    ).toString();
  };
  multiply = (target) => {
    return new ComplexNumber(
      this.a * target.getA() - this.b * target.getB(),
      this.a * target.getB() + this.b * target.getA()
    ).toString();
  };
  divide = (target) => {
    return new ComplexNumber(
      (
        (this.a * target.getA() + this.b * target.getB()) /
        (Math.pow(target.getA(), 2) + Math.pow(target.getB(), 2))
      ).toFixed(2),
      (
        (this.b * target.getA() - this.a * target.getB()) /
        (Math.pow(target.getA(), 2) + Math.pow(target.getB(), 2))
      ).toFixed(2)
    ).toString();
  };
}

const cp1 = new ComplexNumber(3, 5);
const cp2 = new ComplexNumber(6, -10);
console.log("Num 1:", cp1.toString());
console.log("Num 2:", cp2.toString());
console.log("Num 1 + num 2:", cp1.add(cp2));
console.log("Num 2 - num 1:", cp2.substract(cp1));
console.log("Num 1 * num 2:", cp1.multiply(cp2));
console.log("Num 2 / num 1:", cp2.divide(cp1));
