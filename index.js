const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const dotenv = require("dotenv");

// * At least one badge
// * Project title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions
//   * User GitHub profile picture
//   * User GitHub email

inquirer.prompt([
    {
        type: "input",
        name: "email",
        message: "What is your GitHub email?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a descrition of your project:",
    },
    {
        type: "input",
        name: "contents",
        message: "Table of Contents",
    },
    {
        type: "input",
        name: "installation",
        message: "installation",
    },
    {
        type: "input",
        name: "usage",
        message: "What's the usage of the project?",
    },
    {
        type: "input",
        name: "license",
        message: "What licenses are used in the project?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of the project?",
    },
]).then(function (data) {

    // var filename = data.name.toLowerCase().split(' ').join('') + ".json";

    fs.writeFile("testREADME.md", JSON.stringify(data, null, '\t'), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("README generated!");

    });
});