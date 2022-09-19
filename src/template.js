module.exports = data => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Team Profile</title>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    </head>
    <body>
        <header class="bg-danger">
            <h1 class="text-center py-5">Team Profile</h1>
        </header>
        <main class="d-flex justify-content-center flex-row">
            ${data.map((employee) => (   
                ` 
                <div class="d-flex flex-column m-5 p-5 text-center">
                    <div class="bg-dark p-2">
                        <h5>${nameCheck(employee)}</h5>
                    </div>
                    <div class="bg-secondary d-flex flex-column p-2">
                        <span>Employee ID: ${employee.id}</span>
                        <span>Email: ${employee.email}</span>
                        <span>${dataChecks(employee)}</span>
                    </div>
                </div>
                `
            )).join('')}
        </main>
    </body>
    </html>
    `
};
const nameCheck = (employee) => {
    if (employee.role === 'Manager') {
        return `${employee.name}</br>Manager`
    } else if (employee.role === 'Engineer') {
        return `${employee.name}</br>Engineer`
    } else if (employee.role === `Intern`) {
        return `${employee.name}</br>Intern`
    }
}

const dataChecks = (employee) => {
    if (employee.officeNumber) {
        return `Office number: ${employee.officeNumber}`
    } else if (employee.github) {
        return `Github: ${employee.github}`
    } else if (employee.school) {
        return `School: ${employee.school}`
    }
}