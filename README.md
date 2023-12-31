
## User Story

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered



## Description

This application was built as a way to allow freelance web developers to create simple logos for their clients and projects so that they can forego paying a graphic designer. It utilizes inquirer to prompt the user within the command line for how they would like their logo to look (ie. what text they would like their logo to display (up to 3 characters in length), the color of that text, the shape of their logo (triangle, square, or circle) and the color of that shape.) Once the user answers all prompts, then an SVG file is written using their selections to generate a logo. This application also made use of unit testing. It utilizes one test suite, with three tests, all which are simply testing that the code base is delivering back correct shapes and colors. Building this application served as yet another look at what back-end developers can do without the use of a UI (user interface).


## Technologies Used

This project is powered by Node.js, utilizes inquirer  and file system module (node package manager). It also employs jest for the unit testing conducted in this application.

## Installation

1. Clone the repo:
   <!-- git clone  -->

2. Open in VS Code. If you do not have VS code you must install it.

3. Run 'npm i' from your terminal or bash shell within VScode. This will download

4. Run npm start and the server.js file will run


## Credits

Worked with tutor Funbi to help get me started on this assignment. We pseudo-coded the general outline together and she helped me put together the unit testing portion of atures

Features of this application include the users ability to generate logos quickly and easily through the use of SVG files, entirely from the command line. No UI (user interface) needed, and no front end tools needed.

## Usage Information

To run this application, use the command line to navigate to the directory of the application, install all dependencies (npm i), then type the command node server.js. You will then be taken through a series of questions. Once all questions have been answered properly, a message will display to the command line telling you your logo has been generated. Find your new logo in the newly generated SVG file.

For unit testing instructions, navigate to the Test Instructions section.

## Contribution Guidelines

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.

## Test Instructions

To run unit testing, open the terminal, and use the command npm run test.

As of now there is one test suite with three tests. The test suite is checking for a render() method to return a string for the corresponding SVG file with the given shape color.

## Questions

-github repo link: https://github.com/metayerkinson/svglogo-maker