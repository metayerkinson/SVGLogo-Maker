import inquirer from "inquirer";
import fs from "fs";

import { Triangle, Square, Circle } from "./lib/shapes";

function saveToFile(fileName, answers) {
  let string = "";

  string =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  string += "<g>";

  string += `${answers.shape}`;

  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    string += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    string += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    string += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  string += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

  string += "</g>";

  string += "</svg>";

  fs.saveToFile(fileName, string, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

// This function utilizes inquirer .prompt to prompt the user to answer questions in the command line and save user input
function promptQuestion() {
  inquirer
    .prompt([
      // Text prompt
      {
        type: "input",
        message: "Enter your text (Enter up to three characters)",
        name: "text",
      },
      // Text color prompt
      {
        type: "input",
        message:
          "Enter the text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
      },
      // Shape choice prompt
      {
        type: "list",
        message: "Enter your shape choice",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      // Shape color prompt
      {
        type: "input",
        message:
          "Enter your choice of color (Enter color keyword OR a hexadecimal number)",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptQuestion();
      } else {
        writeToFile("logo.svg", answers);
      }
    });
}

promptQuestion();
