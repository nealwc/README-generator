function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.desctiption}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

##Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}
${data.gitHubProfilePicture}
${data.gitHubEmail}

## License

${data.license}

## Tests

${data.tests}

## Questions

${data.questions}

`;
}

module.exports = generateMarkdown;