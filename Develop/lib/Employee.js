// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    // getName() method
    getName() {
        console.log(this.name)
    }
    // getId() Method
    getId() {
        console.log(this.id)
    }
    // getEmail() method
    getEmail() {
        console.log(this.email)
    }
    // getRole() method
    getRole() {
        console.log(this.role)
    }
}

var jeff = new Employee("jeff", 1, "test@test.com");
// console.log(jeff);
// jeff.getRole();




module.exports = Employee;