module.exports = data => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Team Profile</title>
    </head>
    <body>
        <div>
            <ul>
                ${data.map((employee, i) => (
                    `
                        <li id=${employee.id || i}>
                            <h5>${employee.name}</h5>
                        </li>
                    `
                ))}
            </ul>
        </div>
    </body>
    </html>
    `
};