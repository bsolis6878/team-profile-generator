const inquirer = require('inquirer');

const initialQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Welcome to the team profile generator! What is the manager's name?",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the manager's employee ID?",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's employee ID.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's email address?",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email address.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: "What is the manager's office number?",
            validate: managerNumberInput => {
                if (managerNumberInput) {
                    return true;
                } else {
                    console.log("Please enter a valid office number.")
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'continue',
            message: "Would you like to add an engineer or intern to your team, or finish and generate the document?",
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ])
}

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's employee ID?",
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's employee ID.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email address?",
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email address.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's Github username?",
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's Github username.")
                    return false;
                }
            }
        }
    ])
}

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's employee ID?",
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's employee ID.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email address?",
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email address.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the name of the intern's school?",
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log("Please enter the name of the intern's school.")
                    return false;
                }
            }
        }
    ])
}

initialQuestions()
    .then(data => {
        if (data.continue === 'Engineer') {
            engineerQuestions()
        } else if (data.continue === 'Intern') {
            internQuestions();
        } else if (data.continue === 'Finish') {
            // createHtml();
        }
    });