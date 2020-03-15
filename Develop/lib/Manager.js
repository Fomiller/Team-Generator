// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    // getOfficeNumber() method
    getOfficeNumber() {
        return (this.officeNumber);
    };
}

var carl = new Manager("Carl", 4, "test4@test.com", 4200);
// console.log(carl);
// carl.getOfficeNumber();
// carl.getRole();

module.exports = Manager;
