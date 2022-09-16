const inquirer = require('inquirer');

const initialQuestion = () => {
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
        }
    ])
}

initialQuestion()
    .then(data => {
        console.log(data);
    })
