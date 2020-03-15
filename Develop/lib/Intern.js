// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }
    // getSchool method
    getSchool() {
        return (this.school);
    };
}

var jimmy = new Intern("Jimmy", 3, "test3@test.com", "Texas State University");
// console.log(Jimmy);
// Jimmy.getSchool();
// jimmy.getRole();

module.exports = Intern;