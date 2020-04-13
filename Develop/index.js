const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");
const api = require("./utils/api.js");

const questions = [
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

    ]).then(generateMarkdown(data))
]

function writeToFile(fileName, data) {
}


async function init() {
    console.log("hi")
    try {
      const answers = await promptUser();
  
      const html = generateREADME(answers);
  
      await writeFileAsync("README.md", md);
  
      console.log("Successfully created a README!");
    } catch(err) {
      console.log(err);
    }
  }

  init();