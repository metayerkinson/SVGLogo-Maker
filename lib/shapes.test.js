// Importing Triangle, Square, Circle classes from ./shapes.js
import { Triangle, Square, Circle } from "./shapes.js";

describe("Triangle test", () => {
  test("test for a triangle with green background", () => {
    const svgShape = new Triangle();
    svgShape.setColor("green");
    expect(svgShape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
    );
  });
});

describe("Square test", () => {
  test("test for a square with ared background", () => {
    const svgShape = new Square();
    svgShape.setColor("red");
    expect(svgShape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="red" />'
    );
  });
});

describe("Circle test", () => {
  test("test for a circle with a #ffff00 background", () => {
    const svgShape = new Circle();
    svgShape.setColor("#ffff00");
    expect(svgShape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="ffff00" />'
    );
  });
});
