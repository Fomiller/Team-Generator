const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
async function init(){
    // create array of starter questions
    const questions = [{
        type: "confirm",
        name: "createEmployee",
        message: "Do you want to create a new employee?",
        default: true,
    },
    {
        type: "list",
        name: "role",
        message: "What type of employee are we creating?",
        choices: [
            {name: "Intern", checked: false},
            {name: "Engineer", checked: false},
            {name: "Manager", checked: false},
        ],
    },
    {
        type: "confirm",
        name: "repeat",
        message: "Do you want to create another employee?",
        default: false,
    },]
    const internQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter employee name.",
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee id.",
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee email.",
        },
        {
            type: "input",
            name: "school",
            message: "Enter interns school.",
        },

    ]
    const engineerQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter employee name.",
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee id.",
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee email.",
        },
        {
            type: "input",
            name: "github",
            message: "Enter employee GitHub.",
        },
    ]
    const managerQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter employee name.",
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee id.",
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee email.",
        },
        {
            type: "input",
            name: "office",
            message: "Enter manager office number.",
        },
    ]
    // Array of employees, starts empty
    const employees = []; 
    // create a variable that stores a yes/no value from questions[0]
    const ask = await inquirer.prompt(questions[0]);
    // deconstruct ask
    const { createEmployee } = ask;
    // make another employee
    let exit = false;
    console.log(exit)
    // if createEmployee === true,
    // then you are prompted what role this employee will have
    // do {
        if (createEmployee === true) {
            const type = await inquirer.prompt(questions[1]);
            const { role } = type;
            // if role === "intern" construct intern
            if (role === "Intern") {
                const internObj = await inquirer.prompt(internQuestions);
                // deconstruct internObj
                const { name, id, email, school } = internObj
                // construct new Intern
                const newIntern = new Intern(name, id, email, school);
                // push newIntern to employees array
                employees.push(newIntern);
                // ask if you would like to create another employee
                const runAgain = await inquirer.prompt(questions[2]);
                // deconstruct run runAgain
                const { repeat } = runAgain
                // set exit condition to either true or false
                exit = repeat;

            }
            // if role === "Engineer" construct Engineer 
            else if (role === "Engineer") {
                // let engineerQuestions = 
                const engineerObj = await inquirer.prompt(engineerQuestions);
                // deconstruct engineerObj
                const { name, id, email, github } = engineerObj;
                // construct new Engineer
                const newEngineer = new Engineer(name, id, email, github);
                // push newEngineer to employees array
                employees.push(newEngineer);
                const runAgain = await inquirer.prompt(questions[2]);
                // deconstruct run runAgain
                const { repeat } = runAgain
                // set exit condition to either true or false
                exit = repeat;  
            }
            // if role === "Manager" construct Manager
            else if (role === "Manager") {
                // let managerQuestions = 
                const managerObj = await inquirer.prompt(managerQuestions);
                // deconstruct managerObj
                const { name, id, email, office } = managerObj;
                // construct new Manager
                const newManager = new Manager(name, id, email, office); 
                // push newIntern to employees array
                employees.push(newManager);
                const runAgain = await inquirer.prompt(questions[2]);
                // deconstruct run runAgain
                const { repeat } = runAgain
                // set exit condition to either true or false
                exit = repeat;  
            }
        //  if createEmployee === false 
        // then Finsished creating Employees.
        } else if (createEmployee === false) {
            console.log("Finished creating employees..."+ "You have " + employees.length + " employees." );
        };
    // }
    // while (exit = false);
    // console.log("end: " + exit);
    // console.log("Finished creating employees..."+ "You have " + employees.length + " employees." );
}

init();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
