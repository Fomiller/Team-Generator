// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id ,email);
        this.github = github;
        this.role = "Engineer";
    }
    // getGithub() method
    getGithub() {
        console.log(this.github)
    };
}

var dave = new Engineer("dave", 2, "test2@test.com", "githubDave");
// console.log(dave);
// dave.getRole();

module.exports = Engineer;