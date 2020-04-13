const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const questions = [

];

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