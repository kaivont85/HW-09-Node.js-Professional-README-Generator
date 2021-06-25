const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");


const questions = [

    {
        type: "input",
        name: "githubUserName",
        message: "What is your github username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?"  

    },
    {
        type: "input",
        name: "projectName",
        message: "What is the name of the project?"  

    },
    {
        type: "input",
        name: "projectDescription",
        message: "Give a description of your project"  

    },
    {
        type: "input",
        name: "instalInstructions",
        message: "What are the instalation instructions"  

    },
    {
        type: "input",
        name: "projectUse",
        message: "How do you want your project used?"  

    },

    {
        type: "list",
        name: "licenses",
        message: "What type of licenses are you using?",
        choices: ["MIT", "NONE"] 
        // put in atleast 5

    },

    {
        type: "input",
        name: "contributions",
        message: "Who has contributed in getting this project completed?"  

    },

    {
        type: "input",
        name: "tests",
        message: "what kind of tests did you run?"  

    },
    {
        type: "input",
        name: "contactInfo",
        message: "Who should be contacted for further questions and how can they be contacted?"  

    }
]



function goAsk() {
    inquirer.prompt(questions) 
        .then((responses) => {
            console.log(responses)
            return fs.writeFileSync(path.join(__dirname, "readmeGenerator.md"), readmeTemplate(responses))
        
            

        })
}

function badges(badgeType) {
    if (badgeType !== "NONE") {
        return  `![Badges] (https://img.shields.io/badge/license-${badgeType}-blue.svg)`   
    }
   return ""
     
}


function readmeTemplate(responses) {
const license = badges(responses.licenses)

    return ( 
    
        `# ${responses.projectName}
    
    ​
    ## Description 
    ​
    ${responses.projectDescription}
    ​
    ## Table of Contents
    
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Tests](#tests)
    * [Contact Info](#contact)
    
    
    ## Installation
    
    ${responses.instalInstructions}
    ​
    
    ## Usage 
    
    ${responses.projectUse}
    ​
    ​
    ## Credits
    
    ${responses.contributions}
    ​
    ​
    ## License
    
    ${license}
    ​
    
    ​
    ## Badges
    ​
   
    ​
    ## Tests
    
    ${responses.tests}
    
    ## Contact Info
    
    ${responses.contactInfo}
    
    `)



}
    

goAsk()

