// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license ===  'no license'){
    return '';
  }
return `![github badge](https://img.shields.io/badge/license-${license}-red.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license ===  'no license'){
    return '';
  }
  return '- [License](#license)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license ===  'no license'){
    return '';
  }
  return `
  
  ## License
  
  This project is covered under ${license} license.
  
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}  

  ## Description

  ${data.description}

  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Test](#test)
- [Question](#question)

## Installation

${data.installation}

## Usage

${data.usage}
${renderLicenseSection(data.license)}
## Contributing

${data.contributing}

## Test

${data.testing}

## Question 

Please check out my other work. My github profile is [${data.username}](https://github.com/${data.username})
 
if you have any additional questions please contact me at ${data.email}


`;
}

module.exports = generateMarkdown;
